import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load tools data
const toolsPath = path.resolve(__dirname, '../client/src/data/tools.json');
const toolsData = JSON.parse(await fs.readFile(toolsPath, 'utf-8'));

// Routes to pre-render
const staticRoutes = [
  '/',
  '/tools',
  '/about',
  '/blog',
  '/newsletter',
  '/top-10',
  '/prompts-to-profits',
  '/compare/apollo-vs-hunter',
  '/compare/lemlist-vs-instantly',
  '/compare/mailchimp-vs-activecampaign',
  '/compare/jasper-vs-copyai'
];

const toolRoutes = toolsData.map(tool => `/tool/${tool.slug}`);
const allRoutes = [...staticRoutes, ...toolRoutes];

console.log(`🚀 Starting pre-rendering of ${allRoutes.length} pages...`);
console.log(`   - ${staticRoutes.length} static pages`);
console.log(`   - ${toolRoutes.length} tool pages\n`);

// Start local server
const { spawn } = await import('child_process');
const server = spawn('npx', ['serve', 'dist', '-p', '4173'], {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'ignore'
});

// Wait for server to start
await new Promise(resolve => setTimeout(resolve, 2000));

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

let successCount = 0;
let errorCount = 0;

for (const route of allRoutes) {
  try {
    const page = await browser.newPage();
    const url = `http://localhost:4173${route}`;
    
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait a bit for React to hydrate
    await page.waitForTimeout(500);

    // Get the full HTML
    const html = await page.content();

    // Write to dist folder
    const distPath = path.resolve(__dirname, '../dist');
    const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
    const filePath = path.join(distPath, routePath);

    // Create directory if needed
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Write HTML file
    await fs.writeFile(filePath, html, 'utf-8');

    await page.close();
    successCount++;
    
    if (successCount % 10 === 0) {
      console.log(`   ✓ Pre-rendered ${successCount}/${allRoutes.length} pages...`);
    }
  } catch (error) {
    console.error(`   ✗ Error rendering ${route}:`, error.message);
    errorCount++;
  }
}

await browser.close();
server.kill();

console.log(`\n✅ Pre-rendering complete!`);
console.log(`   Success: ${successCount} pages`);
if (errorCount > 0) {
  console.log(`   Errors: ${errorCount} pages`);
}

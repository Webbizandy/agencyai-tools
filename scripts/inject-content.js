import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load tools data
const toolsPath = path.resolve(__dirname, '../client/src/data/tools.json');
const toolsData = JSON.parse(await fs.readFile(toolsPath, 'utf-8'));

console.log(`🚀 Injecting SEO-friendly content into ${toolsData.length} tool pages...`);

// Read the base index.html from dist
const indexPath = path.resolve(__dirname, '../dist/index.html');
let baseHtml = await fs.readFile(indexPath, 'utf-8');

let successCount = 0;

for (const tool of toolsData) {
  try {
    // Create SEO-friendly content for this tool
    const seoContent = `
      <noscript>
        <div style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: system-ui;">
          <h1>${tool.name} Review 2025 - AgencyAI.tools</h1>
          <p>${tool.description}</p>
          
          ${tool.andysTake ? `
          <section>
            <h2>Andy's Take</h2>
            ${typeof tool.andysTake === 'string' 
              ? `<p>${tool.andysTake}</p>` 
              : (tool.andysTake.snippet 
                ? `<p>${tool.andysTake.snippet}</p>
                   ${tool.andysTake.mainTake ? `<p>${tool.andysTake.mainTake.substring(0, 500)}...</p>` : ''}`
                : `<p>${Array.isArray(tool.andysTake) ? tool.andysTake.join(' ') : JSON.stringify(tool.andysTake)}</p>`
              )
            }
          </section>
          ` : ''}
          
          <section>
            <h2>Key Features</h2>
            <ul>
              ${tool.features ? tool.features.map(f => `<li>${f}</li>`).join('') : ''}
            </ul>
          </section>
          
          ${tool.pricing ? `
          <section>
            <h2>Pricing</h2>
            <p>${tool.pricing}</p>
          </section>
          ` : ''}
          
          ${tool.pros && tool.pros.length > 0 ? `
          <section>
            <h2>Pros</h2>
            <ul>
              ${tool.pros.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </section>
          ` : ''}
          
          ${tool.cons && tool.cons.length > 0 ? `
          <section>
            <h2>Cons</h2>
            <ul>
              ${tool.cons.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </section>
          ` : ''}
          
          <p><a href="${tool.website}" target="_blank" rel="noopener">Visit ${tool.name} →</a></p>
          <p><a href="/">← Back to AgencyAI.tools</a></p>
        </div>
      </noscript>
    `;

    // Create tool-specific HTML
    let toolHtml = baseHtml;
    
    // Update title
    toolHtml = toolHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${tool.name} Review 2025 - AgencyAI.tools</title>`
    );
    
    // Update meta description
    let metaDesc = tool.andysTake || tool.description || `Comprehensive review of ${tool.name} for agency owners`;
    // Handle arrays or objects
    if (typeof metaDesc !== 'string') {
      metaDesc = Array.isArray(metaDesc) ? metaDesc.join(' ') : String(metaDesc);
    }
    toolHtml = toolHtml.replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${metaDesc.substring(0, 160)}">`
    );
    
    // Inject noscript content after <body> tag
    toolHtml = toolHtml.replace(
      /<body>/,
      `<body>${seoContent}`
    );

    // Create directory for this tool
    const toolDir = path.resolve(__dirname, `../dist/tool/${tool.slug}`);
    await fs.mkdir(toolDir, { recursive: true });

    // Write the HTML file
    const toolHtmlPath = path.join(toolDir, 'index.html');
    await fs.writeFile(toolHtmlPath, toolHtml, 'utf-8');

    successCount++;
    
    if (successCount % 10 === 0) {
      console.log(`   ✓ Processed ${successCount}/${toolsData.length} tools...`);
    }
  } catch (error) {
    console.error(`   ✗ Error processing ${tool.slug}:`, error.message);
  }
}

console.log(`\n✅ Content injection complete!`);
console.log(`   Success: ${successCount}/${toolsData.length} tool pages`);
console.log(`\n📊 Impact:`);
console.log(`   - Search engines can now read content without JavaScript`);
console.log(`   - Each tool page has title, description, and full content in HTML`);
console.log(`   - Position improvement expected: 45 → 25-30 within 2-4 weeks`);

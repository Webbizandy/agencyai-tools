const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Tool URLs to capture screenshots from (Priority: Top 10)
const tools = [
  { name: 'servicetitan', url: 'https://www.servicetitan.com', filename: 'servicetitan-dashboard.jpg' },
  { name: 'jasper', url: 'https://www.jasper.ai', filename: 'jasper-dashboard.jpg' },
  { name: 'make', url: 'https://www.make.com', filename: 'make-dashboard.jpg' },
  { name: 'instantly', url: 'https://www.instantly.ai', filename: 'instantly-dashboard.jpg' },
  { name: 'activecampaign', url: 'https://www.activecampaign.com', filename: 'activecampaign-dashboard.jpg' },
  { name: 'hubspot', url: 'https://www.hubspot.com/products/crm', filename: 'hubspot-dashboard.jpg' },
  { name: 'zapier', url: 'https://www.zapier.com', filename: 'zapier-dashboard.jpg' },
  { name: 'midjourney', url: 'https://www.midjourney.com', filename: 'midjourney-dashboard.jpg' },
  { name: 'synthesia', url: 'https://www.synthesia.io', filename: 'synthesia-dashboard.jpg' },
  { name: 'descript', url: 'https://www.descript.com', filename: 'descript-dashboard.jpg' },
];

const screenshotsDir = path.join(__dirname, '..', 'client', 'public', 'screenshots');

// Ensure screenshots directory exists
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function captureScreenshot(tool) {
  let browser;
  try {
    console.log(`Capturing screenshot for ${tool.name}...`);
    
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });
    
    const page = await browser.newPage();
    
    // Set viewport to standard desktop size
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to the URL
    await page.goto(tool.url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait a bit for animations to finish
    await page.waitForTimeout(2000);
    
    // Take screenshot
    const screenshotPath = path.join(screenshotsDir, tool.filename);
    await page.screenshot({ 
      path: screenshotPath,
      type: 'jpeg',
      quality: 85,
      fullPage: false
    });
    
    console.log(`✓ Screenshot saved: ${tool.filename}`);
    return { success: true, tool: tool.name };
    
  } catch (error) {
    console.error(`✗ Error capturing ${tool.name}:`, error.message);
    return { success: false, tool: tool.name, error: error.message };
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function captureAllScreenshots() {
  console.log('Starting screenshot capture for 10 tools...\n');
  
  const results = [];
  
  for (const tool of tools) {
    const result = await captureScreenshot(tool);
    results.push(result);
    
    // Add a small delay between captures to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n========== CAPTURE SUMMARY ==========');
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`\n✓ Successful: ${successful.length}/${tools.length}`);
  successful.forEach(r => console.log(`  - ${r.tool}`));
  
  if (failed.length > 0) {
    console.log(`\n✗ Failed: ${failed.length}/${tools.length}`);
    failed.forEach(r => console.log(`  - ${r.tool}: ${r.error}`));
  }
  
  console.log('\n=====================================\n');
  console.log('PAUSING FOR USER REVIEW - Please check the screenshots before continuing.');
}

// Run the script
captureAllScreenshots().catch(console.error);

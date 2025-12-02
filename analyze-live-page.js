import { chromium } from 'playwright';

async function analyzePage(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log(`\n🔍 Analyzing: ${url}\n`);
  
  await page.goto(url, { waitUntil: 'networkidle' });
  
  // Get page title
  const title = await page.title();
  console.log(`📄 Title: ${title}`);
  
  // Get all links
  const links = await page.$$eval('a[href]', links => 
    links.map(a => ({
      text: a.textContent.trim(),
      href: a.href,
      isInternal: a.href.includes('agencyai.tools')
    }))
  );
  
  const internalLinks = links.filter(l => l.isInternal);
  const externalLinks = links.filter(l => !l.isInternal);
  
  console.log(`\n🔗 Links Found:`);
  console.log(`   Internal: ${internalLinks.length}`);
  console.log(`   External: ${externalLinks.length}`);
  
  // Get main headings
  const headings = await page.$$eval('h1, h2, h3', headings =>
    headings.map(h => ({
      tag: h.tagName,
      text: h.textContent.trim().substring(0, 80)
    }))
  );
  
  console.log(`\n📋 Main Headings:`);
  headings.slice(0, 10).forEach(h => {
    console.log(`   ${h.tag}: ${h.text}`);
  });
  
  // Check for Andy's Take section
  const andysTake = await page.$('text="Andy\'s Take"');
  console.log(`\n✅ Andy's Take Section: ${andysTake ? 'Present' : 'Missing'}`);
  
  // Get word count of main content
  const content = await page.$eval('body', el => el.textContent);
  const wordCount = content.split(/\s+/).length;
  console.log(`📊 Total Word Count: ${wordCount}`);
  
  // Check for broken images
  const brokenImages = await page.$$eval('img', imgs =>
    imgs.filter(img => !img.complete || img.naturalHeight === 0).length
  );
  console.log(`🖼️  Broken Images: ${brokenImages}`);
  
  // Take a screenshot
  await page.screenshot({ path: '/home/user/webapp/screenshot.png', fullPage: false });
  console.log(`\n📸 Screenshot saved to: /home/user/webapp/screenshot.png`);
  
  await browser.close();
  
  return {
    title,
    internalLinks,
    externalLinks,
    headings,
    wordCount,
    hasAndysTake: !!andysTake,
    brokenImages
  };
}

// Main
(async () => {
  const url = process.argv[2] || 'https://www.agencyai.tools/tool/chatbase';
  await analyzePage(url);
})();

#!/usr/bin/env node
/**
 * Generate sitemap.xml for AgencyAI.tools
 * Includes all pages: static pages, tools, blog posts, comparison pages
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const SITE_URL = 'https://agencyai.tools';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Read tools data - only extract slug and featured fields for performance
const toolsFileContent = readFileSync(join(__dirname, 'client/src/data/tools.json'), 'utf-8');
const toolsData = JSON.parse(toolsFileContent);

// Static pages
const staticPages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/tools', priority: 0.9, changefreq: 'weekly' },
  { path: '/top-10', priority: 0.9, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/prompts-to-profits', priority: 0.9, changefreq: 'monthly' },
];

// Stack pages (to be built)
// NOTE: These pages don't exist yet, so they're commented out to avoid Soft 404 errors
// Uncomment when the pages are actually built
const stackPages = [
  // { path: '/stack/starting-out', priority: 0.9, changefreq: 'monthly' },
  // { path: '/stack/growing', priority: 0.9, changefreq: 'monthly' },
  // { path: '/stack/scaling', priority: 0.9, changefreq: 'monthly' },
  // { path: '/stack/lead-generation', priority: 0.8, changefreq: 'monthly' },
  // { path: '/stack/chatbot-services', priority: 0.8, changefreq: 'monthly' },
  // { path: '/stack/social-media', priority: 0.8, changefreq: 'monthly' },
  // { path: '/stack/email-marketing', priority: 0.8, changefreq: 'monthly' },
  // { path: '/stack/websites-funnels', priority: 0.8, changefreq: 'monthly' },
  // { path: '/stack/white-label', priority: 0.8, changefreq: 'monthly' },
];

// Comparison pages
const comparisonPages = [
  { path: '/compare/gohighlevel-vs-clickfunnels', priority: 0.8, changefreq: 'monthly' },
  { path: '/compare/apollo-vs-hunter', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/jasper-vs-copyai', priority: 0.7, changefreq: 'monthly' },
  { path: '/compare/make-vs-zapier', priority: 0.7, changefreq: 'monthly' },
];

// Blog posts
const blogPosts = [
  { path: '/blog/best-ai-tools-for-marketing-agencies', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/how-to-sell-ai-services', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/white-label-ai-tools', priority: 0.7, changefreq: 'monthly' },
];

// Generate tool pages from tools.json
const toolPages = toolsData.map(tool => ({
  path: `/tool/${tool.slug}`,
  priority: tool.featured ? 0.8 : 0.7,
  changefreq: 'monthly'
}));

// Combine all URLs
const allUrls = [
  ...staticPages,
  ...stackPages,
  ...comparisonPages,
  ...blogPosts,
  ...toolPages,
];

// Generate XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${SITE_URL}${url.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public folder
const outputPath = join(__dirname, 'client/public/sitemap.xml');
writeFileSync(outputPath, sitemapXml);

console.log(`✅ Sitemap generated successfully!`);
console.log(`📍 Location: ${outputPath}`);
console.log(`📊 Stats:`);
console.log(`   - Static pages: ${staticPages.length}`);
console.log(`   - Stack pages: ${stackPages.length}`);
console.log(`   - Tool pages: ${toolPages.length}`);
console.log(`   - Blog posts: ${blogPosts.length}`);
console.log(`   - Comparison pages: ${comparisonPages.length}`);
console.log(`   - Total URLs: ${allUrls.length}`);
console.log(`\n🔗 Sitemap URL: ${SITE_URL}/sitemap.xml`);

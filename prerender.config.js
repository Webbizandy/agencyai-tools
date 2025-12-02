import tools from './client/src/data/tools.json' assert { type: 'json' };

// Generate all tool routes
const toolRoutes = tools.map(tool => `/tool/${tool.slug}`);

// Static routes
const staticRoutes = [
  '/',
  '/tools',
  '/about',
  '/blog',
  '/newsletter',
  '/prompts-to-profits',
  '/top-10',
  '/compare/apollo-vs-hunter',
  '/compare/lemlist-vs-instantly',
  '/compare/mailchimp-vs-activecampaign',
  '/compare/jasper-vs-copyai'
];

// Combine all routes
export const routes = [...staticRoutes, ...toolRoutes];

console.log(`Pre-rendering ${routes.length} routes:`);
console.log(`- ${staticRoutes.length} static pages`);
console.log(`- ${toolRoutes.length} tool pages`);

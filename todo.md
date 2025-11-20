# AgencyAI.tools - Project TODO

## Phase 1: Design & Homepage
- [x] Set up color palette and typography (Clean & Friendly design)
- [x] Create header/navigation component
- [x] Build homepage hero section
- [x] Create featured tools section
- [x] Build categories grid section
- [x] Create footer component
- [x] Add responsive design for mobile

## Phase 2: Core Directory Pages
- [x] Create tools data structure (JSON)
- [x] Build tools listing page with filtering
- [x] Create individual tool detail pages
- [x] Implement category filtering
- [x] Add search functionality
- [ ] Create "Submit a Tool" page

## Phase 3: Content Writing (Andy's Voice)
- [ ] Write homepage copy
- [ ] Write 50+ tool descriptions
- [ ] Create category descriptions
- [ ] Write About page content
- [ ] Create comparison articles (3-5 SEO pieces)

## Phase 4: Lead Capture
- [ ] Build email capture form component
- [ ] Create lead magnet landing page
- [ ] Integrate with GHL (or ConvertKit)
- [ ] Add email capture to homepage
- [ ] Create thank you page

## Phase 5: Launch Prep
- [ ] SEO meta tags for all pages
- [ ] Add Google Analytics
- [ ] Create sitemap
- [ ] Test all links and forms
- [ ] Mobile responsiveness check
- [ ] Performance optimization
- [ ] Create deployment checkpoint

## Future Features (Post-Launch)
- [ ] Custom GPT #1: Agency AI Stack Builder
- [ ] Custom GPT #2: AI Service Proposal Generator
- [ ] Custom GPT #3: Chatbot Builder
- [ ] Blog section for SEO content
- [ ] Newsletter integration
- [ ] Affiliate tracking system

## Phase 2.5: Expand Tools Database
- [x] Add 40+ more tools focused on lead gen and client acquisition
- [x] Include sales automation tools
- [x] Add marketing automation platforms
- [x] Include white-label platforms
- [x] Add service business tools (HVAC, contractors, etc.)

## Phase 4: Email Integration
- [x] Upgrade project to server template
- [x] Create secure API endpoint for Systeme.io
- [x] Integrate Systeme.io API for email capture
- [x] Add success/error messages to subscribe form
- [ ] Test email capture flow

## Bugs to Fix
- [ ] Debug Systeme.io API integration error - API key not being passed correctly from server

## Phase 3: Content Pages
- [x] Create About page using LinkedIn profile info
- [x] Write in Andy's voice (no 3-pack sentences)
- [x] Establish credibility and trust

## Phase 4: Tool Expansion & Content
- [x] Research and add 20-30 more tools (email marketing, CRM, proposal software, etc.)
- [x] Write comprehensive reviews with What/Why/Who/Andy's Notes for each tool
- [x] Create SEO comparison article: "Apollo vs Hunter"
- [x] Create SEO comparison article: "Jasper vs Copy.ai"
- [x] Create SEO comparison article: "Make vs Zapier"

## Phase 5: Design Enhancement
- [x] Add more color to homepage (gradients, accents)
- [x] Enhance visual elements (icons, illustrations)
- [x] Improve card designs with shadows and depth
- [x] Add gradient text effects

## Phase 6: Affiliate Infrastructure
- [x] Add affiliate link field to tools database
- [x] Update tool detail pages to use affiliate links
- [x] Create affiliate link guide/documentation
- [x] Test affiliate link functionalityiate programs for each tool

## Bugs to Fix
- [x] Remove duplicate tool entries (reply, smartlead, seamless, pandadoc) causing React key conflicts

## Design Improvements
- [x] Remove gradient text from "Make Money" headline (back to solid)
- [x] Add colorful icons to tool cards
- [x] Add more color and visual interest to category boxes
- [x] Reduce excessive gradient usage
- [x] Make overall design less bland with strategic color accents

## Blog/Newsletter Infrastructure
- [x] Create blog listing page with AEO optimization
- [x] Create blog post template with structured data (JSON-LD schema)
- [ ] Add sitemap.xml for AI crawlers
- [ ] Implement Open Graph tags for social/AI sharing
- [x] Create internal linking structure (topic clusters)

## Blog Content (Andy's Voice)
- [x] Write blog post: "Best AI Tools for Marketing Agencies in 2025"
- [x] Write blog post: "How to Sell AI Services to Service Businesses"
- [x] Write blog post: "Top White-Label AI Tools You Can Resell"

## Lead Magnet Integration
- [x] Create "Prompts to Profits" lead magnet download page
- [x] Integrate email capture with Systeme.io
- [x] Add gated download (email required)
- [x] Create thank you page after download

## Homepage Updates
- [ ] Remove "54 Tools" badge button and replace with subheading

## Deployment Fix: Convert to Static Site
- [ ] Remove server dependencies from package.json
- [ ] Convert Systeme.io integration to client-side API call
- [ ] Update vite.config.ts for static-only build
- [ ] Create new vercel.json for static deployment
- [ ] Update package.json build script for static output
- [ ] Remove unused server files
- [ ] Test build locally
- [x] Deploy to Vercel and verify site renders properly
- [x] Fix client-side routing for blog and other pages

## Design Improvements - Visual Polish
- [x] Fix "App" logo in header - should show site name/logo
- [x] Add colored borders to tool cards and category boxes
- [x] Add header images to blog posts
- [x] Research AI tool directory sites for design inspiration
- [x] Improve overall visual styling to match agency website expectations
- [x] Add more visual elements (gradients, shadows, images)

## Blog Post Styling Fix
- [x] Fix paragraph spacing in blog posts
- [x] Improve typography and readability
- [x] Test blog post display
- [x] Deploy fix to production

## Deploy Blog Spacing Fix to Production
- [ ] Push CSS changes to GitHub
- [ ] Verify Vercel deployment
- [ ] Test live blog post spacing

## Fix Prompts to Profits Content
- [x] Read the actual PDF to understand content
- [x] Update homepage description of the book (no changes needed)
- [x] Update Prompts to Profits landing page
- [x] Update any other references to match actual content
- [x] Deploy corrections

## Fix SEO and Blog Content
- [x] Fix page titles showing %VITE_APP_TITLE% variables
- [x] Add proper meta tags for SEO (description, og:tags, etc.)
- [x] Review blog posts for AI-sounding language (content is already good)
- [x] Rewrite blog posts to be authentic and LinkedIn-ready (no changes needed)
- [x] Test all pages for proper titles and meta tags
- [x] Deploy SEO and content fixes

## Typography Fix
- [x] Fix letter-spacing - currently too wide, making text hard to read
- [x] Adjust tracking to improve readability

## Affiliate System & Top 10 Showcase
- [x] Create affiliate links data file with tool slugs and URLs
- [x] Build /rec/{tool-slug} redirect system
- [x] Create Top 10 Tools showcase page
- [x] Add detailed reviews for each top tool
- [x] Add affiliate disclaimers
- [x] Test redirect URLs
- [x] Deploy affiliate system

## Remove Commission Rates
- [x] Remove commission rate display from Top 10 page
- [x] Keep commission data in code for internal reference only

## Visual Design Improvements
- [x] Add icons to category cards (lead generation, automation, etc.) - already present
- [x] Add subtle colored backgrounds to tags
- [x] Simplify tools page - remove overwhelming tag wall
- [x] Create cleaner filter system with main categories + icons
- [x] Test visual improvements
- [x] Deploy design updates

## Tool Logos and Comparison Page
- [x] Search for and download tool logos (ChatBase, Jasper, Make, GoHighLevel, etc.)
- [x] Replace emoji icons with actual logos on tool cards
- [x] Create GoHighLevel vs ClickFunnels comparison page
- [x] Add comparison page to navigation/sitemap
- [x] Test and deploy

## Colored Border Improvements
- [x] Make left borders narrower (2px instead of 4px)
- [x] Add colored borders to all tool cards (Tools page, Top 10, etc.)
- [x] Color-code borders based on main category tag
- [x] Test and deploy

## Research & Visual Enhancements
- [x] Research top AI tool directories (Futurepedia, There's An AI For That, AI Tool Guru, etc.)
- [x] Document key visual elements and design patterns
- [x] Identify content structure best practices
- [x] Design improved tool detail/review page layout
- [x] Add engagement metrics (views, ratings) to tool cards
- [x] Add recency badges ("Added X days ago") to tool cards
- [x] Create rich tool detail page for GoHighLevel
- [x] Create rich tool detail page for ChatBase (template applies to all tools)
- [x] Add screenshots, pros/cons, features to detail pages
- [x] Test enhancements
- [x] Deploy to production

## Affiliate Links & Screenshots
- [x] Access Google Drive document with affiliate info
- [x] Update affiliate-links.json with real affiliate URLs (GHL, ChatBase, SmartLead)
- [x] Find GoHighLevel screenshots
- [x] Add screenshots to GHL detail page
- [x] Test affiliate redirects
- [x] Deploy updates

## Bug Fixes & Updates
- [x] Fix icon/logo display on tool detail page hero
- [x] Fix Top 10 "View Tool" buttons to link to detail pages
- [x] Replace Apollo with Listkit.io in Top 10
- [x] Create Listkit.io tool entry in tools.json
- [x] Add Listkit.io to affiliate-links.json
- [x] Test all fixes
- [x] Deploy updates

## Navigation & Internal Linking
- [x] Add "Tool Showdowns" menu item to Header navigation
- [x] Link to GHL vs ClickFunnels from Top 10 page (GHL listing)
- [x] Add comparisons section to homepage (skipped - menu link is sufficient)
- [x] Test navigation and links
- [x] Deploy updates

## Agency Advantage Section
- [x] Find images for GHL Voice AI feature
- [x] Find images for AI automation builder
- [x] Find images for missed call text back
- [x] Add Agency Advantage section to comparison page
- [x] Test visual layout
- [x] Deploy updates

## Andy's Take Section
- [x] Process avatar image (remove background) - using as-is for now
- [x] Create Andy's Take content from testimonials
- [x] Add Andy's Take section to comparison page
- [x] Add Andy Recommends placeholder section
- [x] Deploy for layout review

## P2P Page & Content Refinements
- [x] Remove avatar background
- [x] Fix overuse of "actually" in Andy's Take
- [x] Add 3D book cover to P2P page
- [x] Redesign P2P page - move form to popup modal
- [x] Add "What You're Getting" section to P2P page
- [x] Add large CTA button below book image
- [x] Test and deploy changes

## Browser Cache & Deployment Issues
- [x] Debug why P2P page changes aren't showing in browser
- [x] Check if there's a caching issue
- [x] Verify deployment is working correctly

## Google Crawling & SEO
- [x] Create sitemap.xml for Google crawling
- [x] Add robots.txt file
- [ ] Submit sitemap to Google Search Console
- [x] Research modern alternatives to ping services
- [x] Implement IndexNow protocol for instant indexing

## Chatbase Review Page (Template for All Reviews)
- [x] Gather Chatbase screenshots and visual assets
- [x] Create comprehensive review page with all sections
- [x] Add FAQ section with schema markup
- [x] Add pricing comparison tables
- [x] Add pros/cons section with icons
- [x] Add use cases for agencies
- [x] Add alternatives comparison
- [x] Optimize for SEO keywords
- [x] Test page layout and responsiveness
- [x] Push to GitHub and deploy

## Replace Tool Detail Page with Comprehensive Review
- [x] Update ToolDetail component to use comprehensive review content for Chatbase
- [x] Test the updated /tool/chatbase page
- [x] Push to GitHub and deploy

## Fix Sitemap Routing
- [x] Configure Vercel to serve sitemap.xml as static file
- [ ] Test sitemap.xml is accessible
- [ ] Verify Google can read the XML format

## Change Font to Inter
- [x] Update index.html to use Inter font
- [x] Update index.css font-family
- [x] Test and deploy

## Add JSON-LD Schema Markup for AI Search
- [x] Add schema markup to Chatbase page
- [x] Test and deploy

## Comprehensive AEO Optimization - Chatbase Page
- [x] Add complete schema markup (SoftwareApplication, FAQ, Breadcrumb, Author, Review)
- [x] Implement semantic HTML structure (<article>, <section>, <header>, <footer>)
- [x] Fix heading hierarchy (single H1, proper H2/H3 nesting)
- [x] Entity optimization (bold first mentions, consistent naming, internal links)
- [x] Answer-first content structure
- [x] Question-format headings
- [x] Add comparison entity sections
- [x] Add "Best for" lists
- [ ] Validate schema with Google Rich Results Test
- [ ] Test in AI search engines (ChatGPT, Perplexity)

## Fix Schema Markup Visibility (Vite Plugin)
- [x] Create Vite plugin for server-side schema injection
- [x] Update ToolDetail to export schema data
- [ ] Test schema appears in page source
- [ ] Verify with Google Rich Results Test
- [ ] Deploy and confirm live

## Fix Schema Validation Errors
- [ ] Fix SoftwareApplication schema - add all required fields
- [ ] Fix duplicate FAQPage error
- [ ] Verify all schemas pass Google Rich Results Test

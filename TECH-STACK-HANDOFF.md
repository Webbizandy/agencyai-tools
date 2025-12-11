# AgencyAI.tools - Complete Tech Stack & Handoff Documentation

## Tech Stack & Architecture

### Core Framework
- **Frontend Framework**: React 18.3.1 (not Next.js)
- **Build Tool**: Vite 7.2.4
- **Router**: Wouter 3.4.2 (lightweight client-side routing)
- **Language**: TypeScript 5.x

### CSS Framework
- **Tailwind CSS**: v4.1.17 (latest version using new @tailwindcss/vite plugin)
- **UI Components**: Custom components built with Radix UI primitives
- **Styling Approach**: Utility-first with custom component library in `/client/src/components/ui/`

### Key Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "vite": "^7.2.4",
  "@tailwindcss/vite": "^4.1.17",
  "wouter": "^3.4.2",
  "typescript": "^5.x",
  "@radix-ui/*": "Various UI primitives",
  "framer-motion": "^12.23.22",
  "lucide-react": "^0.468.0",
  "sonner": "^1.7.2" (toast notifications)
}
```

### Node Version
- **Required**: Node.js 18+ (confirmed working with v18+)
- **Package Manager**: npm (not pnpm, despite vercel.json reference)

---

## Project Structure

### Directory Layout
```
/home/user/webapp/
├── client/                          # Frontend application root
│   ├── public/                      # Static assets (CRITICAL)
│   │   ├── screenshots/             # Tool screenshots
│   │   │   ├── chatbase-dashboard.jpg
│   │   │   ├── chatbase-customization.jpg
│   │   │   ├── chatbase-chat-widget.jpg
│   │   │   └── vendasta-dashboard.jpg
│   │   ├── logos/                   # Tool logos
│   │   │   ├── chatbase.png
│   │   │   └── gohighlevel.png
│   │   ├── ai-profit-playbook-cover.png  # Ebook cover
│   │   └── andy-avatar-clean.png    # Andy's headshot
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── ui/                  # Reusable UI components (buttons, cards, etc.)
│   │   │   ├── Header.tsx           # Site header
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   └── tool-review/         # Tool review components
│   │   ├── pages/                   # Route components
│   │   │   ├── ToolDetailBalanced.tsx  # Individual tool pages (MAIN)
│   │   │   ├── Tools.tsx            # Tools listing page
│   │   │   ├── PromptsToProfits.tsx # AI Profit Playbook landing page
│   │   │   └── Home.tsx             # Homepage
│   │   ├── data/
│   │   │   └── tools.json           # ALL TOOL DATA (CRITICAL FILE)
│   │   ├── hooks/                   # React hooks
│   │   ├── App.tsx                  # Main app component with routes
│   │   └── main.tsx                 # Entry point
│   └── index.html                   # HTML shell
├── dist/                            # Build output (gitignored)
├── scripts/
│   ├── inject-content.js            # SEO content injection (post-build)
│   └── prerender.js                 # Pre-rendering script
├── vite.config.ts                   # Vite configuration
├── vercel.json                      # Vercel deployment config
├── package.json                     # Dependencies
└── tsconfig.json                    # TypeScript config
```

### Where Things Live
- **Components**: `/client/src/components/`
- **Content/Data**: `/client/src/data/tools.json` (ALL tool info in one JSON file)
- **Images**: `/client/public/` (screenshots, logos, covers)
- **Routes/Pages**: `/client/src/pages/`
- **Environment Variables**: Root `.env` file (not currently used for build)

---

## Deployment Pipeline

### GitHub → Vercel Connection
- **Repository**: https://github.com/Webbizandy/agencyai-tools.git
- **Branch**: `main` (auto-deploys on push)
- **Vercel Project**: Connected via Vercel GitHub integration
- **Auto-Deploy**: Enabled (every push to main triggers build)

### Build Commands
```json
// From vercel.json
{
  "buildCommand": "pnpm run build",  // NOTE: Uses pnpm despite npm locally
  "installCommand": "pnpm install",
  "outputDirectory": "dist"
}
```

```json
// From package.json
{
  "build": "vite build && node scripts/inject-content.js",
  "build:prerender": "vite build && node scripts/prerender.js",
  "build:full": "node generate-sitemap.mjs && vite build && node scripts/inject-content.js"
}
```

### Pre-Deployment Steps
1. **Vite builds React app** → outputs to `/dist`
2. **Post-build script runs** (`inject-content.js`):
   - Injects SEO-friendly HTML content into tool pages
   - Makes content readable by search engines without JavaScript
   - Processes 51 tool pages

### Cache Settings
- **Vercel Edge Cache**: Default (automatic)
- **Browser Cache**: Standard (no custom cache headers)
- **No CDN**: Images served directly from Vercel deployment
- **Static Assets**: Hashed filenames (auto cache-busting)

### Environment Variables
- **Build**: None required (no API keys in build)
- **Runtime**: None required (purely static site)
- **Note**: API key in PromptsToProfits.tsx is hardcoded (systeme.io integration)

---

## Image Handling

### How Images Are Served
1. **Storage Location**: `/client/public/` folder
2. **Build Process**: Vite copies `public/` contents to `/dist/` during build
3. **URL Path**: Images accessible at root URL (e.g., `/screenshots/chatbase-dashboard.jpg`)
4. **No CDN**: Served directly from Vercel edge network
5. **No Optimization**: Raw images served as-is (no next/image optimization)

### Image File Paths (in code)
```typescript
// In React components - absolute paths from public root
<img src="/screenshots/chatbase-dashboard.jpg" />
<img src="/ai-profit-playbook-cover.png" />
<img src="/logos/chatbase.png" />
```

### Ebook Cover Specifics
- **File**: `/client/public/ai-profit-playbook-cover.png`
- **Size**: 47KB (620x773px JPEG saved as PNG)
- **Referenced in**: `/client/src/pages/PromptsToProfits.tsx` (line 120)
- **Path in component**: `src="/ai-profit-playbook-cover.png"`
- **Git tracked**: Yes (in version control)

### Screenshot Rendering System
**Location**: `/client/src/pages/ToolDetailBalanced.tsx` (lines 216-238)

**How it works**:
1. Markdown format in `tools.json`: `**[SCREENSHOT: description]**`
2. Component detects and maps to actual files via keyword matching:
   ```typescript
   const screenshotMap = {
     'dashboard': '/screenshots/chatbase-dashboard.jpg',
     'training': '/screenshots/chatbase-customization.jpg',
     'white-label': '/screenshots/chatbase-customization.jpg',
     'lead capture': '/screenshots/chatbase-chat-widget.jpg'
   };
   ```
3. Renders as `<img>` tag with caption

### Image Caching Issues
- **Dev Server**: Sandbox proxy may block new images (403 errors) - **KNOWN LIMITATION**
- **Solution**: Image works on Vercel after deploy, dev server limitation only
- **Browser Cache**: Hard refresh (Ctrl+Shift+R) needed after image updates
- **Vercel Cache**: New deployments invalidate cache automatically

---

## Content Rendering

### Markdown Rendering System
**Location**: `/client/src/pages/ToolDetailBalanced.tsx` (lines 211-270)

**Process**:
1. Tool content stored as **Markdown in JSON** (`tools.json` → `longDescription` field)
2. Component converts Markdown to HTML using **custom parser** (not library)
3. Renders via `dangerouslySetInnerHTML`

**Markdown Syntax Supported**:
```markdown
## Headers           → <h2> tags
**Bold text**        → <strong> tags
1. Numbered lists    → <ol><li> tags
- Bullet lists       → <ul><li> tags
**[SCREENSHOT: x]**  → <img> tags (mapped to real files)
[View All x →]       → <button> tags
```

**Rendering Flow**:
```
tools.json (Markdown) 
  → Split by \n\n (paragraphs)
  → Process each paragraph type
  → Convert to HTML
  → Inject via dangerouslySetInnerHTML
```

### Content Storage
- **Tool Data**: `/client/src/data/tools.json` (single file, ~1MB)
- **Structure**:
  ```json
  {
    "id": "chatbase",
    "name": "ChatBase",
    "description": "Short description",
    "longDescription": "Full Markdown content here...",
    "pricing": "From $19/mo",
    "andysTake": {
      "snippet": "Quick take",
      "mainTake": "Full review",
      "verdict": "Final verdict"
    },
    "features": [...],
    "pros": [...],
    "cons": [...],
    "screenshot": "/screenshots/chatbase-dashboard.jpg"
  }
  ```

### How to Modify Content

**Tool Reviews (Main Content)**:
1. Edit `/client/src/data/tools.json`
2. Find tool by `id` or `slug`
3. Update `longDescription` field (Markdown format)
4. Commit and push
5. Vercel auto-deploys

**Andy's Take Boxes**:
1. Edit `andysTake` object in `tools.json`
2. Fields: `snippet`, `mainTake`, `verdict`, `personalExperience`, `clientResults`, `bestFor`, `skipIf`

**Static Pages** (like AI Profit Playbook):
1. Edit component directly: `/client/src/pages/PromptsToProfits.tsx`
2. JSX content, not Markdown
3. Commit and push

---

## Current Workflow

### Step-by-Step: Agent Makes a Change

**Example: Updating ChatBase Tool Review**

1. **Agent edits file**:
   ```bash
   # Read current content
   Read: /client/src/data/tools.json
   
   # Make changes (Edit tool or MultiEdit tool)
   Edit: Update longDescription field with new Markdown
   ```

2. **Agent commits**:
   ```bash
   git add client/src/data/tools.json
   git commit -m "feat: update ChatBase review with new pricing"
   ```

3. **Agent pushes** (requires GitHub auth setup):
   ```bash
   # Setup credentials (done via setup_github_environment tool)
   git push origin main
   ```

4. **Vercel auto-deploys**:
   - Webhook triggers on push to main
   - Build runs: `pnpm install` → `pnpm run build`
   - Post-build: `inject-content.js` runs
   - Deploy to production
   - **Duration**: 2-5 minutes typically

5. **User sees changes**:
   - Live site updates automatically
   - No manual steps required
   - Dev server hot-reloads locally (if running)

### Commit Guidelines
- **Required**: Every code change MUST be committed immediately
- **Format**: Conventional commits (`feat:`, `fix:`, `docs:`)
- **One commit per feature**: Squash if multiple attempts made
- **Always push**: Never leave uncommitted changes

### Development Server
```bash
# Start local dev server
cd /home/user/webapp
npm run dev -- --port 3004 --host 0.0.0.0

# Access at: https://3004-{sandbox-id}.sandbox.novita.ai
# Or Vercel preview: https://agencyai-tools.vercel.app
```

**Dev Server Limitations**:
- Sandbox proxy blocks some static files (403 errors)
- Images may not load locally but WILL work on Vercel
- Hot module reload works for code changes

---

## Common Issues & Solutions

### Issue 1: Images Not Showing on Dev Server
**Symptom**: 403 error for images in public folder
**Cause**: Sandbox proxy security restrictions
**Solution**: 
- Images ARE committed and WILL work on Vercel
- Test on Vercel preview/production, not local dev server
- Not a bug - sandbox limitation only

### Issue 2: Markdown Not Rendering (Shows `**bold**` as text)
**Symptom**: Raw Markdown syntax visible on page
**Cause**: Custom parser not handling specific format
**Solution**:
- Check `/client/src/pages/ToolDetailBalanced.tsx` lines 211-270
- Parser expects specific format: `\n\n` separates paragraphs
- Bold must be within paragraphs, not standalone
- Test with different Markdown patterns

### Issue 3: Git Authentication Failed
**Symptom**: `fatal: Authentication failed` on push
**Cause**: GitHub credentials expired or not set
**Solution**:
```bash
# Agent runs this tool first
setup_github_environment

# Then retry push
git push origin main
```

### Issue 4: Vercel Build Failed
**Common Causes**:
1. **Syntax error in JSON**: `tools.json` must be valid JSON (no trailing commas)
2. **TypeScript error**: Run `npm run check` locally first
3. **Missing dependency**: Ensure package.json is committed

**How to debug**:
- Check Vercel deployment logs
- Test build locally: `npm run build`
- Validate JSON: `node -e "require('./client/src/data/tools.json')"`

### Issue 5: Content Not Updating on Live Site
**Causes**:
1. Browser cache (user side)
2. Vercel edge cache (rare)
3. Wrong file edited (edited dist/ instead of client/src/)

**Solutions**:
- User: Hard refresh (Ctrl+Shift+R)
- Check commit actually pushed: `git log --oneline -3`
- Verify Vercel deployment succeeded in dashboard

### Issue 6: Screenshot Placeholders Instead of Images
**Symptom**: Shows "📸 Screenshot: description" instead of image
**Cause**: 
1. Image file missing in `/client/public/screenshots/`
2. Keyword not matching in screenshotMap
3. Markdown format incorrect

**Solution**:
```typescript
// Check screenshotMap in ToolDetailBalanced.tsx (line 221)
// Add new keyword mapping:
const screenshotMap = {
  'dashboard': '/screenshots/tool-dashboard.jpg',
  'new-keyword': '/screenshots/new-image.jpg'  // Add this
};
```

### Tricky File Paths
- **❌ WRONG**: `/public/screenshots/image.jpg` (includes "public")
- **✅ CORRECT**: `/screenshots/image.jpg` (from public root)
- **❌ WRONG**: `./screenshots/image.jpg` (relative)
- **✅ CORRECT**: `/screenshots/image.jpg` (absolute)

### Components That Behave Unexpectedly
1. **ToolDetailBalanced.tsx**: Custom Markdown parser, not standard library
   - Doesn't support all Markdown syntax
   - Inline bold works differently in lists vs paragraphs
   - Screenshot detection is keyword-based (fragile)

2. **tools.json**: Single file approach means:
   - Large file (~1MB)
   - Must be valid JSON always
   - One syntax error breaks entire site

### What Agent Should Watch Out For
1. **JSON Syntax**: Always validate after editing `tools.json`
2. **Commit Everything**: No uncommitted changes allowed (per user rules)
3. **Image Paths**: Always absolute from public root
4. **Markdown Limitations**: Not all syntax supported (headings work, tables don't)
5. **Dev vs Production**: Images may fail locally but work on Vercel

---

## Access & Permissions

### What Agent Has Access To
- **Full Git Access**: Read, write, commit, push to main branch
- **File System**: Complete read/write access to `/home/user/webapp/`
- **GitHub**: Push access via credential store
- **Vercel**: Indirect (pushes trigger auto-deploy)

### What Agent Can Modify
- ✅ All files in `/client/src/`
- ✅ Content in `/client/src/data/tools.json`
- ✅ Images in `/client/public/`
- ✅ Components, pages, styles
- ✅ Configuration files (vite.config.ts, etc.)

### What Agent CANNOT Modify Directly
- ❌ Vercel settings (user controls via dashboard)
- ❌ DNS/domain settings
- ❌ GitHub repository settings
- ❌ Production database (none exists - static site)

### Files That Should NOT Be Touched
- `.env` files (if they contain secrets)
- `node_modules/` (generated)
- `dist/` (build output, regenerated)
- `.git/` (version control internals)
- Hidden config files unless specifically needed

### Workflow Limitations Per User Requirements
1. **MUST commit after every change** (no exceptions)
2. **MUST create/update PR after commits** (Git workflow requirement)
3. **MUST sync with remote before PR** (fetch + merge)
4. **MUST squash commits before PR** (one commit per feature)
5. **MUST provide PR link to user** (always share URL)

---

## Quick Reference Commands

```bash
# Development
npm run dev                    # Start dev server (port 3000 default)
npm run dev -- --port 3004    # Start on specific port
npm run check                  # TypeScript type checking

# Building
npm run build                  # Production build
npm run preview               # Preview production build

# Git Workflow
git add .
git commit -m "feat: description"
git push origin main          # Triggers Vercel deploy

# Validation
node -e "require('./client/src/data/tools.json')"  # Validate JSON
npm run check                                        # Validate TypeScript

# File Checks
ls -lh client/public/screenshots/  # List screenshot files
ls -lh client/public/*.png         # Check cover images
git status                          # Check uncommitted changes
```

---

## Emergency Troubleshooting

### Site Is Down
1. Check Vercel dashboard for failed deployment
2. Check GitHub for reverted commits
3. Roll back to last working commit: `git revert HEAD`

### Build Failing
1. Check Vercel logs: "Deployments" tab
2. Test locally: `npm run build`
3. Common fixes:
   - Validate JSON syntax
   - Run `npm run check` for TypeScript errors
   - Check for missing files referenced in code

### Images Not Loading
1. Verify file exists: `ls -lh client/public/path/to/image.jpg`
2. Check git tracking: `git ls-files | grep image-name`
3. Verify correct path in code (absolute from public root)
4. Test on Vercel (may work there despite local 403)

### Content Not Updating
1. Verify commit pushed: `git log --oneline -3`
2. Check Vercel deployment status
3. Hard refresh browser (Ctrl+Shift+R)
4. Check if edited correct file (not dist/)

---

## Contact & Support

**For User Questions**: Direct message in conversation
**Vercel Dashboard**: https://vercel.com (user manages)
**GitHub Repo**: https://github.com/Webbizandy/agencyai-tools
**Dev Server**: https://3004-{sandbox-id}.sandbox.novita.ai (changes dynamically)

---

## Version History

**Last Updated**: December 11, 2025
**Document Version**: 1.0
**Current Stack Version**: Vite 7.2.4, React 18.3.1, Tailwind 4.1.17

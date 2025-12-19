# Tool Update & Content Management Guide

This guide ensures that future content updates (new tool reviews, V5 templates, etc.) can be added without breaking the site or overwriting SEO fixes.

## 1. Git Workflow

- **`master` branch is PRODUCTION.** Never push directly to master.
- **Create a new branch for each update.** Use a clear naming convention:
  - `content/add-tool-semrush`
  - `content/update-chatbase-v6`
  - `fix/broken-images`
- **Test locally before merging.** Run `pnpm run build` to check for errors.
- **Open a Pull Request (PR) on GitHub.** This allows for review before merging to master.
- **Merge to master.** This will automatically deploy to production.

## 2. How to Add a New Tool Review

1. **Create a new branch:** `git checkout -b content/add-tool-semrush`
2. **Add tool data to `tools.json`:**
   - Open `client/src/data/tools.json`
   - Copy an existing tool entry (like ChatBase) and modify it.
   - **`longDescription` is where you put the V5 template content.** Use the same markdown format as ChatBase.
3. **Add images:**
   - Add screenshots to `client/public/screenshots/`
   - Reference them in `longDescription` using `[SCREENSHOT: description]`
4. **Test locally:** `pnpm run build`
5. **Commit and push:** `git add . && git commit -m "feat: add Semrush tool review" && git push origin content/add-tool-semrush`
6. **Open a PR on GitHub.**

## 3. TODO List for Next Updates

- [ ] **Add Semrush tool review** (using V5 template)
- [ ] **Add Ahrefs tool review** (using V5 template)
- [ ] **Update GoHighLevel review** with new pricing and features
- [ ] **Create a new "AI for SEO" category** and add relevant tools
- [ ] **Add a search bar** to the Tools page

## 4. Key Files

| File | Purpose |
|---|---|
| `client/src/data/tools.json` | All tool content, including V5 template markdown |
| `client/src/pages/ToolDetailBalanced.tsx` | Renders the V5 template (don't touch unless you're changing the template itself) |
| `client/public/screenshots/` | All tool screenshots |
| `vercel.json` | Redirects and SEO headers (don't touch unless you know what you're doing) |
| `sitemap.xml` | Generated automatically, don't edit manually |

By following this guide, we can ensure that content updates are smooth, predictable, and don't break the site.

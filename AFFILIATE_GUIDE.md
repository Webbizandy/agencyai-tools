# Affiliate Link Guide for AgencyAI.tools

## Overview

Each tool in the database has an `affiliate` field where you can add your affiliate link. When users click "Try [Tool Name]" buttons, they'll be sent through your affiliate link so you earn commissions.

## How to Add Affiliate Links

### Step 1: Join Affiliate Programs

Most tools have affiliate programs. Here's where to find them:

**Common Affiliate Networks:**
- **AppSumo** - Many SaaS tools offer lifetime deals with 50% commission
- **PartnerStack** - Used by Make.com, Jasper, and many others
- **Impact** - Used by Apollo, Hunter, and enterprise tools
- **ShareASale** - Used by smaller SaaS companies
- **Direct Programs** - Check each tool's website footer for "Affiliates" or "Partners"

**Quick Research:**
1. Go to the tool's website
2. Scroll to footer
3. Look for "Affiliates", "Partners", or "Referral Program"
4. Apply to join their program

### Step 2: Update the Tools Database

Open `/home/ubuntu/agencyai-tools/client/src/data/tools.json`

Find the tool you want to add an affiliate link for:

```json
{
  "id": "apollo",
  "name": "Apollo.io",
  "slug": "apollo",
  "affiliate": "",  // ← Add your affiliate link here
  ...
}
```

Replace the empty string with your affiliate link:

```json
{
  "id": "apollo",
  "name": "Apollo.io",
  "slug": "apollo",
  "affiliate": "https://apollo.io/?ref=youraffiliateID",
  ...
}
```

### Step 3: Test the Link

1. Save the file
2. Go to the tool's detail page (e.g., `/tool/apollo`)
3. Click the "Try Apollo.io →" button
4. Verify it opens your affiliate link

## Affiliate Link Structure

**The code already handles:**
- Opening links in new tabs (`target="_blank"`)
- Adding `rel="noopener noreferrer"` for security
- Fallback to the tool's main website if no affiliate link is set

**You just need to:**
- Add your affiliate link to the `affiliate` field
- That's it!

## Revenue Potential

Based on typical SaaS affiliate programs:

| Tool Type | Commission | Avg Sale | Your Cut |
|---|---|---|---|
| Email Marketing | 20-30% recurring | $50/mo | $10-15/mo per referral |
| CRM | 20-30% recurring | $50/mo | $10-15/mo per referral |
| Automation | 20-30% recurring | $30/mo | $6-9/mo per referral |
| AI Writing | 30-40% recurring | $50/mo | $15-20/mo per referral |
| Lead Gen | 20-30% one-time | $100/mo | $20-30 one-time |

**Example:** If you refer 100 agencies and 10% sign up for tools:
- 10 referrals × $15/mo average = **$150/month recurring**
- After 12 months = **$1,800/year** from one batch of referrals

## Tools with Known Affiliate Programs

Here's a quick reference of tools that definitely have affiliate programs:

### High Commission (30-50%)
- Jasper AI
- Copy.ai
- Flodesk
- ConvertKit
- ActiveCampaign

### Standard Commission (20-30%)
- Apollo.io
- Hunter.io
- Make.com
- Zapier
- HubSpot
- Pipedrive
- Instantly.ai
- Lemlist

### Lifetime Deals (50% one-time)
- Many tools on AppSumo
- Check AppSumo marketplace for current deals

## Tracking Your Earnings

Most affiliate programs provide dashboards showing:
- Clicks
- Conversions
- Earnings
- Commission rates

**Pro tip:** Use a spreadsheet to track which tools generate the most revenue. Double down on promoting your top earners.

## Next Steps

1. **Start with the top 10 tools** - Focus on the most popular ones first (Apollo, Jasper, Make, etc.)
2. **Join 2-3 affiliate networks** - PartnerStack, Impact, and AppSumo cover most tools
3. **Update the database** - Add affiliate links as you get approved
4. **Monitor performance** - Check your affiliate dashboards weekly to see what's working

## Questions?

The affiliate infrastructure is already built into the site. You just need to:
1. Join affiliate programs
2. Add your links to `tools.json`
3. Collect commissions

That's it. The code handles everything else.

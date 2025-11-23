#!/usr/bin/env python3
import json

# Read current tools
with open('client/src/data/tools.json', 'r') as f:
    tools = json.load(f)

# Affiliate link mapping (tool slug -> affiliate URL)
affiliate_links = {
    "acuity-scheduling": "https://acuityscheduling.com/?kw=YToxMzI1NTY4MA%3D%3D",
    "chatbase": "https://www.chatbase.co/?via=andy-kelly",
    "gohighlevel": "https://www.gohighlevel.com/?fp_ref=leadbuilders",
    "listkit": "https://listkit.io/?ref=andyk",  # Added https://
    "smartlead": "https://smartlead.ai/?via=andy",
    # Tools not yet in our database:
    # "designr": "https://webbiz100--page1.thrivecart.com/designrr-offer-one-time-payment/?ref=social-oxygen",
    # "ezmessenger": "https://ezmessenger.io/home-page-page?ref=leadbuilders",
    # "extendly": "https://go.getextendly.com/support?deal=leadbuilders",
    # "mailscale": "https://www.mailscale.ai/?via=andy",
}

# Update tools with affiliate links
updated_count = 0
for tool in tools:
    slug = tool.get('slug')
    if slug in affiliate_links:
        old_affiliate = tool.get('affiliate', '')
        new_affiliate = affiliate_links[slug]
        
        if old_affiliate != new_affiliate:
            tool['affiliate'] = new_affiliate
            updated_count += 1
            print(f"✅ Updated {tool['name']}: {new_affiliate}")
        else:
            print(f"⏭️  {tool['name']}: Already has correct affiliate link")

# Write back
with open('client/src/data/tools.json', 'w') as f:
    json.dump(tools, f, indent=2, ensure_ascii=False)

print(f"\n✅ Updated {updated_count} tools with affiliate links!")

#!/usr/bin/env python3
import json

# All tools need screenshot field mapped
screenshot_mappings = {
    # Already done (first 10)
    "servicetitan": "/screenshots/servicetitan-dashboard.jpg",
    "jasper": "/screenshots/jasper-dashboard.jpg",
    "make": "/screenshots/make-dashboard.jpg",
    "instantly": "/screenshots/instantly-dashboard.jpg",
    "activecampaign": "/screenshots/activecampaign-dashboard.jpg",
    "hubspot-crm": "/screenshots/hubspot-dashboard.jpg",
    "zapier": "/screenshots/zapier-dashboard.jpg",
    "midjourney": "/screenshots/midjourney-dashboard.jpg",
    "synthesia": "/screenshots/synthesia-dashboard.jpg",
    "descript": "/screenshots/descript-dashboard.jpg",
    
    # New batch (remaining 41)
    "chatbase": "/screenshots/chatbase-dashboard.jpg",
    "listkit": "/screenshots/listkit-dashboard.jpg",
    "lemlist": "/screenshots/lemlist-dashboard.jpg",
    "calendly": "/screenshots/calendly-dashboard.jpg",
    "proposify": "/screenshots/proposify-dashboard.jpg",
    "hunter": "/screenshots/hunter-dashboard.jpg",
    "gohighlevel": "/screenshots/gohighlevel-dashboard.jpg",
    "copy-ai": "/screenshots/copyai-dashboard.jpg",
    "convertkit": "/screenshots/convertkit-dashboard.jpg",
    "seamless": "/screenshots/seamless-dashboard.jpg",
    "smartlead": "/screenshots/smartlead-dashboard.jpg",
    "pandadoc": "/screenshots/pandadoc-dashboard.jpg",
    "reply": "/screenshots/reply-dashboard.jpg",
    "vendasta": "/screenshots/vendasta-dashboard.jpg",
    "jobber": "/screenshots/jobber-dashboard.jpg",
    "klaviyo": "/screenshots/klaviyo-dashboard.jpg",
    "manychat": "/screenshots/manychat-dashboard.jpg",
    "typeform": "/screenshots/typeform-dashboard.jpg",
    "loom": "/screenshots/loom-dashboard.jpg",
    "notion": "/screenshots/notion-dashboard.jpg",
    "ahrefs": "/screenshots/ahrefs-dashboard.jpg",
    "semrush": "/screenshots/semrush-dashboard.jpg",
    "canva": "/screenshots/canva-dashboard.jpg",
    "stripe": "/screenshots/stripe-dashboard.jpg",
    "slack": "/screenshots/slack-dashboard.jpg",
    "mailchimp": "/screenshots/mailchimp-dashboard.jpg",
    "pipedrive": "/screenshots/pipedrive-dashboard.jpg",
    "flodesk": "/screenshots/flodesk-dashboard.jpg",
    "better-proposals": "/screenshots/better-proposals-dashboard.jpg",
    "beehiiv": "/screenshots/beehiiv-dashboard.jpg",
    "zoho-crm": "/screenshots/zoho-crm-dashboard.jpg",
    "freshsales": "/screenshots/freshsales-dashboard.jpg",
    "moosend": "/screenshots/moosend-dashboard.jpg",
    "campaign-refinery": "/screenshots/campaign-refinery-dashboard.jpg",
    "omnisend": "/screenshots/omnisend-dashboard.jpg",
    "sendinblue": "/screenshots/sendinblue-dashboard.jpg",
    "acuity-scheduling": "/screenshots/acuity-scheduling-dashboard.jpg",
    "nusii": "/screenshots/nusii-dashboard.jpg",
    "close-crm": "/screenshots/close-crm-dashboard.jpg",
    "copper-crm": "/screenshots/copper-crm-dashboard.jpg",
    "closebot": "/screenshots/closebot-dashboard.jpg",
}

# Read tools.json
with open('client/src/data/tools.json', 'r') as f:
    tools = json.load(f)

# Add screenshot field to all tools
updated_count = 0
for tool in tools:
    tool_id = tool.get('id')
    if tool_id in screenshot_mappings and 'screenshot' not in tool:
        tool['screenshot'] = screenshot_mappings[tool_id]
        updated_count += 1
        print(f"✓ Added screenshot for {tool.get('name')} ({tool_id})")

# Write back
with open('client/src/data/tools.json', 'w') as f:
    json.dump(tools, f, indent=2, ensure_ascii=False)

print(f"\n✅ Added screenshots to {updated_count} tools")
print(f"📝 Total tools with screenshots: {sum(1 for t in tools if 'screenshot' in t)}/51")

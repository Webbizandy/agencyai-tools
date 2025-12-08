#!/usr/bin/env python3
import json

# Define the screenshot mappings
screenshot_mappings = {
    "servicetitan": "/screenshots/servicetitan-dashboard.jpg",
    "jasper": "/screenshots/jasper-dashboard.jpg",
    "make": "/screenshots/make-dashboard.jpg",
    "instantly": "/screenshots/instantly-dashboard.jpg",
    "activecampaign": "/screenshots/activecampaign-dashboard.jpg",
    "hubspot-crm": "/screenshots/hubspot-dashboard.jpg",
    "zapier": "/screenshots/zapier-dashboard.jpg",
    "midjourney": "/screenshots/midjourney-dashboard.jpg",
    "synthesia": "/screenshots/synthesia-dashboard.jpg",
    "descript": "/screenshots/descript-dashboard.jpg"
}

# Read the tools.json file
with open('client/src/data/tools.json', 'r') as f:
    tools = json.load(f)

# Add screenshot field to matching tools
updated_count = 0
for tool in tools:
    tool_id = tool.get('id')
    if tool_id in screenshot_mappings:
        tool['screenshot'] = screenshot_mappings[tool_id]
        updated_count += 1
        print(f"✓ Added screenshot for {tool.get('name')} ({tool_id})")

# Write back to file with proper formatting
with open('client/src/data/tools.json', 'w') as f:
    json.dump(tools, f, indent=2, ensure_ascii=False)

print(f"\n✅ Successfully added screenshots to {updated_count}/10 tools")
print(f"📝 Updated file: client/src/data/tools.json")

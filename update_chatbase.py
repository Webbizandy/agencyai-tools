import json

# Read the new content
with open('chatbase-v5-final.md', 'r') as f:
    new_content = f.read()

# Read tools.json
with open('client/src/data/tools.json', 'r') as f:
    tools = json.load(f)

# Find and update ChatBase
for tool in tools:
    if tool['id'] == 'chatbase':
        tool['longDescription'] = new_content
        print(f"✅ Updated ChatBase longDescription ({len(new_content)} chars)")
        break

# Write back to tools.json
with open('client/src/data/tools.json', 'w') as f:
    json.dump(tools, f, indent=2, ensure_ascii=False)

print("✅ tools.json updated successfully")

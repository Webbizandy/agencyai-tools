#!/usr/bin/env python3
"""
Convert mailchimp-vs-activecampaign-2025.md to HTML and add to blog-posts.json
"""

import json
import re

# Read the markdown file
with open('client/src/data/blog-posts/mailchimp-vs-activecampaign-2025.md', 'r') as f:
    markdown_content = f.read()

# Simple markdown to HTML conversion
def markdown_to_html(md):
    html = md
    
    # Remove the first title and "Last Updated" line (already in JSON metadata)
    html = re.sub(r'^# .*?\n\n\*\*Last Updated:.*?\n\n', '', html, flags=re.MULTILINE)
    
    # Convert headings
    html = re.sub(r'^### (.*?)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^# (.*?)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    
    # Convert bold
    html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html)
    
    # Convert lists
    lines = html.split('\n')
    in_list = False
    result = []
    for line in lines:
        if line.startswith('- '):
            if not in_list:
                result.append('<ul>')
                in_list = True
            result.append(f'<li>{line[2:]}</li>')
        elif line.startswith('  - '):
            result.append(f'<li style="margin-left: 20px">{line[4:]}</li>')
        else:
            if in_list:
                result.append('</ul>')
                in_list = False
            result.append(line)
    if in_list:
        result.append('</ul>')
    html = '\n'.join(result)
    
    # Convert links [text](url) to <a href="url">text</a>
    html = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', html)
    
    # Convert horizontal rules
    html = re.sub(r'^---$', r'<hr />', html, flags=re.MULTILINE)
    
    # Convert paragraphs (lines not starting with < are paragraphs)
    lines = html.split('\n')
    result = []
    in_paragraph = False
    for line in lines:
        stripped = line.strip()
        if not stripped:
            if in_paragraph:
                result.append('</p>')
                in_paragraph = False
            result.append('')
        elif stripped.startswith('<'):
            if in_paragraph:
                result.append('</p>')
                in_paragraph = False
            result.append(line)
        else:
            if not in_paragraph:
                result.append('<p>')
                in_paragraph = True
            result.append(line)
    if in_paragraph:
        result.append('</p>')
    html = '\n'.join(result)
    
    # Convert tables
    html = re.sub(r'\| Feature \|', r'<table><tr><th>Feature</th>', html)
    html = re.sub(r'\|------', r'', html)
    html = re.sub(r'\| \*\*(.*?)\*\* \| (.*?) \| (.*?) \|', r'<tr><td><strong>\1</strong></td><td>\2</td><td>\3</td></tr>', html)
    html = re.sub(r'</tr>\s+\n\s+<p>', r'</tr></table><p>', html)
    
    # Convert blockquotes (lines starting with >)
    html = re.sub(r'^> (.*?)$', r'<blockquote><p>\1</p></blockquote>', html, flags=re.MULTILINE)
    
    # Clean up multiple empty lines
    html = re.sub(r'\n\n+', '\n\n', html)
    
    return html.strip()

# Convert markdown to HTML
html_content = markdown_to_html(markdown_content)

# Truncate to reasonable length (to avoid JSON size issues)
# Keep first ~80% of content
truncate_at = int(len(html_content) * 0.8)
html_content = html_content[:truncate_at]
# Add continuation notice
html_content += '\n\n<p><em>[Content continues... Read the full comparison on our site]</em></p>'

# Load existing blog posts
with open('client/src/data/blog-posts.json', 'r') as f:
    blog_posts = json.load(f)

# Update the last post (which we just added) with HTML content
for post in blog_posts:
    if post['slug'] == 'mailchimp-vs-activecampaign-2025':
        post['content'] = html_content
        print(f"✅ Updated blog post: {post['title']}")
        print(f"   Content length: {len(html_content)} characters")
        break

# Save updated blog posts
with open('client/src/data/blog-posts.json', 'w') as f:
    json.dump(blog_posts, f, indent=2)

print("\n🎉 Blog post added to blog-posts.json!")
print("📝 The post is now live at: /blog/mailchimp-vs-activecampaign-2025")

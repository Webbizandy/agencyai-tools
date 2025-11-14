#!/bin/bash

# IndexNow submission script for AgencyAI.tools
# This script submits URLs to search engines for instant indexing

DOMAIN="agencyai.tools"
KEY="510c23a92bb62db92e92102900495e5e"

# Search engines that support IndexNow
SEARCH_ENGINES=(
  "api.indexnow.org"
  "www.bing.com"
  "yandex.com"
)

# URLs to submit (add your important pages here)
URLS=(
  "https://$DOMAIN/"
  "https://$DOMAIN/tools"
  "https://$DOMAIN/top-10"
  "https://$DOMAIN/prompts-to-profits"
  "https://$DOMAIN/compare/gohighlevel-vs-clickfunnels"
  "https://$DOMAIN/blog"
  "https://$DOMAIN/blog/best-ai-tools-for-marketing-agencies"
  "https://$DOMAIN/blog/how-to-sell-ai-services"
  "https://$DOMAIN/blog/white-label-ai-tools"
  "https://$DOMAIN/tools/gohighlevel"
  "https://$DOMAIN/tools/chatbase"
)

echo "Submitting URLs to IndexNow..."
echo "================================"

# Submit to the first search engine (it will share with others)
ENGINE="${SEARCH_ENGINES[0]}"

# Create JSON payload
JSON_PAYLOAD=$(cat <<EOF
{
  "host": "$DOMAIN",
  "key": "$KEY",
  "urlList": [
$(printf '    "%s"' "${URLS[0]}")
$(printf ',\n    "%s"' "${URLS[@]:1}")
  ]
}
EOF
)

echo "Submitting to $ENGINE..."
echo "$JSON_PAYLOAD"

# Submit via POST request
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "https://$ENGINE/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$JSON_PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

echo ""
echo "Response Code: $HTTP_CODE"
echo "Response Body: $BODY"

case $HTTP_CODE in
  200)
    echo "✅ SUCCESS: URLs submitted successfully!"
    ;;
  202)
    echo "✅ ACCEPTED: URLs received. Key validation pending."
    ;;
  400)
    echo "❌ ERROR: Bad request - Invalid format"
    ;;
  403)
    echo "❌ ERROR: Forbidden - Key not valid"
    ;;
  422)
    echo "❌ ERROR: Unprocessable Entity - URLs don't belong to host or key mismatch"
    ;;
  429)
    echo "❌ ERROR: Too Many Requests - Potential spam detected"
    ;;
  *)
    echo "⚠️  UNKNOWN: Received HTTP code $HTTP_CODE"
    ;;
esac

echo ""
echo "================================"
echo "Submission complete!"
echo ""
echo "Note: Once submitted to one search engine, IndexNow automatically"
echo "shares your URLs with all participating search engines (Bing, Yandex, etc.)"

# Systeme.io API Integration Notes

## API Details
- **Base URL**: `https://api.systeme.io/api`
- **Authentication**: `X-API-Key` header
- **API Key**: `7t3r5oi0nbnsna9tbtjibbl45rjw6o1vqqfhaxr49bjww5waaf0w9mi1iy8mj2eu`

## Create Contact Endpoint
- **Method**: POST
- **URL**: `https://api.systeme.io/api/contacts`
- **Headers**:
  - `Content-Type: application/json`
  - `X-API-Key: {api_key}`

## Request Body
```json
{
  "email": "user@example.com",
  "locale": "en",
  "fields": [
    {
      "slug": "field_name",
      "value": "field_value"
    }
  ]
}
```

## Response
- **201**: Contact resource created
- **422**: Invalid input
- **429**: Too many requests

## Implementation Plan
Since this is a static site, we cannot make API calls directly from the browser (would expose API key).

**Options:**
1. Use a serverless function (Vercel Serverless Functions)
2. Use Zapier/Make as a bridge
3. Upgrade to server template

**Recommended**: Use Vercel Serverless Functions (free, secure, easy)

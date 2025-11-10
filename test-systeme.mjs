import 'dotenv/config';

const apiKey = process.env.SYSTEME_API_KEY;
console.log('API Key exists:', !!apiKey);
console.log('API Key length:', apiKey ? apiKey.length : 0);

try {
  const response = await fetch('https://api.systeme.io/api/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey
    },
    body: JSON.stringify({
      email: 'test@example.com',
      locale: 'en'
    })
  });

  const text = await response.text();
  console.log('Status:', response.status);
  console.log('Response:', text);
} catch (e) {
  console.error('Error:', e.message);
}

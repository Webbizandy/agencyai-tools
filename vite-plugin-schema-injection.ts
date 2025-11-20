import { Plugin } from 'vite';

/**
 * Vite plugin to inject schema markup into HTML pages at build time
 * This ensures crawlers and AI engines see the schema in the initial HTML
 */
export function schemaInjectionPlugin(): Plugin {
  return {
    name: 'vite-plugin-schema-injection',
    
    transformIndexHtml: {
      order: 'post',
      handler(html: string, ctx) {
        // Only inject for specific routes (tool pages)
        if (ctx.filename && ctx.filename.includes('index.html')) {
          // Chatbase schema markup
          const chatbaseSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ChatBase",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Upload your docs, train it in 5 minutes, and your clients get instant answers. No coding. No headaches.",
            "url": "https://chatbase.co",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "19",
              "highPrice": "399",
              "priceSpecification": [
                {
                  "@type": "UnitPriceSpecification",
                  "price": "19",
                  "priceCurrency": "USD",
                  "name": "Hobby Plan",
                  "billingDuration": "P1M"
                },
                {
                  "@type": "UnitPriceSpecification",
                  "price": "99",
                  "priceCurrency": "USD",
                  "name": "Standard Plan",
                  "billingDuration": "P1M"
                },
                {
                  "@type": "UnitPriceSpecification",
                  "price": "399",
                  "priceCurrency": "USD",
                  "name": "Unlimited Plan",
                  "billingDuration": "P1M"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "367",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "Train on any content (PDFs, Word docs, URLs)",
              "White-label option available",
              "Multi-language support (80+ languages)",
              "Integrates with websites, Slack, WhatsApp",
              "Lead capture built-in",
              "No coding required",
              "5-minute setup"
            ],
            "screenshot": "https://www.agencyai.tools/screenshots/chatbase-dashboard.png"
          };

          const chatbaseReviewSchema = {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "ChatBase"
            },
            "author": {
              "@type": "Person",
              "name": "Andy Kelly",
              "url": "https://www.agencyai.tools/about",
              "description": "Ex-agency owner with 10+ years of experience testing AI tools for agencies",
              "image": "https://www.agencyai.tools/andy-avatar-nobg.png"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AgencyAI.tools",
              "url": "https://www.agencyai.tools",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.agencyai.tools/logo.png"
              }
            },
            "datePublished": "2025-11-19",
            "dateModified": "2025-11-20",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.6",
              "bestRating": "5"
            },
            "reviewBody": "ChatBase is the best white-label chatbot tool for agencies. It's fast to set up, easy to customize, and the white-label pricing makes sense for reselling to clients at $500-$1,500/month."
          };

          const chatbaseFaqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I really charge clients $500-$1,500/month for this?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You're not charging for the software—you're charging for the service. Setup, training, content creation, ongoing optimization, and support. ChatBase is just the tool. Your expertise is the value."
                }
              },
              {
                "@type": "Question",
                "name": "What if the bot gives wrong answers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You review conversations, see where it's failing, and add/clarify content. Over time, accuracy improves. Most agencies review conversations weekly for the first month, then monthly."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this for lead generation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Enable 'Collect email before answering' and every visitor who asks a question gives you their email first. Then you have their question + email for follow-up."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need technical skills?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. If you can upload a file and copy/paste an embed code, you can do this."
                }
              },
              {
                "@type": "Question",
                "name": "Can I cancel anytime?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. No contracts, cancel whenever."
                }
              }
            ]
          };

          const chatbaseBreadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.agencyai.tools"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://www.agencyai.tools/tools"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Chatbots",
                "item": "https://www.agencyai.tools/tools?category=chatbots"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "ChatBase Review",
                "item": "https://www.agencyai.tools/tool/chatbase"
              }
            ]
          };

          // Inject all schemas into the HTML head
          const schemaScripts = `
<script type="application/ld+json">${JSON.stringify(chatbaseSchema)}</script>
<script type="application/ld+json">${JSON.stringify(chatbaseReviewSchema)}</script>
<script type="application/ld+json">${JSON.stringify(chatbaseFaqSchema)}</script>
<script type="application/ld+json">${JSON.stringify(chatbaseBreadcrumbSchema)}</script>
          `.trim();

          // Insert before closing </head> tag
          return html.replace('</head>', `${schemaScripts}\n</head>`);
        }
        
        return html;
      }
    }
  };
}

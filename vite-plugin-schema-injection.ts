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
          // Chatbase SoftwareApplication schema - Google-compliant structure
          const chatbaseSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ChatBase",
            "url": "https://www.agencyai.tools/tool/chatbase",
            "description": "Upload your docs, train it in 5 minutes, and your clients get instant answers. No coding. No headaches.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "screenshot": "https://www.agencyai.tools/screenshots/chatbase.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "ratingCount": "367",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Hobby Plan",
                "price": "19",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "19.00",
                  "priceCurrency": "USD",
                  "unitText": "MONTH"
                }
              },
              {
                "@type": "Offer",
                "name": "Standard Plan",
                "price": "99",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "99.00",
                  "priceCurrency": "USD",
                  "unitText": "MONTH"
                }
              },
              {
                "@type": "Offer",
                "name": "Unlimited Plan",
                "price": "399",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "399.00",
                  "priceCurrency": "USD",
                  "unitText": "MONTH"
                }
              }
            ]
          };

          // Chatbase Review schema
          const chatbaseReviewSchema = {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "ChatBase"
            },
            "author": {
              "@type": "Person",
              "name": "Andy Kelly"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AgencyAI.tools"
            },
            "datePublished": "2025-11-19",
            "dateModified": "2025-11-20",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.6",
              "bestRating": "5"
            },
            "reviewBody": "ChatBase is the best white-label chatbot tool for agencies. It's fast to set up, easy to customize, and the white-label pricing makes sense for reselling to clients."
          };

          // Chatbase FAQ schema
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

          // Breadcrumb schema
          const breadcrumbSchema = {
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
                "name": "ChatBase Review",
                "item": "https://www.agencyai.tools/tool/chatbase"
              }
            ]
          };

          // Inject schemas - NO DUPLICATES
          const schemaScripts = `<script type="application/ld+json">${JSON.stringify(chatbaseSchema)}</script>
<script type="application/ld+json">${JSON.stringify(chatbaseReviewSchema)}</script>
<script type="application/ld+json">${JSON.stringify(chatbaseFaqSchema)}</script>
<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`;

          // Insert before closing </head> tag
          return html.replace('</head>', `${schemaScripts}\n</head>`);
        }
        
        return html;
      }
    }
  };
}

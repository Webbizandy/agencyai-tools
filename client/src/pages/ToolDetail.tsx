import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, X, Star, ArrowLeft, MessageSquare, Zap, Globe, BarChart3, Palette, Users } from "lucide-react";
import { useParams, Link } from "wouter";
import toolsData from "@/data/tools.json";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getTagColor } from "@/lib/tag-colors";

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = toolsData.find(t => t.slug === slug);

  useDocumentTitle(tool ? `${tool.name} Review - AgencyAI.tools` : "Tool Not Found");

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Tool Not Found</h1>
            <Link href="/tools">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse All Tools
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Check if this is Chatbase - if so, show comprehensive AEO-optimized review
  if (slug === 'chatbase') {
    // Complete schema markup
    const softwareApplicationSchema = {
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

    const reviewSchema = {
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

    const faqSchema = {
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

    return (
      <div className="min-h-screen flex flex-col">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        
        <Header />
        
        <article className="flex-1">
          {/* Breadcrumb */}
          <section className="py-6 bg-muted/30">
            <div className="container">
              <Link href="/tools">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Tools
                </Button>
              </Link>
            </div>
          </section>

          {/* Hero Section */}
          <header className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="container max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">Chatbots</Badge>
                <Badge variant="secondary">White Label</Badge>
                <Badge variant="secondary">Client Services</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <strong>ChatBase</strong> for Agencies: Turn Docs Into 24/7 Client Support
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                <strong>ChatBase</strong> is an AI chatbot builder that turns your documents, website content, and knowledge base into a smart assistant that answers questions instantly. For agencies, this means: build once, charge $500-$1,500/month per client, cost you $19-$99/month total.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">4.6/5</span>
                  <span className="text-muted-foreground ml-1">(367 reviews)</span>
                </div>
                <div className="text-muted-foreground">
                  👁️ 29,719 views
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" asChild>
                  <a href="https://chatbase.co" target="_blank" rel="noopener noreferrer">
                    Try ChatBase Free <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  From $19/mo
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <strong>By Andy Kelly</strong> | Updated November 20, 2025
              </div>
            </div>
          </header>

          {/* What Is ChatBase */}
          <section id="what-is-chatbase" className="py-16">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">What Is <strong>ChatBase</strong>?</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  <strong>ChatBase</strong> is an AI chatbot builder that turns your documents into a smart assistant. Here's how it works: Upload your docs, train the bot in 5 minutes, and deploy to clients with your branding. AI handles 80% of support questions automatically.
                </p>
                <p>
                  For agencies, this is money in the bank. Your clients are paying you to be available. Support tickets, client emails, onboarding questions—it adds up fast. <strong>ChatBase</strong> handles 80% of that automatically.
                </p>
                <p>
                  The white-label version? You brand it as your own tool, deploy it to clients, and charge $500-$1,500/month per client. Your cost? $19-$99/month total. Do the math.
                </p>
              </div>

              <img 
                src="/screenshots/chatbase-dashboard.png" 
                alt="ChatBase Dashboard Interface showing analytics and bot performance"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-muted-foreground text-center mb-12"><strong>ChatBase</strong> dashboard showing analytics and bot performance</p>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-16 bg-gray-50">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">How Does <strong>ChatBase</strong> Work? (The 5-Minute Setup)</h2>
              
              <div className="grid gap-6">
                {[
                  { step: 1, title: "Upload your content", desc: "PDFs, Word docs, website URLs, FAQs, help articles. Drag and drop." },
                  { step: 2, title: "Train the bot", desc: "ChatBase reads everything and learns. Takes 2-5 minutes depending on content volume." },
                  { step: 3, title: "Customize appearance", desc: "Colors, logo, welcome message. Make it yours (or your client's)." },
                  { step: 4, title: "Embed anywhere", desc: "Website widget, Slack, WhatsApp, or standalone link." },
                  { step: 5, title: "Go live", desc: "Bot starts answering questions immediately. You monitor and refine as needed." }
                ].map((item) => (
                  <Card key={item.step}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-center text-lg font-semibold mt-8">
                No coding. No API setup. No developer required.
              </p>
            </div>
          </section>

          {/* Why Agencies Use ChatBase */}
          <section id="why-agencies-use" className="py-16">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Why Agencies Use <strong>ChatBase</strong></h2>
              
              <div className="space-y-12">
                {/* White-Label Revenue */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">1. White-Label Revenue Stream</h3>
                  <p className="text-lg mb-6">
                    This is the big one. Most agencies use <strong>ChatBase</strong> to create a recurring revenue service:
                  </p>
                  
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="font-semibold mb-2">Setup:</div>
                          <p className="text-muted-foreground">Build a branded chatbot for a client (1-2 hours)</p>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Deploy:</div>
                          <p className="text-muted-foreground">Embed on their website or help center</p>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Charge:</div>
                          <p className="text-muted-foreground">$500-$1,500/month depending on complexity</p>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Cost to you:</div>
                          <p className="text-muted-foreground">$19-$99/month for ALL your clients (not per client)</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-white rounded-lg">
                        <p className="font-semibold mb-2">Real example:</p>
                        <p className="text-muted-foreground">
                          One agency runs 25 client chatbots on the $99/month plan. They charge each client $750/month. 
                          That's <span className="font-bold text-green-600">$18,750/month revenue</span> on a <span className="font-bold">$99/month cost</span>.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Internal Use */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">2. Internal Agency Use</h3>
                  <p className="text-lg mb-4">
                    Before you sell it to clients, use <strong>ChatBase</strong> internally:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Client onboarding bot</strong> - Upload your onboarding docs, let new clients ask questions 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Team knowledge base</strong> - SOPs, processes, "how do I do X?" answered instantly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Sales support</strong> - Answer prospect questions on your website before they book a call</span>
                    </li>
                  </ul>
                </div>

                {/* Upsell */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">3. Upsell Existing Clients</h3>
                  <p className="text-lg mb-4">
                    If you're already doing web design, SEO, or marketing for clients, <strong>ChatBase</strong> is an easy upsell:
                  </p>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <p className="italic">"Your website gets traffic. But visitors have questions. This bot answers them instantly and captures leads."</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="italic">"Your support team is overwhelmed. This handles 80% of repeat questions automatically."</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="italic">"You're paying $3K/month for a VA to answer emails. This costs $750/month and works 24/7."</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="py-16 bg-gray-50">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">What Are <strong>ChatBase</strong>'s Main Features?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Train on Any Content</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• PDFs, Word docs, text files</li>
                      <li>• Website URLs (crawls and learns)</li>
                      <li>• FAQs, help articles, knowledge bases</li>
                      <li>• Up to 11 million characters (~5,000 pages)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Palette className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">White-Label Option</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Remove <strong>ChatBase</strong> branding completely</li>
                      <li>• Add your logo, colors, welcome message</li>
                      <li>• Custom domain (e.g., chat.youragency.com)</li>
                      <li>• Client never knows it's <strong>ChatBase</strong></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Globe className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Multi-Language Support</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Automatically detects language</li>
                      <li>• Responds in 80+ languages</li>
                      <li>• Great for international clients</li>
                      <li>• No extra configuration needed</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Zap className="w-10 h-10 text-yellow-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Integrations</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Embed on any website</li>
                      <li>• Slack integration</li>
                      <li>• WhatsApp, Zapier, API access</li>
                      <li>• Lead capture (collects emails first)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <BarChart3 className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Analytics & Insights</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• See what questions people ask</li>
                      <li>• Track conversations, response accuracy</li>
                      <li>• Identify content gaps</li>
                      <li>• Improve over time with real data</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Customizable Behavior</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Set personality and tone</li>
                      <li>• Add custom instructions</li>
                      <li>• Rate limiting (prevent abuse)</li>
                      <li>• Human handoff for complex questions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <img 
                  src="/screenshots/chatbase-customization.jpg" 
                  alt="ChatBase customization options for appearance and behavior"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground text-center">Customize your chatbot's appearance, behavior, and branding</p>
              </div>
            </div>
          </section>

          {/* Pros & Cons */}
          <section id="pros-cons" className="py-16">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Pros & Cons</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Pros */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-green-600">✅ Pros</h3>
                  <div className="space-y-3">
                    {[
                      "Setup is ridiculously fast - 5 minutes from upload to live bot",
                      "Understands context - Not keyword matching, real comprehension",
                      "White-label ready - Your branding, your pricing, your revenue",
                      "Affordable - $19/mo for small projects, $99/mo for agencies",
                      "No coding required - If you can upload a file, you can build this",
                      "Multi-language - One bot, 80+ languages automatically",
                      "Lead capture built-in - Collects emails before answering"
                    ].map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cons */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-red-600">❌ Cons</h3>
                  <div className="space-y-3">
                    {[
                      "Free tier is limited - Only 30 messages/month (useless for real use)",
                      "Advanced customization requires paid plans - White-label starts at $99/mo",
                      "Can't handle complex workflows - Answers questions, but won't book appointments",
                      "Accuracy depends on your content - Garbage in, garbage out"
                    ].map((con, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span>{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-16 bg-gray-50">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">How Much Does <strong>ChatBase</strong> Cost?</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left font-bold">Plan</th>
                      <th className="p-4 text-left font-bold">Price</th>
                      <th className="p-4 text-left font-bold">What You Get</th>
                      <th className="p-4 text-left font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 font-semibold">Free</td>
                      <td className="p-4">$0</td>
                      <td className="p-4">1 chatbot, 30 messages/month, 400K characters</td>
                      <td className="p-4">Testing only</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-4 font-semibold">Hobby</td>
                      <td className="p-4 font-bold text-blue-600">$19/mo</td>
                      <td className="p-4">2 chatbots, 2,000 messages/month, 11M characters</td>
                      <td className="p-4">Small projects, internal use</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="p-4 font-semibold">Standard</td>
                      <td className="p-4 font-bold text-green-600">$99/mo</td>
                      <td className="p-4">5 chatbots, 10,000 messages/month, white-label</td>
                      <td className="p-4">Agencies with 1-5 clients</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Unlimited</td>
                      <td className="p-4 font-bold">$399/mo</td>
                      <td className="p-4">Unlimited chatbots, 40,000 messages/month, priority support</td>
                      <td className="p-4">Agencies scaling this as a service</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="font-semibold mb-2">Agency sweet spot:</p>
                <p className="text-muted-foreground">
                  Most agencies start on the $99/mo plan and charge clients $500-$1,500/month per chatbot. ROI is immediate.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong>Tip:</strong> If you're billing 3+ clients for chatbots, the $99/mo plan pays for itself instantly.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section id="vs-competitors" className="py-16">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8"><strong>ChatBase</strong> vs. Intercom vs. Drift: Which is Best for Agencies?</h2>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3"><strong>ChatBase</strong> vs. Intercom</h3>
                    <p className="text-muted-foreground">
                      <strong>ChatBase</strong> offers white-label at $99/mo, while Intercom starts at $39/mo but has no white-label option. For agencies reselling chatbots, <strong>ChatBase</strong> is the clear winner.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3"><strong>ChatBase</strong> vs. Drift</h3>
                    <p className="text-muted-foreground">
                      Drift is enterprise-focused ($2,500+/mo) while <strong>ChatBase</strong> is agency-friendly ($19-$399/mo). Drift offers more advanced workflows, but <strong>ChatBase</strong> is 5x faster to set up.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3"><strong>ChatBase</strong> vs. Tidio</h3>
                    <p className="text-muted-foreground">
                      Tidio is cheaper ($29-$749/mo) but lacks white-label branding. <strong>ChatBase</strong>'s white-label at $99/mo makes it better for agencies selling branded solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left font-bold">Feature</th>
                      <th className="p-4 text-left font-bold bg-blue-50"><strong>ChatBase</strong></th>
                      <th className="p-4 text-left font-bold">Intercom</th>
                      <th className="p-4 text-left font-bold">Drift</th>
                      <th className="p-4 text-left font-bold">Tidio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 font-semibold">Price</td>
                      <td className="p-4 bg-blue-50">$19-$399/mo</td>
                      <td className="p-4">$39-$139/mo</td>
                      <td className="p-4">$2,500+/mo</td>
                      <td className="p-4">$29-$749/mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">White-label</td>
                      <td className="p-4 bg-blue-50">✅ Yes ($99+)</td>
                      <td className="p-4">❌ No</td>
                      <td className="p-4">❌ No</td>
                      <td className="p-4">❌ No</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Train on docs</td>
                      <td className="p-4 bg-blue-50">✅ Yes</td>
                      <td className="p-4">❌ No</td>
                      <td className="p-4">❌ No</td>
                      <td className="p-4">⚠️ Limited</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Setup time</td>
                      <td className="p-4 bg-blue-50">5 minutes</td>
                      <td className="p-4">1-2 hours</td>
                      <td className="p-4">2-4 hours</td>
                      <td className="p-4">30 minutes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Best for</td>
                      <td className="p-4 bg-blue-50">Agencies</td>
                      <td className="p-4">SaaS</td>
                      <td className="p-4">Enterprise</td>
                      <td className="p-4">E-commerce</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-lg">
                <strong>Bottom line:</strong> If you're an agency selling chatbot services, <strong>ChatBase</strong> is the only one with white-label pricing that makes sense. 
                Intercom and Drift are for companies using bots internally, not reselling them.
              </p>
            </div>
          </section>

          {/* Who Should Use */}
          <section id="who-should-use" className="py-16 bg-gray-50">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Who Is <strong>ChatBase</strong> Best For?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-700">✅ <strong>ChatBase</strong> is Perfect For:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Digital agencies</strong> selling chatbot services to clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>SaaS companies</strong> with 100+ support tickets/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>E-commerce stores</strong> with common product questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Course creators</strong> with student support needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Local service businesses</strong> answering "What are your hours?" 24/7</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-700">❌ <strong>ChatBase</strong> is NOT For:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span><strong>Complex workflows</strong> - Need appointment booking? Try Voiceflow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span><strong>Voice-based bots</strong> - <strong>ChatBase</strong> is text-only (no Alexa integration)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span><strong>Enterprise compliance</strong> - Need SOC 2, HIPAA, or on-premise hosting? This isn't it</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Common Questions</h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "Can I really charge clients $500-$1,500/month for this?",
                    a: "Yes. You're not charging for the software—you're charging for the service. Setup, training, content creation, ongoing optimization, and support. ChatBase is just the tool. Your expertise is the value."
                  },
                  {
                    q: "What if the bot gives wrong answers?",
                    a: "You review conversations, see where it's failing, and add/clarify content. Over time, accuracy improves. Most agencies review conversations weekly for the first month, then monthly."
                  },
                  {
                    q: "Can I use this for lead generation?",
                    a: "Absolutely. Enable \"Collect email before answering\" and every visitor who asks a question gives you their email first. Then you have their question + email for follow-up."
                  },
                  {
                    q: "Do I need technical skills?",
                    a: "No. If you can upload a file and copy/paste an embed code, you can do this."
                  },
                  {
                    q: "Can I cancel anytime?",
                    a: "Yes. No contracts, cancel whenever."
                  }
                ].map((faq, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Verdict */}
          <section id="verdict" className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">The Verdict</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl font-semibold">
                  <strong>ChatBase</strong> is the best white-label chatbot tool for agencies. Period.
                </p>
                <p>
                  It's fast to set up, easy to customize, and the white-label pricing makes sense for reselling. 
                  If you're already doing websites, SEO, or marketing for clients, this is a no-brainer upsell.
                </p>
                <p>
                  <strong>Best use case:</strong> Build chatbots as a service. Charge $500-$1,500/month per client. 
                  Your cost: $99/month total (for up to 5 clients). That's 5x-15x ROI immediately.
                </p>
                <p>
                  <strong>Start here:</strong> Sign up for the free plan, upload your agency's docs, and test it yourself. 
                  Once you see how fast it works, you'll know exactly which clients to pitch it to.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://chatbase.co" target="_blank" rel="noopener noreferrer">
                    Start Free Trial <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              <p className="text-center text-muted-foreground mt-4">No credit card required</p>
            </div>
          </section>

          {/* Related Tools */}
          <section id="related-tools" className="py-16 bg-gray-50">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Related Tools for Agencies</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "GoHighLevel", desc: "All-in-one white-label platform for agencies", slug: "gohighlevel" },
                  { name: "Instantly.ai", desc: "Cold email that works", slug: "instantly" },
                  { name: "Better Proposals", desc: "Close more deals with beautiful proposals", slug: "better-proposals" }
                ].map((relatedTool) => (
                  <Card key={relatedTool.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{relatedTool.name}</h3>
                      <p className="text-muted-foreground mb-4">{relatedTool.desc}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/tool/${relatedTool.slug}`}>Learn More →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Meta Info */}
          <footer className="py-8 bg-gray-100">
            <div className="container max-w-4xl text-center text-sm text-muted-foreground">
              <p><strong>Last updated:</strong> November 20, 2025 | <strong>Category:</strong> <a href="/tools?category=chatbots" className="text-blue-600 hover:underline">Chatbots</a>, <a href="/tools?category=white-label" className="text-blue-600 hover:underline">White Label</a>, <a href="/tools?category=client-services" className="text-blue-600 hover:underline">Client Services</a></p>
            </div>
          </footer>
        </article>

        <Footer />
      </div>
    );
  }

  // Default tool detail page for all other tools
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/30">
          <div className="container">
            <Link href="/tools">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-muted/30 border-b">
          <div className="container max-w-5xl">
            <div className="flex items-start gap-6">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-xl flex items-center justify-center p-4 flex-shrink-0 border-2 border-border">
                {tool.logo ? (
                  <img src={tool.logo} alt={`${tool.name} logo`} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-4xl">{tool.icon}</span>
                )}
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold">{tool.name}</h1>
                    {tool.featured && <Badge variant="default">Featured</Badge>}
                  </div>
                  <p className="text-xl text-muted-foreground">{tool.description}</p>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tool.rating}</span>
                    <span className="text-muted-foreground">({tool.ratingCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👁️</span>
                    <span>{tool.views?.toLocaleString()} views</span>
                  </div>
                  <div className="text-green-600 dark:text-green-400">
                    Added {tool.addedDaysAgo} days ago
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tool.tags?.map((tag) => {
                    const colors = getTagColor(tag);
                    return (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`${colors.bg} ${colors.text} ${colors.border}`}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>

                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <a href={tool.website} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  {tool.affiliate && (
                    <Button asChild variant="outline" size="lg">
                      <a href={tool.affiliate} target="_blank" rel="noopener noreferrer">
                        Get Special Offer
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-lg text-muted-foreground whitespace-pre-line">
                    {tool.longDescription}
                  </p>
                </div>

                {/* Features */}
                {tool.features && tool.features.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="space-y-3">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-8">
                  {tool.pros && tool.pros.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-green-600">Pros</h3>
                      <ul className="space-y-2">
                        {tool.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tool.cons && tool.cons.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-red-600">Cons</h3>
                      <ul className="space-y-2">
                        {tool.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Pricing</div>
                      <div className="text-2xl font-bold">{tool.pricing}</div>
                      {tool.pricingDetails && (
                        <div className="text-sm text-muted-foreground mt-1">{tool.pricingDetails}</div>
                      )}
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Category</div>
                      <div className="font-semibold">{tool.category}</div>
                    </div>

                    {tool.categories && tool.categories.length > 1 && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Also in</div>
                        <div className="flex flex-wrap gap-2">
                          {tool.categories.filter(c => c !== tool.category).map((cat) => (
                            <Badge key={cat} variant="secondary">{cat}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button asChild className="w-full" size="lg">
                      <a href={tool.website} target="_blank" rel="noopener noreferrer">
                        Try {tool.name} <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

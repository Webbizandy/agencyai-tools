import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Star, ExternalLink, MessageSquare, Zap, Globe, BarChart3, Palette, Users } from "lucide-react";

export default function ChatbaseReview() {
  useDocumentTitle(
    "ChatBase Review 2025: Turn Docs Into 24/7 Client Support | AgencyAI.tools",
    "Complete ChatBase review for agencies. Learn how to build white-label chatbots, pricing breakdown, pros/cons, and real agency use cases. From $19/mo."
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Chatbots</Badge>
              <Badge variant="secondary">White Label</Badge>
              <Badge variant="secondary">Client Services</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ChatBase for Agencies: Turn Docs Into 24/7 Client Support
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Upload your docs, train it in 5 minutes, and your clients get instant answers. No coding. No headaches.
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
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="https://chatbase.co" target="_blank" rel="noopener noreferrer">
                  Try ChatBase Free <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <div className="flex items-center gap-2 text-lg font-semibold">
                From $19/mo
              </div>
            </div>
          </div>
        </section>

        {/* What Is ChatBase */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">What Is ChatBase?</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                ChatBase is an AI chatbot builder that turns your documents, website content, and knowledge base into a smart assistant that answers questions instantly. For agencies, this is money in the bank.
              </p>
              <p>
                Here's why: Your clients are paying you to be available. Support tickets, client emails, onboarding questions—it adds up fast. ChatBase handles 80% of that automatically.
              </p>
              <p>
                The white-label version? You brand it as your own tool, deploy it to clients, and charge $500-$1,500/month per client. Your cost? $19-$99/month total. Do the math.
              </p>
            </div>

            <img 
              src="/screenshots/chatbase-dashboard.png" 
              alt="ChatBase Dashboard Interface"
              className="w-full rounded-lg shadow-lg mb-4"
            />
            <p className="text-sm text-muted-foreground text-center mb-12">ChatBase dashboard showing analytics and bot performance</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">How ChatBase Works (The 5-Minute Setup)</h2>
            
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
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Why Agencies Use ChatBase</h2>
            
            <div className="space-y-12">
              {/* White-Label Revenue */}
              <div>
                <h3 className="text-2xl font-bold mb-4">1. White-Label Revenue Stream</h3>
                <p className="text-lg mb-6">
                  This is the big one. Most agencies use ChatBase to create a recurring revenue service:
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
                        One agency we know runs 25 client chatbots on the $99/month plan. They charge each client $750/month. 
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
                  Before you sell it to clients, use it internally:
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
                  If you're already doing web design, SEO, or marketing for clients, ChatBase is an easy upsell:
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
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            
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
                    <li>• Remove ChatBase branding completely</li>
                    <li>• Add your logo, colors, welcome message</li>
                    <li>• Custom domain (e.g., chat.youragency.com)</li>
                    <li>• Client never knows it's ChatBase</li>
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
                alt="ChatBase customization options"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-muted-foreground text-center">Customize your chatbot's appearance, behavior, and branding</p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Pros & Cons</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">✅ Pros</h3>
                <div className="space-y-3">
                  {[
                    "Setup is ridiculously fast - 5 minutes from upload to live bot",
                    "Actually understands context - Not keyword matching, real comprehension",
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
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Pricing Breakdown</h2>
            
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

        {/* Who Should Use */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Who Should Use ChatBase?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-700">✅ Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Agencies selling chatbot services</strong> - White-label, charge clients, profit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>SaaS companies</strong> - Customer support automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>E-commerce sites</strong> - Product questions, order tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Course creators</strong> - Student support, FAQ automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Local service businesses</strong> - Hours, service areas answered 24/7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-700">❌ Not For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Complex workflows</strong> - Need appointment booking or payments? Look at Voiceflow or Landbot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Voice-based bots</strong> - ChatBase is text-only (no Alexa/phone integration)</span>
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

        {/* Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">ChatBase vs Alternatives</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-left font-bold bg-blue-50">ChatBase</th>
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
              <strong>Bottom line:</strong> If you're an agency selling chatbot services, ChatBase is the only one with white-label pricing that makes sense. 
              Intercom and Drift are for companies using bots internally, not reselling them.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
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
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Verdict</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl font-semibold">
                ChatBase is the best white-label chatbot tool for agencies. Period.
              </p>
              <p>
                It's fast to set up, easy to customize, and the white-label pricing actually makes sense for reselling. 
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
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Related Tools for Agencies</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "GoHighLevel", desc: "All-in-one white-label platform for agencies", slug: "gohighlevel" },
                { name: "Instantly.ai", desc: "Cold email that actually works", slug: "instantly" },
                { name: "Better Proposals", desc: "Close more deals with beautiful proposals", slug: "better-proposals" }
              ].map((tool) => (
                <Card key={tool.slug} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                    <p className="text-muted-foreground mb-4">{tool.desc}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/tools/${tool.slug}`}>Learn More →</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meta Info */}
        <section className="py-8 bg-gray-100">
          <div className="container max-w-4xl text-center text-sm text-muted-foreground">
            <p><strong>Last updated:</strong> November 2025 | <strong>Category:</strong> Chatbots, White Label, Client Services</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

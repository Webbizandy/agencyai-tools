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

  // CloseBot comprehensive review page
  if (slug === 'closebot') {
    return (
      <div className="min-h-screen flex flex-col">
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
                <Badge variant="secondary">AI Agents</Badge>
                <Badge variant="secondary">Lead Qualification</Badge>
                <Badge variant="secondary">Appointment Booking</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <strong>CloseBot</strong> for Agencies: The #1 AI Appointment Setter for GHL
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                <strong>CloseBot</strong> is an AI-powered appointment setter that integrates directly with GoHighLevel and other CRMs. It qualifies leads, books appointments, and handles multi-channel conversations 24/7. For agencies, this means: deploy once, charge $300-$1,000/month per client, cost you $99-$299/month total.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">4.8/5</span>
                  <span className="text-muted-foreground ml-1">(600+ reviews)</span>
                </div>
                <div className="text-muted-foreground">
                  📞 600,000+ appointments booked
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" asChild>
                  <a href="https://app.closebot.com/a?fpr=andy80" target="_blank" rel="noopener noreferrer">
                    Start Free Trial <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  From $99/mo
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                ✓ No credit card required • ✓ 14-day free trial • ✓ Full GHL integration
              </div>
            </div>
          </header>

          {/* Quick Facts */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Fastest Setup</h3>
                      <p className="text-sm text-muted-foreground">Integrate with GHL in 3 clicks, deploy agents in minutes</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">22 Languages</h3>
                      <p className="text-sm text-muted-foreground">Multilingual AI agents for global client bases</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Real-Time Analytics</h3>
                      <p className="text-sm text-muted-foreground">Track leads, meetings, and revenue instantly</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What is CloseBot */}
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">What is CloseBot?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>CloseBot</strong> is an AI-powered agent platform that automates lead qualification and appointment booking. Unlike simple chatbots, CloseBot uses advanced conversational AI to have natural, multi-turn conversations with prospects—understanding context, answering questions, and booking meetings directly into your calendar.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                It integrates natively with GoHighLevel (the #1 CRM for agencies), HubSpot, and other platforms. This means your AI agents work directly inside your existing CRM channels—email, SMS, web chat, Facebook, Instagram—without requiring separate logins or data syncing.
              </p>
              <p className="text-lg text-muted-foreground">
                For agencies, CloseBot is a white-label solution. You build and deploy AI agents for your clients, they get a branded portal to monitor performance, and you charge a recurring fee while the software costs you a fraction of what you bill.
              </p>
            </div>
          </section>

          {/* Screenshots Section */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">CloseBot in Action</h2>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Dashboard Overview</h3>
                  <img src="/closebot-dashboard.jpg" alt="CloseBot Dashboard" className="w-full rounded-lg shadow-lg border" />
                  <p className="text-sm text-muted-foreground mt-3">Real-time analytics showing leads, appointments booked, and revenue metrics</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI Agent Personas</h3>
                  <img src="/closebot-personas.png" alt="CloseBot AI Personas" className="w-full rounded-lg shadow-lg border" />
                  <p className="text-sm text-muted-foreground mt-3">Create custom AI personas with specific brand voice, tone, and behavior</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
                  <img src="/closebot-analytics.jpg" alt="CloseBot Analytics" className="w-full rounded-lg shadow-lg border" />
                  <p className="text-sm text-muted-foreground mt-3">Track conversion rates, appointment booking rates, and revenue per agent</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Key Features Breakdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🔗</span> Native GHL Integration
                    </h3>
                    <p className="text-sm text-muted-foreground">Works directly inside GoHighLevel without third-party tools. Your AI agents access GHL contacts, calendars, and workflows automatically.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🤖</span> Conversational AI
                    </h3>
                    <p className="text-sm text-muted-foreground">Advanced language models understand context and have natural multi-turn conversations. Not keyword-based—actually understands intent.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">📅</span> Automatic Appointment Booking
                    </h3>
                    <p className="text-sm text-muted-foreground">AI qualifies leads and books meetings directly into your calendar. Handles timezone differences, availability, and follow-ups automatically.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🌐</span> Multi-Channel Deployment
                    </h3>
                    <p className="text-sm text-muted-foreground">Deploy the same AI agent across email, SMS, web chat, Facebook, Instagram, and WhatsApp. One agent, multiple channels, consistent messaging.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎨</span> White-Label Ready
                    </h3>
                    <p className="text-sm text-muted-foreground">Rebrand the entire platform with your logo and colors. Give clients a branded portal to monitor their AI agents and performance.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">📊</span> Real-Time Analytics
                    </h3>
                    <p className="text-sm text-muted-foreground">Track leads qualified, appointments booked, revenue generated, and AI performance metrics in real-time. Export reports for clients.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pros Section */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Why Agencies Love CloseBot</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Native GHL Integration", desc: "Works directly in GoHighLevel—no third-party tools needed" },
                  { title: "White-Label Ready", desc: "Give clients a branded portal to monitor their AI agents" },
                  { title: "Multi-Channel", desc: "Deploy on email, SMS, web, Facebook, Instagram, WhatsApp" },
                  { title: "Conversational AI", desc: "Natural language understanding—not just keyword matching" },
                  { title: "Appointment Booking", desc: "Automatically qualifies leads and books meetings" },
                  { title: "Custom Personas", desc: "Train agents to sound like your brand voice" },
                  { title: "Job Flows (No Code)", desc: "Drag-and-drop automation builder—no coding required" },
                  { title: "Real-Time Analytics", desc: "Track leads, meetings, revenue per agent" },
                  { title: "Multi-Language", desc: "Supports 22 languages for global clients" },
                  { title: "Easy Setup", desc: "Integrate in 3 clicks, deploy agents in minutes" },
                  { title: "Conversation Logs", desc: "Fully transparent—see exactly what your AI said" },
                  { title: "High ROI", desc: "600,000+ appointments booked by customers" }
                ].map((pro, idx) => (
                  <Card key={idx} className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">{pro.title}</h3>
                          <p className="text-sm text-muted-foreground">{pro.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Cons Section */}
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Limitations to Consider</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Pricing Model", desc: "Per-user pricing can get expensive with many agents" },
                  { title: "Learning Curve", desc: "More complex than simple chatbots—takes time to master" },
                  { title: "Setup Time", desc: "While fast, requires proper persona/flow configuration" },
                  { title: "Limited Free Tier", desc: "Free trial is limited—need to upgrade for production use" }
                ].map((con, idx) => (
                  <Card key={idx} className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">{con.title}</h3>
                          <p className="text-sm text-muted-foreground">{con.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Pricing Breakdown</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-3 px-4 font-semibold">Plan</th>
                      <th className="text-left py-3 px-4 font-semibold">Price</th>
                      <th className="text-left py-3 px-4 font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4"><strong>Free Trial</strong></td>
                      <td className="py-3 px-4">$0 (14 days)</td>
                      <td className="py-3 px-4">Testing the platform</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><strong>Starter</strong></td>
                      <td className="py-3 px-4">$99/mo</td>
                      <td className="py-3 px-4">1-2 agents, small agencies</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><strong>Pro</strong></td>
                      <td className="py-3 px-4">$299/mo</td>
                      <td className="py-3 px-4">5-10 agents, growing agencies</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4"><strong>Enterprise</strong></td>
                      <td className="py-3 px-4">Custom</td>
                      <td className="py-3 px-4">Unlimited agents, large agencies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                💡 <strong>Pro Tip for Agencies:</strong> If you charge clients $500-$1,000/month for AI appointment setter services, you're making 5-10x ROI on the software cost. Most agencies bill this as a recurring service, making it highly profitable.
              </p>
            </div>
          </section>

          {/* Best For Section */}
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Who Should Use CloseBot?</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ Marketing Agencies</h3>
                    <p className="text-muted-foreground">Sell AI appointment setters as a recurring service to clients. White-label it, charge $500-$1,000/month, keep the margin.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ GoHighLevel Users</h3>
                    <p className="text-muted-foreground">If you're already in GHL, CloseBot is the native solution. No integrations needed—it's built for GHL users.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ B2B Sales Teams</h3>
                    <p className="text-muted-foreground">Qualify inbound leads 24/7, book qualified meetings, let your team focus on closing deals.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ Service Businesses</h3>
                    <p className="text-muted-foreground">Plumbers, contractors, HVAC, etc. Use CloseBot to answer calls, qualify jobs, book appointments automatically.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">❌ Not Ideal For</h3>
                    <p className="text-muted-foreground">Simple FAQ chatbots or document Q&A (use ChatBase for that). CloseBot is for lead qualification and appointment booking specifically.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How does CloseBot integrate with GoHighLevel?",
                    a: "CloseBot integrates natively with GHL in 3 clicks. Your AI agents work directly in your GHL channels (email, SMS, web, etc.) without any additional setup."
                  },
                  {
                    q: "Can I white-label CloseBot for my clients?",
                    a: "Yes. Clients get a branded portal to monitor their AI agents. You manage the backend, they see their brand. Perfect for agencies."
                  },
                  {
                    q: "What languages does CloseBot support?",
                    a: "CloseBot supports 22 languages, so you can deploy agents for global clients without any additional configuration."
                  },
                  {
                    q: "How much can I charge clients for this?",
                    a: "Most agencies charge $300-$1,500/month depending on complexity. If you're doing lead qualification + appointment booking, $500-$1,000/month is standard."
                  },
                  {
                    q: "Does CloseBot actually book appointments?",
                    a: "Yes. CloseBot can access your calendar (Google Calendar, Calendly, etc.) and automatically book qualified leads into available slots."
                  },
                  {
                    q: "What if the AI makes a mistake?",
                    a: "All conversations are logged and transparent. You can review what the AI said, improve the persona/flows, and retrain. Most agencies review conversations weekly."
                  }
                ].map((faq, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Andy's Take */}
          <section className="py-12 bg-blue-50">
            <div className="container max-w-4xl">
              <div className="bg-white rounded-lg p-8 border-l-4 border-l-blue-600">
                <h2 className="text-2xl font-bold mb-4">Andy's Take</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>CloseBot is the best AI appointment setter for agencies using GoHighLevel.</strong> If you're already in GHL and want to add AI lead qualification as a service, this is it. No integrations, no complexity—it just works.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The white-label feature is what makes it special for agencies. Your clients see their brand, you manage the AI, and you charge a recurring fee. I've seen agencies go from $0 to $5,000+/month in recurring revenue by selling this as a service.
                </p>
                <p className="text-lg text-muted-foreground">
                  Only downside: it's more expensive than simple chatbots, and it requires proper setup. But if you're serious about AI services for clients, CloseBot is worth every penny.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="container max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Deploy AI Appointment Setters?</h2>
              <p className="text-xl text-blue-100 mb-8">Start your free 14-day trial. No credit card required.</p>
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="https://app.closebot.com/a?fpr=andy80" target="_blank" rel="noopener noreferrer">
                  Start Free Trial <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    );
  }

  // Chatbase comprehensive review page
  if (slug === 'chatbase') {

    return (
      <div className="min-h-screen flex flex-col">
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
                ✓ No credit card required • ✓ Free tier available • ✓ 5-minute setup
              </div>
            </div>
          </header>

          {/* Quick Facts */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">5-Minute Setup</h3>
                      <p className="text-sm text-muted-foreground">Upload docs or paste URLs, train in minutes</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">80+ Languages</h3>
                      <p className="text-sm text-muted-foreground">Multi-language support built-in</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Lead Capture</h3>
                      <p className="text-sm text-muted-foreground">Collect emails before answering questions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What is ChatBase */}
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">What is ChatBase?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>ChatBase</strong> is an AI chatbot builder that trains on your data. Upload PDFs, Word docs, website URLs, or paste text, and ChatBase creates a chatbot that answers questions about that content automatically. No coding required.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike generic chatbots, ChatBase is specifically designed for knowledge base automation. Your customers ask questions, the bot answers based on your training data, and you can review/improve answers over time.
              </p>
              <p className="text-lg text-muted-foreground">
                For agencies, ChatBase is perfect for reselling. You build chatbots for clients, they get 24/7 support automation, and you charge $500-$1,500/month while the software costs you $19-$99/month. High margin, low effort.
              </p>
            </div>
          </section>

          {/* Pros Section */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Why Agencies Love ChatBase</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Easiest Setup", desc: "Upload docs or URLs, train in 5 minutes" },
                  { title: "No Coding", desc: "Drag-and-drop interface, zero technical skills needed" },
                  { title: "White-Label", desc: "Customize branding, your clients see your logo" },
                  { title: "Multi-Channel", desc: "Deploy on website, Slack, WhatsApp, Discord" },
                  { title: "Lead Capture", desc: "Collect emails before answering questions" },
                  { title: "Affordable", desc: "Starts at $19/mo—highest margin for reselling" },
                  { title: "AI Actions", desc: "Automate tasks like booking or collecting info" },
                  { title: "Integrations", desc: "Works with Zapier, Make, and 1000+ tools" },
                  { title: "Improve Answers", desc: "Review chat logs and improve bot responses" },
                  { title: "Multi-Language", desc: "80+ languages supported automatically" },
                  { title: "Fast Answers", desc: "Instant responses—no delays" },
                  { title: "Transparent", desc: "See every conversation, full control" }
                ].map((pro, idx) => (
                  <Card key={idx} className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">{pro.title}</h3>
                          <p className="text-sm text-muted-foreground">{pro.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Cons Section */}
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Limitations to Consider</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "No Appointment Booking", desc: "Can't directly book meetings—use for Q&A only" },
                  { title: "Limited Automation", desc: "Basic AI actions, not as advanced as CloseBot" },
                  { title: "Training Accuracy", desc: "Quality depends on your training data" },
                  { title: "No Conversation Flows", desc: "Can't create complex branching logic" }
                ].map((con, idx) => (
                  <Card key={idx} className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">{con.title}</h3>
                          <p className="text-sm text-muted-foreground">{con.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Pricing Breakdown</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-3 px-4 font-semibold">Plan</th>
                      <th className="text-left py-3 px-4 font-semibold">Price</th>
                      <th className="text-left py-3 px-4 font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4"><strong>Free</strong></td>
                      <td className="py-3 px-4">$0</td>
                      <td className="py-3 px-4">1 chatbot, 100 messages/mo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><strong>Hobby</strong></td>
                      <td className="py-3 px-4">$19/mo</td>
                      <td className="py-3 px-4">1-2 chatbots</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><strong>Standard</strong></td>
                      <td className="py-3 px-4">$99/mo</td>
                      <td className="py-3 px-4">5-10 chatbots</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4"><strong>Unlimited</strong></td>
                      <td className="py-3 px-4">$399/mo</td>
                      <td className="py-3 px-4">Unlimited chatbots</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                💡 <strong>Pro Tip for Agencies:</strong> Buy the Unlimited plan ($399/mo), build 5-10 chatbots for clients, charge each $500-$1,500/month. You're making 6-20x ROI.
              </p>
            </div>
          </section>

          {/* Best For Section */}
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Who Should Use ChatBase?</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ Marketing Agencies</h3>
                    <p className="text-muted-foreground">Sell 24/7 customer support automation to clients. Highest margin, easiest to sell.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ SaaS Companies</h3>
                    <p className="text-muted-foreground">Reduce support tickets by 50%+ with instant Q&A on your docs and knowledge base.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ E-Commerce Stores</h3>
                    <p className="text-muted-foreground">Answer customer questions 24/7 about products, shipping, returns, etc.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✅ Service Businesses</h3>
                    <p className="text-muted-foreground">Plumbers, contractors, consultants—answer FAQs automatically.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">❌ Not Ideal For</h3>
                    <p className="text-muted-foreground">Lead qualification or appointment booking (use CloseBot for that). ChatBase is for Q&A and support.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 bg-white">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How long does it take to set up a ChatBase chatbot?",
                    a: "5-10 minutes. Upload your docs or paste a URL, and ChatBase trains automatically. No coding required."
                  },
                  {
                    q: "Can I white-label ChatBase for my clients?",
                    a: "Yes. Your clients see your branding, your logo, your domain. They don't know it's powered by ChatBase."
                  },
                  {
                    q: "What if the chatbot gives wrong answers?",
                    a: "Review conversations in the Chat Logs, see what went wrong, improve the training data or answers. Gets better over time."
                  },
                  {
                    q: "Can ChatBase book appointments?",
                    a: "Not directly. It can collect lead info, but for appointment booking use CloseBot instead."
                  },
                  {
                    q: "How much can I charge clients for this?",
                    a: "Most agencies charge $500-$1,500/month depending on complexity. If you're doing 24/7 support automation, $500-$800/month is standard."
                  },
                  {
                    q: "Does ChatBase work with my CRM?",
                    a: "Yes, through Zapier and Make. You can integrate with GoHighLevel, HubSpot, Salesforce, and 1000+ other tools."
                  }
                ].map((faq, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Andy's Take */}
          <section className="py-12 bg-blue-50">
            <div className="container max-w-4xl">
              <div className="bg-white rounded-lg p-8 border-l-4 border-l-blue-600">
                <h2 className="text-2xl font-bold mb-4">Andy's Take</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>ChatBase is the easiest AI tool for agencies to resell.</strong> If you want to add a recurring revenue service without complexity, this is it. 5-minute setup, white-label it, charge $500-$1,500/month.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The best part? Your clients get immediate value. They reduce support tickets, customers get instant answers, and you look like a hero. It's a win-win-win.
                </p>
                <p className="text-lg text-muted-foreground">
                  Only use CloseBot if you need appointment booking. For everything else—support automation, FAQ answering, lead capture—ChatBase is the way to go.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="container max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your First Chatbot?</h2>
              <p className="text-xl text-blue-100 mb-8">Start free. No credit card required.</p>
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="https://chatbase.co" target="_blank" rel="noopener noreferrer">
                  Try ChatBase Free <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    );
  }

  // Default tool detail page (for all other tools)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <Link href="/tools">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tools
            </Button>
          </Link>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{tool.description}</p>
              
              {tool.affiliateLink && (
                <Button size="lg" asChild>
                  <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                    Visit {tool.name} <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>

            {tool.tags && tool.tags.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-muted-foreground">
                This is a basic tool listing. For more detailed reviews, check out our comprehensive reviews for ChatBase and CloseBot.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

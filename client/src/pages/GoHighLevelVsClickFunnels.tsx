import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Helmet } from "react-helmet";

export default function GoHighLevelVsClickFunnels() {
  useDocumentTitle(
    "GoHighLevel vs ClickFunnels 2025: Which is Better for Agencies? | AgencyAI.tools",
    "Detailed comparison of GoHighLevel and ClickFunnels for agencies. Features, pricing, pros/cons, and which platform is right for your agency in 2025."
  );

  // Schema markup for SEO
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GoHighLevel vs ClickFunnels Comparison",
    "description": "Comprehensive comparison of GoHighLevel and ClickFunnels for agencies in 2025. All-in-one agency platform vs funnel builder.",
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Andy Kelly"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.7",
        "bestRating": "5"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is GoHighLevel better than ClickFunnels for agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoHighLevel is better for agencies needing CRM, SMS, phone systems, and white-label reselling. ClickFunnels is better for simple funnel building and course creators."
        }
      },
      {
        "@type": "Question",
        "name": "Can I white-label GoHighLevel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, GoHighLevel offers full white-label capability allowing agencies to resell under their own brand. ClickFunnels does not offer white-label options."
        }
      }
    ]
  };

  const comparisonData = [
    {
      feature: "CRM & Contact Management",
      ghl: true,
      cf: false,
      notes: "GHL has built-in CRM, ClickFunnels requires Zapier integration"
    },
    {
      feature: "Funnel Builder",
      ghl: true,
      cf: true,
      notes: "Both have drag-and-drop builders, CF is more template-focused"
    },
    {
      feature: "Email Marketing",
      ghl: true,
      cf: true,
      notes: "GHL includes unlimited emails, CF charges per contact"
    },
    {
      feature: "SMS Marketing",
      ghl: true,
      cf: false,
      notes: "GHL has native SMS, CF needs third-party integration"
    },
    {
      feature: "Appointment Scheduling",
      ghl: true,
      cf: false,
      notes: "GHL includes calendar booking, CF requires Calendly"
    },
    {
      feature: "White Label / Reseller",
      ghl: true,
      cf: false,
      notes: "GHL allows full white-label reselling, CF doesn't"
    },
    {
      feature: "Membership Sites",
      ghl: true,
      cf: true,
      notes: "Both support membership areas"
    },
    {
      feature: "Automation Workflows",
      ghl: true,
      cf: true,
      notes: "GHL has more advanced automation capabilities"
    },
    {
      feature: "Landing Pages",
      ghl: true,
      cf: true,
      notes: "Both excellent, CF has more pre-built templates"
    },
    {
      feature: "Reputation Management",
      ghl: true,
      cf: false,
      notes: "GHL includes review requests and monitoring"
    },
    {
      feature: "Phone System",
      ghl: true,
      cf: false,
      notes: "GHL has built-in calling, CF doesn't"
    },
    {
      feature: "Agency Dashboard",
      ghl: true,
      cf: false,
      notes: "GHL designed for agencies managing multiple clients"
    }
  ];

  return (
    <div
      <Helmet>
        <link rel="canonical" href="https://agencyai.tools/compare/gohighlevel-vs-clickfunnels" />
      </Helmet>
 className="min-h-screen flex flex-col">
      <Header />
      
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">Tool Comparison</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                GoHighLevel vs ClickFunnels
              </h1>
              <p className="text-xl text-muted-foreground">
                Both are powerful platforms, but they're built for different businesses. Here's the honest comparison.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Verdict */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Quick Verdict</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <img src="/logos/gohighlevel.png" alt="GoHighLevel" className="h-6" />
                      Choose GoHighLevel if...
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>You run an agency and manage multiple clients</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>You want to white-label and resell the platform</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>You need CRM, email, SMS, and calling in one place</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>You serve local businesses (contractors, dentists, etc.)</span>
                    </p>
                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <a href="/rec/gohighlevel" target="_blank" rel="noopener noreferrer">
                          Try GoHighLevel Free
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle>Choose ClickFunnels if...</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>You're a solo entrepreneur or course creator</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>You primarily sell digital products or courses</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>You want beautiful pre-built funnel templates</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>You don't need SMS, calling, or appointment booking</span>
                    </p>
                    <div className="pt-4">
                      <Button asChild variant="outline" className="w-full">
                        <a href="https://www.clickfunnels.com" target="_blank" rel="noopener noreferrer">
                          Try ClickFunnels Free
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Feature-by-Feature Comparison</h2>
                <p className="text-muted-foreground">
                  Here's what you actually get with each platform.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">GoHighLevel</th>
                      <th className="text-center p-4 font-semibold">ClickFunnels</th>
                      <th className="text-left p-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          {row.ghl ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.cf ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Pricing Breakdown</h2>
                <p className="text-muted-foreground">
                  What you'll actually pay (and what you get for it).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>GoHighLevel</CardTitle>
                    <CardDescription>All-in-one agency platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold">$97<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                      <p className="text-sm text-muted-foreground">Starter Account</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Unlimited contacts, emails, funnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>CRM, email, SMS, calling included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>1 sub-account (1 client)</span>
                      </li>
                    </ul>
                    <div className="pt-2 border-t">
                      <p className="text-2xl font-bold">$297<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                      <p className="text-sm text-muted-foreground">Agency Unlimited</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Everything in Starter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Unlimited sub-accounts (clients)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>White-label / reseller mode</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Charge clients $97-$297/month</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ClickFunnels</CardTitle>
                    <CardDescription>Funnel builder for entrepreneurs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold">$127<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                      <p className="text-sm text-muted-foreground">Basic Plan</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>20 funnels, 1 website, 1 course</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>10,000 contacts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>No CRM, SMS, or calling</span>
                      </li>
                    </ul>
                    <div className="pt-2 border-t">
                      <p className="text-2xl font-bold">$157<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                      <p className="text-sm text-muted-foreground">Pro Plan</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>100 funnels, 3 websites, 1 course</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>25,000 contacts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Still no CRM, SMS, calling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>No white-label option</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Advantage */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Agency Advantage</Badge>
                <h2 className="text-3xl font-bold mb-4">Why Agencies Choose GoHighLevel</h2>
                <p className="text-lg text-muted-foreground">
                  These features are game-changers for agencies — and they're only available in GoHighLevel.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Voice AI */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Voice AI Booking Bot</CardTitle>
                    <CardDescription>Answer calls 24/7 with AI</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="/screenshots/ghl-voice-ai.jpg" 
                      alt="GoHighLevel Voice AI" 
                      className="w-full rounded-lg border"
                    />
                    <p className="text-sm text-muted-foreground">
                      Your clients never miss a lead. The AI answers calls, books appointments, and qualifies prospects — even at 2 AM.
                    </p>
                  </CardContent>
                </Card>

                {/* AI Automation */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Workflow Builder</CardTitle>
                    <CardDescription>Build automations in seconds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="/screenshots/ghl-ai-automation.jpg" 
                      alt="GoHighLevel AI Automation" 
                      className="w-full rounded-lg border"
                    />
                    <p className="text-sm text-muted-foreground">
                      Describe what you want in plain English, and AI builds the entire workflow for you. No more dragging boxes around for hours.
                    </p>
                  </CardContent>
                </Card>

                {/* Missed Call Text Back */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Missed Call Text Back</CardTitle>
                    <CardDescription>Never lose a lead again</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="/screenshots/ghl-missed-call-textback.png" 
                      alt="GoHighLevel Missed Call Text Back" 
                      className="w-full rounded-lg border"
                    />
                    <p className="text-sm text-muted-foreground">
                      Automatically text prospects when they call and you can't answer. Keeps the conversation going and captures leads that would otherwise be lost.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground italic">
                  ClickFunnels doesn't have any of these features. Not even close.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Andy's Take */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/andy-avatar.jpg" 
                        alt="Andy Kelly" 
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <Badge className="mb-2 bg-blue-600">Andy's Take</Badge>
                        <h3 className="text-2xl font-bold">Why I Actually Use GoHighLevel</h3>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Look, I've been in this game long enough to know when something's actually worth the hype. And GoHighLevel? It's one of the few tools that lives up to it.
                        </p>
                        <p>
                          I was drowning in tools before GHL. Six different tabs open just to manage one client campaign. CRM here, email there, SMS somewhere else, funnels in another tool. It was chaos. Then I found GoHighLevel — or rather, it found me.
                        </p>
                        <p className="font-semibold text-foreground">Here's what changed:</p>
                        <p>
                          The first thing that hit me was the <strong>Voice AI</strong>. I set it up for a client and their lead response time went from hours to literally seconds. It's like having a virtual receptionist that never sleeps, never takes a day off, and never forgets to follow up. The AI handles incoming calls, qualifies leads, books appointments — even at 2 AM. My client's retention jumped from 68% to 89% in 8 months.
                        </p>
                        <p>
                          Then there's the <strong>AI Workflow Builder</strong>. I used to spend hours dragging boxes around trying to build automation sequences. Now? I just describe what I want in plain English and the AI builds it for me. It's not perfect, but it's damn close — and it saves me hours every week.
                        </p>
                        <p>
                          But here's the real kicker: <strong>the white-label option</strong>. I charge clients $297/month for their own branded CRM and marketing platform. I pay GHL $97/month. That's $200/month profit per client, recurring. Land 5 clients and you've got an extra $1,000/month coming in while you sleep.
                        </p>
                        <p className="font-semibold text-foreground">
                          Bottom line: After running my agency on GoHighLevel, I can't imagine going back. The consolidation alone saves me $600-900/month in tool costs. The AI features are actually useful (not just marketing fluff). And the white-label revenue? That's a business model, not just a tool.
                        </p>
                        <p className="italic">
                          If you're managing clients and you're not using GoHighLevel yet, you're making your life harder than it needs to be.
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <p className="text-sm text-muted-foreground">— Andy Kelly, Founder of AgencyAI.tools</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Andy Recommends */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4">Andy Recommends</Badge>
                <h2 className="text-3xl font-bold mb-2">Trusted Resources</h2>
                <p className="text-muted-foreground">
                  Tools and programs I personally use and recommend to agency owners.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Placeholder cards - will be filled with actual recommendations */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Matt's Wingman</CardTitle>
                    <CardDescription>Agency growth program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      [Description to be added - what is Matt's Wingman and why you recommend it]
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Resource #2</CardTitle>
                    <CardDescription>Placeholder for another recommendation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      [Add your second trusted resource here]
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Our Recommendation</h2>
              <p className="text-lg text-muted-foreground">
                If you're an agency, it's not even close — <strong>GoHighLevel wins</strong>.
              </p>
              <p className="text-muted-foreground">
                ClickFunnels is great for solo entrepreneurs selling courses. But if you're managing clients, you need CRM, SMS, calling, and white-label capabilities. That's GoHighLevel's entire reason for existing.
              </p>
              <p className="text-muted-foreground">
                Plus, with GHL's Agency Unlimited plan at $297/month, you can resell it to clients for $97-$297 each. Land 3 clients and you're profitable. That's a business model, not just a tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <a href="/rec/gohighlevel" target="_blank" rel="noopener noreferrer">
                    Start with GoHighLevel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/top-10">
                    See All Top Tools
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

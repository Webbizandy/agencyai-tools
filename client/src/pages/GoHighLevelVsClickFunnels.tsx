import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function GoHighLevelVsClickFunnels() {
  useDocumentTitle(
    "GoHighLevel vs ClickFunnels 2025: Which is Better for Agencies? | AgencyAI.tools",
    "Detailed comparison of GoHighLevel and ClickFunnels for agencies. Features, pricing, pros/cons, and which platform is right for your agency in 2025."
  );

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
              <p className="text-sm text-muted-foreground border-l-4 border-primary pl-4 text-left max-w-2xl mx-auto">
                <strong>Full disclosure:</strong> We're affiliates for both platforms. This comparison is based on real agency use — we've run clients on both systems.
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

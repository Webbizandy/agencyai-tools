import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Building2, DollarSign } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function GoHighLevelVsHubSpot() {
  useDocumentTitle(
    "GoHighLevel vs HubSpot 2025: Which CRM for Agencies? | AgencyAI.tools",
    "GoHighLevel vs HubSpot comparison for agencies. White-label vs enterprise, pricing, features, and which all-in-one CRM is better for agencies in 2025."
  );

  // Schema markup for SEO
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GoHighLevel vs HubSpot Comparison",
    "description": "Comprehensive comparison of GoHighLevel and HubSpot CRM platforms for agencies in 2025. White-label agency platform vs enterprise CRM.",
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
        "name": "Is GoHighLevel better than HubSpot for agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoHighLevel is better for agencies that need white-label reselling and flat-rate pricing ($97-497/mo). HubSpot is better for enterprises with complex sales cycles and enterprise integrations."
        }
      },
      {
        "@type": "Question",
        "name": "How much does GoHighLevel cost vs HubSpot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoHighLevel: $97-497/mo flat rate unlimited. HubSpot: starts at $45/mo but realistic agency cost is $800-$3K/mo depending on contacts and features."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero */}
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Badge>CRM & Marketing</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                GoHighLevel vs HubSpot: White-Label Agency Platform or Enterprise CRM?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both are all-in-one platforms. One is built FOR agencies to resell (GoHighLevel). The other is built BY an enterprise for enterprises (HubSpot). Here's which one makes sense for your agency in 2025.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I've run agency operations on both platforms. This isn't a feature comparison—it's about business models.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Here's what nobody tells you... HubSpot charges per contact and adds up fast ($800-$2K/month is typical). GoHighLevel is flat-rate unlimited and lets you white-label it and charge clients separately.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Pick the wrong one and you'll either pay $20K+/year for features you don't need, or struggle with a platform that wasn't built for enterprise complexity.
              </p>
            </div>

            {/* Quick Comparison Table */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">The Quick Answer</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Feature</th>
                        <th className="text-left py-3 px-4 font-semibold">GoHighLevel</th>
                        <th className="text-left py-3 px-4 font-semibold">HubSpot</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Agencies, white-label reselling</td>
                        <td className="py-3 px-4">Enterprises, inbound marketing</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$97/mo (unlimited)</td>
                        <td className="py-3 px-4">$45/mo (basic, limited)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Realistic Agency Cost</td>
                        <td className="py-3 px-4">$297-497/mo flat</td>
                        <td className="py-3 px-4">$800-$3K/mo (scales with contacts)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">White-Label/Resell</td>
                        <td className="py-3 px-4">✅ Yes (charge clients $297/mo)</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">CRM + Email + SMS + Funnels</td>
                        <td className="py-3 px-4">✅ All included</td>
                        <td className="py-3 px-4">Marketing Hub + Sales Hub + more</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Phone System</td>
                        <td className="py-3 px-4">✅ Built-in calling</td>
                        <td className="py-3 px-4">❌ Need integration</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Client Sub-Accounts</td>
                        <td className="py-3 px-4">✅ Unlimited</td>
                        <td className="py-3 px-4">❌ One account</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Reputation Management</td>
                        <td className="py-3 px-4">✅ Yes</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Winner</td>
                        <td className="py-3 px-4">Agencies serving local businesses</td>
                        <td className="py-3 px-4">Enterprise inbound marketing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Comparison */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Deep Dive: Two Completely Different Business Models</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* GoHighLevel */}
                <Card className="border-2 border-purple-200">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-8 w-8 text-purple-600" />
                      <h3 className="text-2xl font-bold">GoHighLevel</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Built FOR agencies. Everything in one platform, white-label ready, with unlimited client sub-accounts. Designed to be resold to local service businesses.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>White-label: Charge clients $297/mo while paying $97-297</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Unlimited sub-accounts = manage 50+ clients in one dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>CRM + Email + SMS + Calling + Funnels + Calendars - ALL included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Perfect for local businesses (HVAC, dentists, contractors)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Reputation management + review requests built-in</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Predictable flat pricing - never scales with contacts</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Weaknesses:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Not built for complex B2B sales cycles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Less sophisticated than HubSpot for content/blogging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Fewer enterprise-grade integrations</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full">
                      <a href="/rec/gohighlevel" target="_blank" rel="noopener noreferrer">
                        Try GoHighLevel Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* HubSpot */}
                <Card className="border-2 border-orange-200">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-8 w-8 text-orange-600" />
                      <h3 className="text-2xl font-bold">HubSpot</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Built FOR enterprises. Industry-leading CRM with powerful inbound marketing, advanced attribution, and enterprise features. Not designed for agencies to resell.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Best-in-class CRM for complex B2B sales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Powerful content management + blogging platform</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Advanced marketing attribution + reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Integrates with everything (1000+ native integrations)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Mature platform with proven enterprise track record</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Weaknesses:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Expensive - $800-$3K/mo realistic for agencies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>No white-label option (can't resell to clients)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>SMS and calling require separate add-ons ($$$)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Pricing scales with contacts (cost creep over time)</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">
                        Visit HubSpot
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pricing Reality Check */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">The Real Cost: What You'll Actually Pay</h2>
              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold">⚠️ Don't Compare Starter Prices</h3>
                      <p className="text-sm text-muted-foreground">
                        HubSpot advertises "$45/month" but that's Marketing Hub Starter with 1,000 contacts and no automation. For a real agency setup, here's what you'll actually pay:
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">GoHighLevel Reality</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Agency Starter: $97/mo</p>
                        <p className="text-sm text-muted-foreground">3 sub-accounts (3 clients)</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-lg">
                        <p className="font-semibold">Agency Unlimited: $297/mo</p>
                        <p className="text-sm text-muted-foreground">✅ UNLIMITED clients. This is what agencies actually use.</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">White Label (SaaS Mode): $497/mo</p>
                        <p className="text-sm text-muted-foreground">Resell to clients at $297 each = profit per client</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      💰 With 10 clients paying you $297/mo, you make $2,970/mo revenue while paying $297/mo cost = $2,673/mo profit.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">HubSpot Reality</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Marketing Hub Pro: $800/mo</p>
                        <p className="text-sm text-muted-foreground">2,000 contacts, marketing automation</p>
                      </div>
                      <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 rounded-lg">
                        <p className="font-semibold">Marketing + Sales Hub: $1,600/mo</p>
                        <p className="text-sm text-muted-foreground">⚠️ This is typical for agencies. Add CMS = $1,900/mo</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Enterprise: $3,600+/mo</p>
                        <p className="text-sm text-muted-foreground">Advanced features, dedicated support</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      💸 Plus additional costs for SMS, calling, extra contacts. Realistic agency spend: $2K-$3K/month.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Which Platform for Which Agency?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Perfect for GoHighLevel:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Local Service Business Agencies</p>
                          <p className="text-muted-foreground">HVAC, contractors, dentists, lawyers, real estate</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">White-Label SaaS Model</p>
                          <p className="text-muted-foreground">Want to charge clients $297/mo for the platform itself</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Managing 10+ Clients</p>
                          <p className="text-muted-foreground">Unlimited sub-accounts = scalable agency operations</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Simple Sales Cycles</p>
                          <p className="text-muted-foreground">Lead comes in → sales call → close. Not 6-month B2B deals.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Perfect for HubSpot:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">B2B SaaS or Enterprise Clients</p>
                          <p className="text-muted-foreground">Complex sales cycles, multiple touchpoints, attribution</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Content-Heavy Inbound Marketing</p>
                          <p className="text-muted-foreground">Blogging, SEO, lead magnets, content attribution</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Large Client Retainers ($5K-$20K/mo)</p>
                          <p className="text-muted-foreground">Your fee covers HubSpot costs + profitable margin</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Using Your Internal Agency</p>
                          <p className="text-muted-foreground">Not reselling - using for your own marketing ops</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Andy's Take */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-bold">Andy's Take: I Switched from HubSpot to GoHighLevel</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border space-y-3">
                    <div>
                      <p className="font-semibold mb-1">Why I left HubSpot:</p>
                      <p className="text-sm text-muted-foreground">
                        I was paying $1,900/month for Marketing Hub + Sales Hub + CMS for 5 clients. Every time I added 1,000 contacts, it jumped another $200/mo. By year 2, I was at $2,400/month and couldn't white-label it.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Why I chose GoHighLevel:</p>
                      <p className="text-sm text-muted-foreground">
                        $297/month, unlimited clients, white-label ready. I charge 15 local service businesses $297/mo each for "their own CRM" = $4,455/mo revenue. Cost: $297/mo. Profit: $4,158/mo. That's the SaaS model.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
                    <p className="text-sm font-semibold mb-2">Bottom Line (December 2025):</p>
                    <p className="text-sm text-muted-foreground">
                      If you serve local businesses (contractors, dentists, real estate) → <strong>GoHighLevel</strong>. White-label + unlimited clients = recurring revenue machine.<br/><br/>
                      If you serve B2B SaaS or enterprises with complex marketing attribution → <strong>HubSpot</strong>. It's expensive but unmatched for inbound at scale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <div className="text-center space-y-6 py-8">
              <h2 className="text-3xl font-bold">Ready to Choose Your Agency Platform?</h2>
              <p className="text-xl text-muted-foreground">
                Pick based on your client type and business model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/rec/gohighlevel" target="_blank" rel="noopener noreferrer">
                    Try GoHighLevel Free (White-Label)
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">
                    Explore HubSpot (Enterprise)
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                GoHighLevel offers 14-day free trial. Test the white-label setup with real clients.
              </p>
            </div>

            {/* Related Comparisons */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Related Comparisons:</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/compare/gohighlevel-vs-clickfunnels">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    GoHighLevel vs ClickFunnels
                  </Badge>
                </Link>
                <Link href="/compare/hubspot-vs-salesforce">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    HubSpot vs Salesforce
                  </Badge>
                </Link>
                <Link href="/tool/gohighlevel">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Full GoHighLevel Review
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, DollarSign, Zap, TrendingUp, Users, BarChart3, Mail, Bot, Target } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function MailchimpVsActiveCampaign() {
  useDocumentTitle(
    "Mailchimp vs ActiveCampaign 2025: Which Email Tool for Agencies? | AgencyAI.tools",
    "Detailed comparison of Mailchimp and ActiveCampaign for agencies. Features, pricing, automation, and Andy's MVO for choosing the right tool at each stage."
  );

  // Schema markup for SEO
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mailchimp vs ActiveCampaign Comparison",
    "description": "Comprehensive comparison of Mailchimp and ActiveCampaign email marketing tools for agencies in 2025. Free tier vs advanced automation.",
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Andy Kelly"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.6",
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
        "name": "Is ActiveCampaign better than Mailchimp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ActiveCampaign is better for agencies needing advanced automation, built-in CRM, and higher deliverability (90-92%). Mailchimp is better for startups with its free tier up to 500 contacts."
        }
      },
      {
        "@type": "Question",
        "name": "Which is cheaper at 10,000 contacts: Mailchimp or ActiveCampaign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ActiveCampaign is cheaper at $289/mo vs Mailchimp at $350/mo for 10,000 contacts. ActiveCampaign becomes more cost-effective at scale."
        }
      }
    ]
  };

  const comparisonData = [
    {
      feature: "Starting Price",
      mailchimp: "Free (500 contacts)",
      activecampaign: "$29/mo (1,000 contacts)",
      winner: "mailchimp",
      notes: "Mailchimp wins for testing/startup mode"
    },
    {
      feature: "Marketing Automation",
      mailchimp: "Basic customer journeys",
      activecampaign: "Advanced multi-step sequences",
      winner: "activecampaign",
      notes: "AC's automation is significantly more powerful"
    },
    {
      feature: "CRM Built-in",
      mailchimp: "No (basic tagging only)",
      activecampaign: "Yes (full sales pipeline)",
      winner: "activecampaign",
      notes: "AC includes complete CRM, MC requires separate tool"
    },
    {
      feature: "AI Automation Builder",
      mailchimp: "Limited AI suggestions",
      activecampaign: "Full journey generation from prompts",
      winner: "activecampaign",
      notes: "AC's AI actually builds workflows for you"
    },
    {
      feature: "Lead Scoring",
      mailchimp: "Basic 5-star rating",
      activecampaign: "Advanced point-based scoring",
      winner: "activecampaign",
      notes: "AC allows custom scoring rules and automation triggers"
    },
    {
      feature: "Deliverability Rate",
      mailchimp: "85-87%",
      activecampaign: "90-92%",
      winner: "activecampaign",
      notes: "AC averages 400-500 more emails in inbox per 10K sends"
    },
    {
      feature: "Email Sends",
      mailchimp: "Limited by plan tier",
      activecampaign: "Unlimited on all plans",
      winner: "activecampaign",
      notes: "No send limits on AC—huge for high-volume campaigns"
    },
    {
      feature: "SMS Marketing",
      mailchimp: "Limited availability",
      activecampaign: "Full SMS automation",
      winner: "activecampaign",
      notes: "AC integrates SMS into automations natively"
    },
    {
      feature: "Site Tracking",
      mailchimp: "Basic page visits",
      activecampaign: "Detailed behavior tracking",
      winner: "activecampaign",
      notes: "AC tracks specific pages, time on site, button clicks"
    },
    {
      feature: "Template Library",
      mailchimp: "Extensive (1,000+ templates)",
      activecampaign: "Good (300+ templates)",
      winner: "mailchimp",
      notes: "MC has more pre-built templates and faster builder"
    },
    {
      feature: "Learning Curve",
      mailchimp: "30 min to first campaign",
      activecampaign: "2-3 hours to master basics",
      winner: "mailchimp",
      notes: "MC is simpler and faster to onboard"
    },
    {
      feature: "Price at 10K Contacts",
      mailchimp: "~$350/mo",
      activecampaign: "~$289/mo",
      winner: "activecampaign",
      notes: "AC becomes cheaper at scale with more features"
    }
  ];

  const pricingComparison = [
    {
      contacts: "500",
      mailchimp: "Free",
      activecampaign: "$29/mo",
      recommendation: "Mailchimp for testing"
    },
    {
      contacts: "1,000",
      mailchimp: "$13-20/mo",
      activecampaign: "$29/mo",
      recommendation: "Mailchimp if simple, AC if automation needed"
    },
    {
      contacts: "2,500",
      mailchimp: "$40-60/mo",
      activecampaign: "$49/mo",
      recommendation: "ActiveCampaign becomes better value"
    },
    {
      contacts: "5,000",
      mailchimp: "$100-135/mo",
      activecampaign: "$149/mo",
      recommendation: "ActiveCampaign with CRM included"
    },
    {
      contacts: "10,000",
      mailchimp: "$300-350/mo",
      activecampaign: "$289/mo",
      recommendation: "ActiveCampaign clearly cheaper + better"
    },
    {
      contacts: "25,000",
      mailchimp: "$650-700/mo",
      activecampaign: "$499/mo",
      recommendation: "ActiveCampaign saves $200/mo"
    }
  ];

  const scenarios = [
    {
      title: "Startup Mode (0-2 Clients)",
      icon: Zap,
      revenue: "$0-2K/mo",
      color: "blue",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      recommendation: "Mailchimp Free",
      why: "Your problem isn't email automation—it's getting clients. Use Mailchimp free tier to test and prove value. Don't spend $29-49/mo when you're making $500-1,500/mo.",
      upgrade: "Switch to ActiveCampaign when you have 3+ clients needing automation beyond simple newsletters."
    },
    {
      title: "Growing (3-5 Clients)",
      icon: TrendingUp,
      revenue: "$3K-5K/mo",
      color: "purple",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      recommendation: "ActiveCampaign Plus",
      why: "At $3-5K/mo revenue, $49/mo for AC is 1-3% of income. The time saved with automation (5-10 hrs/month) pays for itself. Your clients need behavior-based sequences, not basic broadcasts.",
      upgrade: "Upgrade to Professional ($149/mo) when you need predictive sending, attribution, or managing 10+ clients."
    },
    {
      title: "Scaling (6+ Clients)",
      icon: BarChart3,
      revenue: "$6K-20K+/mo",
      color: "orange",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      recommendation: "ActiveCampaign Pro or Enterprise",
      why: "Tool cost is irrelevant at this stage—it's 1-2% of revenue. You need advanced automation, CRM, lead scoring, and dedicated support. The alternative is hiring a VA for $2K/mo to do manually what AC automates.",
      upgrade: "Consider GoHighLevel if you need full agency platform (CRM + email + funnels + SMS + calendars)."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl">
            <div className="text-center space-y-6 mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                <Mail className="w-3 h-3 mr-1" />
                Tool Comparison 2025
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Mailchimp vs ActiveCampaign
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Which email tool actually delivers for agencies? Here's the real breakdown—when to use free Mailchimp, when to upgrade to ActiveCampaign, and Andy's MVO for each stage.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Mailchimp Wins</CardTitle>
                  <CardDescription>Starting Price & Simplicity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Free tier (500 contacts), fastest onboarding (30 min), more templates (1,000+), perfect for testing
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>ActiveCampaign Wins</CardTitle>
                  <CardDescription>Automation & Scale</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Advanced automation, built-in CRM, better deliverability (90%+), cheaper at 10K+ contacts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/30 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle>The Real Answer</CardTitle>
                  <CardDescription>Depends on Your Stage</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    0-2 clients: Mailchimp Free. 3-5 clients: ActiveCampaign. 6+ clients: ActiveCampaign Pro.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature-by-Feature Comparison</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                The complete breakdown of what each tool offers (and what it costs)
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-bold">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-blue-600 dark:text-blue-400">Mailchimp</th>
                    <th className="text-center py-4 px-4 font-bold text-purple-600 dark:text-purple-400">ActiveCampaign</th>
                    <th className="text-left py-4 px-4 font-bold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 px-4 font-medium">{item.feature}</td>
                      <td className="py-4 px-4 text-center text-sm">{item.mailchimp}</td>
                      <td className="py-4 px-4 text-center text-sm">{item.activecampaign}</td>
                      <td className="py-4 px-4">
                        <Badge 
                          className={`${
                            item.winner === "mailchimp" 
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400" 
                              : "bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400"
                          } border-0`}
                        >
                          {item.winner === "mailchimp" ? "Mailchimp" : "ActiveCampaign"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>The Tally:</strong> ActiveCampaign wins 9 out of 12 categories. But that doesn't mean it's always the right choice—see scenarios below.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing at Different Scales</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Here's what you'll actually pay as your contact list grows
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                    <th className="text-left py-4 px-4 font-bold">Contacts</th>
                    <th className="text-center py-4 px-4 font-bold text-blue-600">Mailchimp</th>
                    <th className="text-center py-4 px-4 font-bold text-purple-600">ActiveCampaign</th>
                    <th className="text-left py-4 px-4 font-bold">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-4 px-4 font-bold text-lg">{item.contacts}</td>
                      <td className="py-4 px-4 text-center font-semibold">{item.mailchimp}</td>
                      <td className="py-4 px-4 text-center font-semibold">{item.activecampaign}</td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">{item.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-yellow-600" />
                  The Mailchimp Pricing Trap
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Mailchimp gets expensive fast. At 10K contacts, you're paying $350/mo for fewer features than ActiveCampaign's $289/mo. Many agencies overpay by $500-1,000/year by staying on Mailchimp too long.
                </p>
              </div>

              <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  The ActiveCampaign Value
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  AC includes CRM (worth $50-150/mo separately), unlimited sends, and better automation. At 5K+ contacts, you're getting 2-3x the value for similar price. Plus, deliverability is 5% better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Andy's MVO Scenarios */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
                Andy's MVO Framework
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Right Tool for Your Stage</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Stop overthinking. Here's exactly what to use based on your revenue and client count.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {scenarios.map((scenario, index) => {
                const IconComponent = scenario.icon;
                return (
                  <Card 
                    key={index}
                    className={`${scenario.bgColor} ${scenario.borderColor} border-2 hover:shadow-2xl transition-all duration-300`}
                    style={{ borderRadius: '24px' }}
                  >
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl bg-${scenario.color}-100 dark:bg-${scenario.color}-950/30 flex items-center justify-center mb-4`}>
                        <IconComponent className={`w-8 h-8 text-${scenario.color}-600 dark:text-${scenario.color}-400`} />
                      </div>
                      <CardTitle className="text-2xl">{scenario.title}</CardTitle>
                      <CardDescription className="text-base font-semibold">{scenario.revenue}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl">
                        <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">MVO Recommendation:</div>
                        <div className={`text-xl font-bold text-${scenario.color}-600 dark:text-${scenario.color}-400`}>
                          {scenario.recommendation}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Why:</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {scenario.why}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">When to Upgrade:</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {scenario.upgrade}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold mb-4">Andy's Personal Take</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I use <strong>ActiveCampaign Plus</strong> for 90% of client work. Why? At the stage where clients pay me $750-1,500/mo for email marketing, they need automation that actually works—behavior triggers, lead scoring, CRM integration.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The automation builder alone saves me <strong>5-10 hours per month</strong> across all clients. At my billable rate ($100-150/hr), that's $500-1,500 saved monthly. The tool costs me $99/mo. ROI is obvious.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>But I still use Mailchimp for:</strong> Onboarding new clients who've never done email (prove value on free tier), simple newsletter clients (local businesses, nonprofits), and my own agency's quarterly updates (don't need CRM for my own list).
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Choose Your Tool?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Read our complete reviews with setup guides, use cases, and Andy's full analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tool/mailchimp">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-lg">
                  Read Mailchimp Review
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/tool/activecampaign">
                <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-purple-50 border-0 shadow-lg">
                  Read ActiveCampaign Review
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Comparisons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/compare/make-vs-zapier">
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Make vs Zapier</CardTitle>
                    <CardDescription>Automation platforms compared</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/compare/gohighlevel-vs-clickfunnels">
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">GoHighLevel vs ClickFunnels</CardTitle>
                    <CardDescription>All-in-one platforms for agencies</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/tool/gohighlevel">
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">GoHighLevel Review</CardTitle>
                    <CardDescription>The all-in-one alternative</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Affiliate Disclosure - Footer Fine Print */}
      <div className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-6xl py-6 px-4">
          <p className="text-xs text-gray-500 dark:text-gray-600 text-center">
            <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. We only recommend tools we've personally used and believe provide value to agencies. Our comparison analysis remains unbiased regardless of affiliate relationships.
          </p>
        </div>
      </div>
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Mail, Zap } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ActiveCampaignVsConvertKit() {
  useDocumentTitle(
    "ActiveCampaign vs ConvertKit 2025: Which Email Tool for Creators? | AgencyAI.tools",
    "ActiveCampaign vs ConvertKit comparison for agencies and creators. Advanced automation vs creator-friendly simplicity. Pricing, features, and which email platform fits your needs in 2025."
  );

  // Schema markup for SEO
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ActiveCampaign vs ConvertKit Comparison",
    "description": "Comprehensive comparison of ActiveCampaign and ConvertKit email marketing tools for agencies and creators in 2025. Advanced automation vs creator-friendly platform.",
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Andy Kelly"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
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
        "name": "Should I use ActiveCampaign or ConvertKit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use ActiveCampaign for advanced marketing automation, CRM features, and complex workflows. Use ConvertKit for creator-focused simplicity, landing pages, and email sequences for coaches/creators."
        }
      },
      {
        "@type": "Question",
        "name": "Which is cheaper: ActiveCampaign or ConvertKit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ConvertKit starts at $25/mo for 1,000 subscribers. ActiveCampaign starts at $29/mo but includes more automation features. At 10K+ subscribers, pricing is similar but ActiveCampaign offers more functionality."
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
                <Badge>Email Marketing</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                ActiveCampaign vs ConvertKit: Power User or Creator-Friendly?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both send emails and build lists. One is built for complex automation and sales pipelines. The other is built for creators who just want simplicity. Here's which one you actually need in 2025.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I've run email campaigns on both platforms for hundreds of clients. ActiveCampaign is a Swiss Army knife. ConvertKit is a really good knife.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Here's what nobody tells you... ConvertKit is beloved by creators because it's dead simple. ActiveCampaign is loved by agencies because it can do *everything* - but with a steeper learning curve.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Pick the wrong one and you'll either overpay for features you'll never use, or struggle with a platform that can't handle your automation needs.
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
                        <th className="text-left py-3 px-4 font-semibold">ActiveCampaign</th>
                        <th className="text-left py-3 px-4 font-semibold">ConvertKit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Agencies, advanced automation</td>
                        <td className="py-3 px-4">Creators, coaches, simple funnels</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$29/mo (1K contacts)</td>
                        <td className="py-3 px-4">$25/mo (1K subscribers)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Learning Curve</td>
                        <td className="py-3 px-4">Steeper (powerful but complex)</td>
                        <td className="py-3 px-4">Easier (creator-friendly)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Marketing Automation</td>
                        <td className="py-3 px-4">✅ Advanced (multi-step journeys)</td>
                        <td className="py-3 px-4">Basic (simple sequences)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">CRM Built-in</td>
                        <td className="py-3 px-4">✅ Yes (full sales pipeline)</td>
                        <td className="py-3 px-4">❌ No (basic tagging)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Landing Pages</td>
                        <td className="py-3 px-4">Limited templates</td>
                        <td className="py-3 px-4">✅ Yes (creator-focused)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Email Builder</td>
                        <td className="py-3 px-4">Drag-and-drop (complex)</td>
                        <td className="py-3 px-4">Simple text-based (clean)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Creator Features</td>
                        <td className="py-3 px-4">❌ No (B2B focused)</td>
                        <td className="py-3 px-4">✅ Yes (digital products, tips)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Feature Breakdown */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Feature-by-Feature Breakdown</h2>
              
              {/* Automation */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Zap className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Marketing Automation</h3>
                      <p className="text-muted-foreground">
                        <strong>ActiveCampaign wins.</strong> It has the most powerful automation builder in email marketing. Multi-step journeys, conditional logic, split testing, lead scoring, and site tracking.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>ConvertKit</strong> has basic "sequences" - simple autoresponders. Good enough for welcome emails and launch sequences. Not good for complex nurturing.
                      </p>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Winner: ActiveCampaign (if you need automation). ConvertKit (if you don't).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ease of Use */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Check className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Ease of Use</h3>
                      <p className="text-muted-foreground">
                        <strong>ConvertKit wins.</strong> It's designed for non-technical creators. Simple interface, minimal settings, text-based emails that look personal.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>ActiveCampaign</strong> has a steeper learning curve. More powerful, but takes 2-3 weeks to master. You'll spend time learning the automation builder.
                      </p>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Winner: ConvertKit (by far).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Landing Pages */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Landing Pages & Forms</h3>
                      <p className="text-muted-foreground">
                        <strong>ConvertKit wins.</strong> Built-in landing page templates designed for creators. Simple, clean, mobile-optimized. Create a landing page in 10 minutes.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>ActiveCampaign</strong> has forms but limited landing page templates. You'll likely use a separate tool like Unbounce or Leadpages.
                      </p>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Winner: ConvertKit.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Breakdown */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Pricing at Different Scales</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Subscribers</th>
                        <th className="text-left py-3 px-4 font-semibold">ActiveCampaign</th>
                        <th className="text-left py-3 px-4 font-semibold">ConvertKit</th>
                        <th className="text-left py-3 px-4 font-semibold">Better Deal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">1,000</td>
                        <td className="py-3 px-4">$29/mo</td>
                        <td className="py-3 px-4">$25/mo</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">ConvertKit</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">2,500</td>
                        <td className="py-3 px-4">$49/mo</td>
                        <td className="py-3 px-4">$50/mo</td>
                        <td className="py-3 px-4 text-purple-600 font-semibold">ActiveCampaign</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">5,000</td>
                        <td className="py-3 px-4">$149/mo</td>
                        <td className="py-3 px-4">$83/mo</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">ConvertKit</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">10,000</td>
                        <td className="py-3 px-4">$289/mo</td>
                        <td className="py-3 px-4">$158/mo</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">ConvertKit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  *ActiveCampaign pricing includes full automation and CRM. ConvertKit is cheaper but has fewer features.
                </p>
              </CardContent>
            </Card>

            {/* Andy's Take */}
            <Card className="border-2 border-purple-200 dark:border-purple-900/50 bg-gradient-to-br from-purple-50/50 to-background dark:from-purple-950/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Andy's Take</h2>
                <div className="space-y-4 text-foreground">
                  <p className="text-lg leading-relaxed">
                    <strong>Use ConvertKit if:</strong>
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You're a creator, coach, or course creator selling digital products</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You want simple, text-based emails (not fancy designs)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You need landing pages included</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You don't need advanced automation or CRM</span>
                    </li>
                  </ul>

                  <p className="text-lg leading-relaxed mt-6">
                    <strong>Use ActiveCampaign if:</strong>
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>You're an agency managing client campaigns</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>You need complex automation workflows</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>You want a built-in CRM and sales pipeline</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>You need lead scoring and site tracking</span>
                    </li>
                  </ul>

                  <p className="text-lg leading-relaxed mt-6 pt-6 border-t">
                    <strong>Bottom line:</strong> Most creators should start with ConvertKit. It's cheaper, simpler, and has everything you need for newsletters and product launches. Agencies should use ActiveCampaign for the automation power.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/rec/activecampaign" className="flex-1">
                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  Try ActiveCampaign Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/rec/convertkit" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Try ConvertKit Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

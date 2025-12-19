import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

export default function MakeVsZapier() {
  // Schema markup for SEO
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Make vs Zapier Comparison",
    "description": "Comprehensive comparison of Make and Zapier automation tools for agencies in 2025. Pricing, features, and which automation platform offers better value.",
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
        "name": "Is Make better than Zapier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Make is better for complex workflows and offers significantly better pricing (~$9/mo vs ~$50/mo for 10K tasks). Zapier is easier for simple automations and beginners."
        }
      },
      {
        "@type": "Question",
        "name": "How much cheaper is Make than Zapier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Make costs approximately $9/mo for 10,000 operations while Zapier costs around $50/mo for the same volume, making Make about 5-6x cheaper for high-volume automation."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://agencyai.tools/compare/make-vs-zapier" />
      </Helmet>
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
                <Badge>Automation</Badge>
                <Badge variant="outline">Comparison</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Make vs Zapier: Which Automation Tool Doesn't Break Your Budget?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both automate your workflows. One costs 10x more. Here's which one you actually need.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I've built hundreds of automations with both platforms. Spent thousands of dollars testing every edge case.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Here's what nobody tells you... Zapier is easier to start with, but Make is cheaper and more powerful once you know what you're doing.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Pick the wrong one and you'll either overpay by hundreds of dollars a month, or waste weeks fighting with a tool that's too complex for your needs.
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
                        <th className="text-left py-3 px-4 font-semibold">Make</th>
                        <th className="text-left py-3 px-4 font-semibold">Zapier</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Complex workflows</td>
                        <td className="py-3 px-4">Simple automations</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Learning Curve</td>
                        <td className="py-3 px-4">Steeper</td>
                        <td className="py-3 px-4">Easier</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Visual Builder</td>
                        <td className="py-3 px-4">✅ Advanced</td>
                        <td className="py-3 px-4">Basic</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Pricing Model</td>
                        <td className="py-3 px-4">Operations-based</td>
                        <td className="py-3 px-4">Tasks-based</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">10K Tasks/Month</td>
                        <td className="py-3 px-4">~$9/mo</td>
                        <td className="py-3 px-4">~$50/mo</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Winner</td>
                        <td className="py-3 px-4">Power users & agencies</td>
                        <td className="py-3 px-4">Beginners & simple needs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Deep Dive */}
            <div className="prose prose-lg max-w-none space-y-8">
              <h2 className="text-3xl font-bold text-foreground">What Each Tool Actually Does</h2>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-3">Make: The Power Tool</h3>
                <p className="text-foreground leading-relaxed">
                  Make (formerly Integromat) is built for complex workflows. Visual builder, conditional logic, error handling, and the ability to process multiple items in parallel.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  Think of it as the developer's automation tool. You can see your entire workflow as a flowchart, branch logic based on conditions, and handle edge cases that would break simpler tools.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-3">Zapier: The Beginner's Friend</h3>
                <p className="text-foreground leading-relaxed">
                  Zapier is built for simplicity. Trigger → Action → Done. No flowcharts, no complex logic, just "when this happens, do that."
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  It's the automation tool for people who don't want to think about automation. You can build a working Zap in 5 minutes without reading a manual.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12">When to Use Make</h2>
              <p className="text-foreground leading-relaxed">
                You should use Make if you're building workflows that have any complexity whatsoever.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Multiple steps. Conditional logic ("if this, then that, otherwise this other thing"). Processing lists of items. Error handling. Anything where you need to see the flow and understand what's happening.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The visual builder is a game-changer. You can see your entire workflow as a flowchart, which makes debugging 10x easier. When something breaks (and it will), you can see exactly where it failed.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The pricing is the real kicker. Make charges per "operation" (each action in your workflow), and it's way cheaper than Zapier. A workflow that costs $50/month on Zapier might cost $9/month on Make.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The downside? There's a learning curve. The first time you open Make, it's overwhelming. But once you get past that initial hump, you'll never want to go back to Zapier.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">When to Use Zapier</h2>
              <p className="text-foreground leading-relaxed">
                Zapier is for when you just need something to work right now without thinking about it.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Simple automations. "When someone fills out this form, add them to this spreadsheet." "When I get an email, send me a Slack message." One trigger, one or two actions, done.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The app library is massive — 5,000+ integrations. If you need to connect two obscure tools, Zapier probably supports them. Make's library is smaller (but growing).
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The free tier gives you 100 tasks a month, which is enough to test it. Paid plans start at $20/month for 750 tasks. If you're only running a few simple Zaps, it's fine.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                But once you scale past 10K tasks a month, the pricing gets ridiculous. You'll be paying $50-$100+/month for workflows that would cost $9-$20/month on Make.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">The Real Difference</h2>
              <p className="text-foreground leading-relaxed">
                Make is a visual programming tool. Zapier is a no-code connector.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                If you're building complex workflows, processing data, or running high-volume automations, Make saves you money and gives you more control.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                If you just need to connect two apps and move on with your life, Zapier gets you there faster.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">My Recommendation</h2>
              <p className="text-foreground leading-relaxed">
                Start with Zapier if you're brand new to automation or only need 1-2 simple workflows. The free tier is solid for testing.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Switch to Make as soon as you're running more than 5K tasks a month or need conditional logic. The learning curve is worth it — you'll save hundreds of dollars a year.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Or do what I do — use Zapier for quick one-off automations, Make for anything complex or high-volume. They're both worth having in your toolkit.
              </p>
            </div>

            {/* CTAs */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Make</h3>
                  <p className="text-muted-foreground mb-4">
                    Visual automation for complex workflows at 1/10th the cost
                  </p>
                  <div className="space-y-2">
                    <Link href="/tool/make">
                      <Button variant="default" className="w-full">
                        View Full Review
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://make.com" target="_blank" rel="noopener noreferrer">
                        Try Make →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Zapier</h3>
                  <p className="text-muted-foreground mb-4">
                    Simple automation for connecting apps fast
                  </p>
                  <div className="space-y-2">
                    <Link href="/tool/zapier">
                      <Button variant="default" className="w-full">
                        View Full Review
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://zapier.com" target="_blank" rel="noopener noreferrer">
                        Try Zapier →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}

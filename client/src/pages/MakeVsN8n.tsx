import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function MakeVsN8n() {
  useDocumentTitle(
    "Make vs n8n 2025: Cloud Automation or Self-Hosted? | AgencyAI.tools",
    "Make vs n8n comparison. Cloud automation platform vs self-hosted open-source. Which workflow automation tool fits technical agencies in 2025."
  );

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Make vs n8n Comparison",
    "description": "Comprehensive comparison of Make and n8n automation platforms for agencies in 2025. Cloud vs self-hosted.",
    "review": {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Andy Kelly" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Make better than n8n?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Make is better for non-technical users wanting cloud automation with support. n8n is better for technical teams wanting self-hosted, unlimited automation at lower cost."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Badge>Automation</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Make vs n8n: Cloud Convenience or Self-Hosted Control?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both automate workflows with visual builders. One is cloud-based and simple. The other is open-source and self-hosted. Here's which automation platform fits technical agencies in 2025.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Quick Answer</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Feature</th>
                        <th className="text-left py-3 px-4">Make</th>
                        <th className="text-left py-3 px-4">n8n</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Cloud, non-technical users</td>
                        <td className="py-3 px-4">Self-hosted, technical teams</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">Free (1K ops), then $9/mo</td>
                        <td className="py-3 px-4">Free (self-hosted, unlimited)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Hosting</td>
                        <td className="py-3 px-4">Cloud only</td>
                        <td className="py-3 px-4">✅ Self-hosted or cloud</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Setup Required</td>
                        <td className="py-3 px-4">✅ None (instant)</td>
                        <td className="py-3 px-4">Server setup needed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 dark:border-green-900/50">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Andy's Take</h2>
                <p className="text-lg mb-4">
                  <strong>Use Make if:</strong> You want cloud automation with zero setup. Perfect for non-technical teams wanting visual automation immediately.
                </p>
                <p className="text-lg mb-4">
                  <strong>Use n8n if:</strong> You're technical and want unlimited automation by self-hosting. Save money at scale with open-source control.
                </p>
                <p className="text-lg pt-4 border-t">
                  <strong>Bottom line:</strong> Most agencies should use Make (easier, cloud). Technical teams running 50K+ operations/month should use self-hosted n8n (way cheaper).
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/rec/make" className="flex-1">
                <Button size="lg" className="w-full">
                  Try Make Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/rec/n8n" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Try n8n Cloud <ArrowRight className="ml-2 h-4 w-4" />
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

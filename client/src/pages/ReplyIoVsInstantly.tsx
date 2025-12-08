import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ReplyIoVsInstantly() {
  useDocumentTitle(
    "Reply.io vs Instantly 2025: Which Cold Email Platform for Scale? | AgencyAI.tools",
    "Reply.io vs Instantly comparison for agencies. Multi-channel sequences vs unlimited sending. Pricing, deliverability, and which cold outreach platform scales better in 2025."
  );

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Reply.io vs Instantly Comparison",
    "description": "Comprehensive comparison of Reply.io and Instantly cold email platforms for agencies in 2025.",
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
        "name": "Is Reply.io better than Instantly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reply.io is better for multi-channel outreach (email + LinkedIn + calls). Instantly is better for pure email volume with unlimited accounts at lower cost."
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
                <Badge>Cold Email</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Reply.io vs Instantly: Multi-Channel or Email-Only?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both handle cold outreach at scale. One adds LinkedIn and calls. The other focuses purely on email volume. Here's which approach actually books more meetings in 2025.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Feature</th>
                        <th className="text-left py-3 px-4">Reply.io</th>
                        <th className="text-left py-3 px-4">Instantly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Multi-channel sequences</td>
                        <td className="py-3 px-4">High-volume email only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$60/mo (1,000 contacts)</td>
                        <td className="py-3 px-4">$37/mo (unlimited)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">LinkedIn Automation</td>
                        <td className="py-3 px-4">✅ Yes (native)</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Call Tracking</td>
                        <td className="py-3 px-4">✅ Yes</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Email Accounts</td>
                        <td className="py-3 px-4">Limited by plan</td>
                        <td className="py-3 px-4">✅ Unlimited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-900/50">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Andy's Take</h2>
                <p className="text-lg mb-4">
                  <strong>Use Reply.io if:</strong> You want multi-channel sequences (email → LinkedIn → call). Best for B2B sales teams doing full outbound motion.
                </p>
                <p className="text-lg mb-4">
                  <strong>Use Instantly if:</strong> You're focused purely on email volume. Better pricing for agencies running multiple campaigns with unlimited email accounts.
                </p>
                <p className="text-lg pt-4 border-t">
                  <strong>Bottom line:</strong> Reply.io is overkill if you're only doing email. Instantly is limiting if you need LinkedIn. I use Instantly for email-only campaigns (cheaper + unlimited accounts).
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/rec/replyio" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Try Reply.io Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/rec/instantly" className="flex-1">
                <Button size="lg" className="w-full">
                  Try Instantly Free <ArrowRight className="ml-2 h-4 w-4" />
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

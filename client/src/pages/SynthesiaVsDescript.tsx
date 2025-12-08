import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Video } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function SynthesiaVsDescript() {
  useDocumentTitle(
    "Synthesia vs Descript 2025: AI Video Creation vs Video Editing | AgencyAI.tools",
    "Synthesia vs Descript comparison. AI avatar videos vs screen recording editing. Which video platform fits agencies and content creators in 2025."
  );

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Synthesia vs Descript Comparison",
    "description": "Comprehensive comparison of Synthesia and Descript video tools for agencies in 2025. AI avatars vs video editing.",
    "review": {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Andy Kelly" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4.4", "bestRating": "5" }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Synthesia better than Descript?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Synthesia is better for creating AI avatar videos without recording. Descript is better for editing real videos, podcasts, and screen recordings with transcription-based editing."
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
                <Badge>Video</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Synthesia vs Descript: AI Avatars or Video Editing?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both create videos. One generates AI avatar videos without recording. The other edits real videos like a text document. Different tools for different jobs in 2025.
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
                        <th className="text-left py-3 px-4">Synthesia</th>
                        <th className="text-left py-3 px-4">Descript</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">AI avatar videos</td>
                        <td className="py-3 px-4">Editing real videos/podcasts</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$22/mo</td>
                        <td className="py-3 px-4">Free (then $24/mo)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">No Recording Needed</td>
                        <td className="py-3 px-4">✅ Yes (AI avatars)</td>
                        <td className="py-3 px-4">❌ No (edits real footage)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Edit Like Text</td>
                        <td className="py-3 px-4">❌ No</td>
                        <td className="py-3 px-4">✅ Yes (transcription editing)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 dark:border-blue-900/50">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Andy's Take</h2>
                <p className="text-lg mb-4">
                  <strong>Use Synthesia if:</strong> You need training videos, explainer videos, or product demos without appearing on camera. AI avatars save time.
                </p>
                <p className="text-lg mb-4">
                  <strong>Use Descript if:</strong> You're editing real videos or podcasts. The transcription-based editing is magical - edit video by editing text.
                </p>
                <p className="text-lg pt-4 border-t">
                  <strong>Bottom line:</strong> These aren't competitors - they solve different problems. Synthesia = create videos without recording. Descript = edit recorded videos faster.
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/rec/synthesia" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Try Synthesia Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/rec/descript" className="flex-1">
                <Button size="lg" className="w-full">
                  Try Descript Free <ArrowRight className="ml-2 h-4 w-4" />
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

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Image } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function MidjourneyVsDallE() {
  useDocumentTitle(
    "Midjourney vs DALL-E 2025: Which AI Image Generator for Agencies? | AgencyAI.tools",
    "Midjourney vs DALL-E 3 comparison. Artistic quality vs ChatGPT integration. Which AI image generator creates better visuals for agencies in 2025."
  );

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Midjourney vs DALL-E Comparison",
    "description": "Comprehensive comparison of Midjourney and DALL-E AI image generators for agencies in 2025.",
    "review": {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Andy Kelly" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4.7", "bestRating": "5" }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Midjourney better than DALL-E?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Midjourney produces more artistic, stylized images with better aesthetic quality. DALL-E 3 is better for realistic images and integrates with ChatGPT for easier prompting."
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
                <Badge>AI Image Generation</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Midjourney vs DALL-E: Artistic or Realistic AI Images?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both generate images from text. One excels at artistic, stylized visuals. The other nails photorealism and integrates with ChatGPT. Here's which one creates better images for your needs in 2025.
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
                        <th className="text-left py-3 px-4">Midjourney</th>
                        <th className="text-left py-3 px-4">DALL-E 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Artistic, stylized images</td>
                        <td className="py-3 px-4">Photorealistic images</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Price</td>
                        <td className="py-3 px-4">$10/mo (200 images)</td>
                        <td className="py-3 px-4">$20/mo (ChatGPT Plus)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Image Quality</td>
                        <td className="py-3 px-4">✅ Better artistic quality</td>
                        <td className="py-3 px-4">Better realism</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">ChatGPT Integration</td>
                        <td className="py-3 px-4">❌ No (Discord only)</td>
                        <td className="py-3 px-4">✅ Yes (native)</td>
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
                  <strong>Use Midjourney if:</strong> You need stunning, artistic images for social media, marketing, or creative projects. Best aesthetic quality.
                </p>
                <p className="text-lg mb-4">
                  <strong>Use DALL-E 3 if:</strong> You want photorealistic images and already use ChatGPT Plus. Easier prompting through conversation.
                </p>
                <p className="text-lg pt-4 border-t">
                  <strong>Bottom line:</strong> Midjourney wins on artistic quality and vibe. DALL-E wins on realism and convenience (if you're already paying for ChatGPT Plus).
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/rec/midjourney" className="flex-1">
                <Button size="lg" className="w-full">
                  Try Midjourney <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/rec/dalle" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Try DALL-E (ChatGPT Plus) <ArrowRight className="ml-2 h-4 w-4" />
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

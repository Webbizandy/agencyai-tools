import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function JasperVsCopyAi() {
  // Schema markup for SEO
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Jasper vs Copy.ai Comparison",
    "description": "Comprehensive comparison of Jasper and Copy.ai AI writing tools for agencies in 2025. Long-form content vs quick copy generation.",
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Andy Kelly"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.4",
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
        "name": "Is Jasper better than Copy.ai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jasper is better for long-form content with advanced brand voice training. Copy.ai is better for quick ad copy and social media posts with 90+ templates."
        }
      },
      {
        "@type": "Question",
        "name": "Which is more affordable: Jasper or Copy.ai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both start at $49/mo, but Copy.ai offers better value for basic use. Jasper charges more for advanced features like brand voice and SEO integration."
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
                <Badge>Content Creation</Badge>
                <Badge variant="outline">Comparison</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Jasper vs Copy.ai: Which AI Writer Actually Writes Like a Human?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both promise to write your content for you. Only one delivers copy that doesn't sound like a robot.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I've tested every AI writing tool on the market. Most of them spit out generic garbage that reads like a high school essay written at 2am.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Jasper and Copy.ai are two of the few that actually produce usable content, but they're built for completely different writers.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Choose wrong and you'll either overpay for features you'll never touch, or underpay and spend hours editing AI slop into something readable.
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
                        <th className="text-left py-3 px-4 font-semibold">Jasper</th>
                        <th className="text-left py-3 px-4 font-semibold">Copy.ai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Long-form content</td>
                        <td className="py-3 px-4">Quick copy & ads</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Output Quality</td>
                        <td className="py-3 px-4">Higher quality</td>
                        <td className="py-3 px-4">Fast but generic</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Templates</td>
                        <td className="py-3 px-4">50+ templates</td>
                        <td className="py-3 px-4">90+ templates</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Brand Voice</td>
                        <td className="py-3 px-4">✅ Advanced</td>
                        <td className="py-3 px-4">Basic</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$49/mo</td>
                        <td className="py-3 px-4">$49/mo</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Winner</td>
                        <td className="py-3 px-4">Agencies & serious writers</td>
                        <td className="py-3 px-4">Solo users & quick copy</td>
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
                <h3 className="text-2xl font-bold text-foreground mb-3">Jasper: The Pro Writer</h3>
                <p className="text-foreground leading-relaxed">
                  Jasper is built for long-form content — blog posts, articles, emails, sales pages. It's designed to match your brand voice and produce content that actually sounds like you wrote it.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  The brand voice feature is killer. You train it on your existing content, and it learns your style, tone, and vocabulary. After a few training sessions, it's scary how close it gets to your actual voice.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-3">Copy.ai: The Speed Demon</h3>
                <p className="text-foreground leading-relaxed">
                  Copy.ai is built for speed. You need 10 variations of a Facebook ad? Done in 30 seconds. Email subject lines? Here's 20 options. Product descriptions? Boom, generated.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  It's not trying to write your magnum opus. It's trying to get you 80% of the way there so you can edit and ship fast.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12">When to Use Jasper</h2>
              <p className="text-foreground leading-relaxed">
                You should use Jasper if you're creating content that actually matters. Blog posts that need to rank. Sales pages that need to convert. Email sequences that need to sound human.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                I use Jasper for anything over 500 words. The long-form editor is solid — you can write alongside the AI, tell it what to write next, and it picks up your flow. It's like having a co-writer who never gets tired.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The brand voice feature is worth the price alone. Once you train it, every piece of content sounds consistent. No more "this sounds like AI" comments from your audience.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The downside? It's expensive. $49/month gets you 50K words, which sounds like a lot until you're cranking out blog posts. If you're writing 10+ articles a month, you'll need the $125/month plan.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">When to Use Copy.ai</h2>
              <p className="text-foreground leading-relaxed">
                Copy.ai is for when you need copy fast and don't want to overthink it.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Ad copy. Social posts. Product descriptions. Email subject lines. Anything under 200 words where you just need options to choose from.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The template library is huge — 90+ templates for every use case imaginable. Pick one, fill in the blanks, and get 10 variations in seconds. Then you edit the best one and ship it.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The free tier is generous — 2,000 words a month, which is enough to test it. Paid plans start at $49/month for unlimited words, which is a steal if you're just doing short-form copy.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">The Real Difference</h2>
              <p className="text-foreground leading-relaxed">
                Jasper is a co-writer. Copy.ai is a copy generator.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                If you're building a content engine — blog posts, email sequences, sales pages — you need Jasper. It's designed for writers who care about quality and voice.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                If you just need to crank out ad copy, social posts, and quick marketing copy, Copy.ai gets you there faster and cheaper.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">My Recommendation</h2>
              <p className="text-foreground leading-relaxed">
                Start with Copy.ai if you're testing AI writing or only need short-form copy. The free tier is solid, and the paid plan is cheap for unlimited words.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Upgrade to Jasper when you're ready to produce long-form content that actually sounds like you. Once you train the brand voice, it's a game-changer.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Or do what I do — use both. Copy.ai for quick ad copy and social posts, Jasper for blog posts and email sequences. They complement each other perfectly.
              </p>
            </div>

            {/* CTAs */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Jasper</h3>
                  <p className="text-muted-foreground mb-4">
                    AI co-writer for long-form content that sounds human
                  </p>
                  <div className="space-y-2">
                    <Link href="/tool/jasper">
                      <Button variant="default" className="w-full">
                        View Full Review
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://jasper.ai" target="_blank" rel="noopener noreferrer">
                        Try Jasper →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Copy.ai</h3>
                  <p className="text-muted-foreground mb-4">
                    Fast copy generation for ads, social, and marketing
                  </p>
                  <div className="space-y-2">
                    <Link href="/tool/copyai">
                      <Button variant="default" className="w-full">
                        View Full Review
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://copy.ai" target="_blank" rel="noopener noreferrer">
                        Try Copy.ai →
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
  );
}

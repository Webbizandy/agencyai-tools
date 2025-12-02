import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink, Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toolsData from "@/data/tools.json";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Helmet } from "react-helmet";

export default function ToolDetailBalanced() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const tool = toolsData.find(t => t.slug === slug);

  useDocumentTitle(tool ? `${tool.name} Review 2025 - AgencyAI.tools` : "Tool Not Found");

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Tool Not Found</h1>
            <Link href="/tools">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse All Tools
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{tool.name} Review 2025: Features, Pricing & Alternatives | AgencyAI.tools</title>
        <meta 
          name="description" 
          content={`In-depth ${tool.name} review for 2025. ${tool.description} Compare features, pricing, pros & cons.`}
        />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${tool.name} Review 2025: Complete Guide for Agencies`} />
        <meta property="og:description" content={tool.description} />
        <meta property="og:url" content={`https://agencyai.tools/tool/${tool.slug}`} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://agencyai.tools/tool/${tool.slug}`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tool.name,
            "applicationCategory": "BusinessApplication",
            "description": tool.description,
            "url": tool.website,
            "offers": {
              "@type": "Offer",
              "price": tool.pricing.replace(/[^0-9]/g, '') || "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": tool.rating ? {
              "@type": "AggregateRating",
              "ratingValue": tool.rating,
              "reviewCount": tool.ratingCount || 1
            } : undefined
          })}
        </script>
      </Helmet>

      <Header />
      
      <article className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-gray-100 dark:border-gray-900">
          <div className="container max-w-5xl py-3">
            <Link href="/tools">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Tools
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero - Like Futurepedia */}
        <section className="py-8 md:py-12 border-b border-gray-100 dark:border-gray-900">
          <div className="container max-w-5xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {tool.categories?.map((cat, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary" 
                  className="text-xs font-medium"
                >
                  {cat}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {tool.name} AI Reviews: Use Cases, Pricing & Alternatives
            </h1>

            <div className="flex items-center gap-4 mb-6">
              {tool.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {tool.rating}/5
                  </span>
                  {tool.ratingCount && (
                    <span className="text-sm text-gray-500">
                      ({tool.ratingCount} reviews)
                    </span>
                  )}
                </div>
              )}
              <span className="text-gray-400">•</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {tool.pricing}
              </span>
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a 
                href={tool.affiliate || tool.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Try {tool.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-12 border-b border-gray-100 dark:border-gray-900">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is {tool.name}?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {tool.longDescription ? 
                  tool.longDescription.split('\n\n')[0] : 
                  tool.description
                }
              </p>
              {tool.andysTake?.snippet && (
                <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-400">
                  {tool.andysTake.snippet}
                </blockquote>
              )}
            </div>
          </div>
        </section>

        {/* Key Features - Clean List */}
        {tool.features && tool.features.length > 0 && (
          <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Key Features:
              </h2>
              <ul className="space-y-6">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                        {feature.name}:
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Pros & Cons - Simple Layout */}
        {(tool.pros || tool.cons) && (
          <section className="py-12 border-b border-gray-100 dark:border-gray-900">
            <div className="container max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Pros */}
                {tool.pros && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Pros
                    </h2>
                    <ul className="space-y-3">
                      {tool.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {pro}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cons */}
                {tool.cons && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Cons
                    </h2>
                    <ul className="space-y-3">
                      {tool.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-600 dark:text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {con}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Who is Using - If we have andysTake.bestFor */}
        {tool.andysTake?.bestFor && (
          <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Who is Using {tool.name}?
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {tool.andysTake.bestFor}
                </p>
                {tool.andysTake.skipIf && (
                  <div className="mt-6 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Not Recommended For:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {tool.andysTake.skipIf}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Pricing */}
        {tool.pricingDetails && (
          <section className="py-12 border-b border-gray-100 dark:border-gray-900">
            <div className="container max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Pricing:
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {tool.pricingDetails}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Disclaimer: Pricing information may change, and for the latest details, please refer to the {tool.name} website.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* What Makes It Unique */}
        {tool.andysTake?.mainTake && (
          <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What Makes {tool.name} Unique?
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  {tool.andysTake.mainTake.split('\n\n').slice(0, 2).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Ratings - If available */}
        {tool.rating && (
          <section className="py-12 border-b border-gray-100 dark:border-gray-900">
            <div className="container max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                How We Rated It:
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Ease of Use", score: tool.rating },
                  { label: "Functionality and Features", score: tool.rating },
                  { label: "Performance and Speed", score: tool.rating },
                  { label: "Cost-Efficiency", score: tool.rating },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-700 dark:text-gray-300">{item.label}:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{item.score}/5</span>
                  </div>
                ))}
                <div className="md:col-span-2 flex items-center justify-between py-3 border-t-2 border-gray-300 dark:border-gray-700 pt-4">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Overall Score:</span>
                  <span className="text-2xl font-bold text-blue-600">{tool.rating}/5</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Summary/Verdict */}
        {tool.andysTake?.verdict && (
          <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Summary:
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {tool.andysTake.verdict}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="container max-w-5xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to try {tool.name}?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Join thousands of professionals using {tool.name} to streamline their workflow
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a 
                href={tool.affiliate || tool.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Get Started with {tool.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}

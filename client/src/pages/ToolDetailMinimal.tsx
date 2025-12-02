import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toolsData from "@/data/tools.json";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Helmet } from "react-helmet";

export default function ToolDetailMinimal() {
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
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <article className="flex-1">
        {/* Simple Breadcrumb */}
        <div className="border-b border-gray-100 dark:border-gray-900">
          <div className="container max-w-4xl py-4">
            <Link href="/tools">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Tools
              </Button>
            </Link>
          </div>
        </div>

        {/* Clean Hero - NO BOX */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            {/* Categories as simple badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tool.categories?.map((cat, idx) => (
                <Badge 
                  key={idx} 
                  variant="outline" 
                  className="text-sm font-normal border-gray-200 dark:border-gray-800"
                >
                  {cat}
                </Badge>
              ))}
            </div>

            {/* Tool Name - Large, Clean */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {tool.name}
            </h1>

            {/* Description - Simple paragraph */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {tool.description}
            </p>

            {/* Pricing & CTA - Minimal inline */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {tool.pricing}
              </span>
              <span className="text-gray-400">•</span>
              <Button 
                asChild 
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900"
              >
                <a 
                  href={tool.affiliate || tool.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Visit {tool.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Andy's Quick Take - If exists, just a simple blockquote */}
            {tool.andysTake?.snippet && (
              <blockquote className="border-l-4 border-gray-900 dark:border-white pl-6 py-2 text-lg text-gray-700 dark:text-gray-300 italic mb-8">
                "{tool.andysTake.snippet}"
              </blockquote>
            )}
          </div>
        </section>

        {/* Main Content - Clean Prose */}
        <section className="py-12 border-t border-gray-100 dark:border-gray-900">
          <div className="container max-w-4xl">
            {/* Overview - If longDescription exists */}
            {tool.longDescription && (
              <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Overview
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  {tool.longDescription.split('\n\n').slice(0, 3).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Features - Simple List */}
            {tool.features && tool.features.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                          {feature.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pros & Cons - Minimal Two Column */}
            {(tool.pros || tool.cons) && (
              <div className="mb-16 grid md:grid-cols-2 gap-12">
                {/* Pros */}
                {tool.pros && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Pros
                    </h2>
                    <ul className="space-y-3">
                      {tool.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
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
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <XCircle className="w-5 h-5 text-red-600 dark:text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Andy's Full Take - If exists */}
            {tool.andysTake?.mainTake && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  My Take
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    {tool.andysTake.mainTake.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Best For / Skip If - Simple sections */}
                {(tool.andysTake.bestFor || tool.andysTake.skipIf) && (
                  <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {tool.andysTake.bestFor && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Best For
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {tool.andysTake.bestFor}
                        </p>
                      </div>
                    )}
                    {tool.andysTake.skipIf && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Skip If
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {tool.andysTake.skipIf}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Verdict */}
                {tool.andysTake.verdict && (
                  <div className="mt-12 border-l-4 border-gray-900 dark:border-white pl-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Verdict
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {tool.andysTake.verdict}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Simple Pricing Section */}
            {tool.pricingDetails && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Pricing
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {tool.pricingDetails}
                  </p>
                </div>
              </div>
            )}

            {/* Simple CTA at bottom */}
            <div className="border-t border-gray-100 dark:border-gray-900 pt-12">
              <div className="text-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900"
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
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  No credit card required
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}

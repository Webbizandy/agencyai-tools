import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toolsData from "@/data/tools.json";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Helmet } from "react-helmet";

// Import all review components
import ToolReviewHero from "@/components/tool-review/ToolReviewHero";
import AndysTakeSnippet from "@/components/tool-review/AndysTakeSnippet";
import AndysTake from "@/components/tool-review/AndysTake";
import QuickDecisionCards from "@/components/tool-review/QuickDecisionCards";
import FeaturesGrid from "@/components/tool-review/FeaturesGrid";
import PricingTable from "@/components/tool-review/PricingTable";
import FAQSection from "@/components/tool-review/FAQSection";
import AgencyUseCases from "@/components/tool-review/AgencyUseCases";
import ProductCTAs from "@/components/tool-review/ProductCTAs";
import RelatedTools from "@/components/tool-review/RelatedTools";

// Import new components
import KillerFeatures from "@/components/tool-review/KillerFeatures";
import RatingBreakdown from "@/components/tool-review/RatingBreakdown";
import CommunityReviews from "@/components/tool-review/CommunityReviews";

export default function ToolDetailV5() {
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
            <Link to="/tools">
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

  // Use the new structured data if available, otherwise fall back to old format
  const ratings = tool.ratings || {
    overall: tool.rating || 4.5,
    easeOfUse: 4.5,
    features: 4.5,
    valueForMoney: 4.5,
    agencyProfitability: 4.5
  };

  const killerFeatures = tool.killerFeatures || [];
  const communityReviews = tool.communityReviews || [];
  
  // Extract features as topFeatures (first 3)
  const topFeatures = tool.features?.slice(0, 3) || [];
  
  // Determine best for based on categories and description
  const bestFor = tool.categories?.slice(0, 3) || [];

  // Use structured pricing if available, otherwise use the old format
  const pricingPlans = tool.pricingTiers ? tool.pricingTiers.map(tier => ({
    name: tier.plan,
    price: tier.price,
    period: "month",
    description: tier.bestFor,
    features: [],
    ctaText: tier.price === "$0/mo" ? "Get Started Free" : "Start Free Trial",
    ctaUrl: tool.affiliate || tool.website,
    recommended: tier.plan === "Standard"
  })) : [
    {
      name: "Starter",
      price: tool.pricing.split('/')[0].replace('From ', ''),
      period: "month",
      description: "Perfect for testing and small projects",
      features: [
        "1-2 chatbots or projects",
        "Basic customization",
        "Email support",
        "Standard analytics"
      ],
      ctaText: "Start Free Trial",
      ctaUrl: tool.affiliate || tool.website
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Best for agencies and growing businesses",
      features: [
        "Up to 5 chatbots/projects",
        "White-label branding",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      recommended: true,
      ctaText: "Start Free Trial",
      ctaUrl: tool.affiliate || tool.website
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For agencies managing multiple clients",
      features: [
        "Unlimited projects",
        "Full white-label",
        "Dedicated account manager",
        "Custom training",
        "API access",
        "SLA guarantee"
      ],
      ctaText: "Contact Sales",
      ctaUrl: tool.website
    }
  ];

  // Use structured FAQs if available, otherwise generate them
  const faqs = tool.faqs || [
    {
      question: `What is ${tool.name} and how does it work?`,
      answer: tool.longDescription?.split('\n\n')[0] || tool.description
    },
    {
      question: `How much does ${tool.name} cost?`,
      answer: tool.pricingDetails || `${tool.name} offers flexible pricing starting at ${tool.pricing}. All plans include a 14-day free trial with no credit card required.`
    },
    {
      question: "Can I use this for client work?",
      answer: "Absolutely! The Professional plan includes white-label branding, allowing you to rebrand the tool as your own and charge clients directly. Many agencies use this to create recurring revenue streams."
    },
    {
      question: "Do I need technical skills to use this?",
      answer: "No coding required. The platform is designed to be user-friendly with drag-and-drop interfaces and guided setup wizards. Most users are up and running within 5-10 minutes."
    },
    {
      question: "What kind of support is available?",
      answer: "All paid plans include email support with responses within 24 hours. Professional and Enterprise plans get priority support with faster response times. Enterprise customers also receive a dedicated account manager."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access continues until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{tool.seoTitle || `${tool.name} Review 2025: Features, Pricing & Alternatives | AgencyAI.tools`}</title>
        <meta 
          name="description" 
          content={tool.seoDescription || `In-depth ${tool.name} review for 2025. ${tool.description} Compare features, pricing, pros & cons. ${ratings.overall}/5 rating from ${tool.ratingCount} reviews.`}
        />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${tool.name} Review 2025: Complete Guide for Agencies`} />
        <meta property="og:description" content={tool.description} />
        <meta property="og:url" content={`https://agencyai.tools/tool/${tool.slug}`} />
        {tool.logo && <meta property="og:image" content={`https://agencyai.tools${tool.logo}`} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${tool.name} Review 2025`} />
        <meta name="twitter:description" content={tool.description} />
        {tool.logo && <meta name="twitter:image" content={`https://agencyai.tools${tool.logo}`} />}
        
        {/* Canonical */}
        <link rel="canonical" href={`https://agencyai.tools/tool/${tool.slug}`} />
        
        {/* Schema.org JSON-LD - Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tool.name,
            "applicationCategory": "BusinessApplication",
            "description": tool.description,
            "url": tool.website,
            "image": tool.logo ? `https://agencyai.tools${tool.logo}` : undefined,
            "offers": {
              "@type": "Offer",
              "price": tool.pricing.replace(/[^0-9]/g, '') || "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": ratings.overall,
              "reviewCount": tool.ratingCount,
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Andy Kelly"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": ratings.overall,
                "bestRating": "5"
              },
              "reviewBody": tool.andysTake?.verdict || tool.description
            }
          })}
        </script>

        {/* Schema.org JSON-LD - Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://agencyai.tools"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://agencyai.tools/tools"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": tool.name,
                "item": `https://agencyai.tools/tool/${tool.slug}`
              }
            ]
          })}
        </script>

        {/* Schema.org JSON-LD - FAQPage */}
        {faqs && faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <Header />
      
      <article className="flex-1">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container">
            <Link to="/tools">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <ToolReviewHero
          name={tool.name}
          categories={tool.categories || [tool.category]}
          tagline={tool.description}
          description={tool.introduction?.story || 
            (tool.longDescription ? tool.longDescription.split('\n\n')[0] : tool.description)
          }
          rating={ratings.overall}
          reviewCount={tool.ratingCount || 0}
          websiteUrl={tool.website}
          affiliateUrl={tool.affiliate}
          pricing={tool.pricing}
          userCount={tool.name === "ChatBase" ? "50,000+" : undefined}
          messageCount={tool.name === "ChatBase" ? "10M+" : undefined}
          heroImage={tool.slug === "chatbase" ? "/screenshots/chatbase-dashboard.png" : tool.logo}
        />

        {/* Andy's Take Snippet - Quick Opinion at Top */}
        {tool.andysTake && (
          <AndysTakeSnippet
            toolName={tool.name}
            snippet={tool.andysTake.verdict}
          />
        )}

        {/* Quick Decision Support */}
        <QuickDecisionCards
          bestFor={bestFor}
          startingPrice={tool.pricing}
          freeTier={tool.pricing.toLowerCase().includes('free') || tool.pricingDetails?.toLowerCase().includes('free')}
          topFeatures={topFeatures}
          pros={tool.pros || []}
          cons={tool.cons || []}
        />

        {/* Killer Features Section - NEW COMPONENT */}
        {killerFeatures.length > 0 && (
          <KillerFeatures features={killerFeatures} />
        )}

        {/* Features Grid - Fallback if no killer features */}
        {killerFeatures.length === 0 && (
          <FeaturesGrid
            features={tool.features || []}
            toolName={tool.name}
          />
        )}

        {/* Agency Use Cases */}
        <AgencyUseCases
          toolName={tool.name}
        />

        {/* Andy's Full Take - Detailed Commentary */}
        {tool.andysTake && (
          <AndysTake
            toolName={tool.name}
            take={tool.andysTake.verdict}
            verdict={tool.andysTake.verdict}
            personalExperience={tool.andysTake.personalExperience}
            clientResults={tool.andysTake.clientResults}
            bestFor={tool.andysTake.bestFor}
            skipIf={tool.andysTake.avoidIf}
          />
        )}

        {/* Rating Breakdown - NEW COMPONENT */}
        <RatingBreakdown ratings={ratings} />

        {/* Pricing Table */}
        <PricingTable
          plans={pricingPlans}
          toolName={tool.name}
        />

        {/* Community Reviews - NEW COMPONENT */}
        {communityReviews.length > 0 && (
          <CommunityReviews reviews={communityReviews} />
        )}

        {/* FAQ Section with Schema */}
        <FAQSection
          faqs={faqs}
          toolName={tool.name}
        />

        {/* Product CTAs (List Building + Sales) */}
        <ProductCTAs
          toolName={tool.name}
        />

        {/* Related Tools */}
        <RelatedTools
          currentToolSlug={tool.slug}
          allTools={toolsData}
          maxTools={6}
        />
      </article>

      <Footer />
    </div>
  );
}

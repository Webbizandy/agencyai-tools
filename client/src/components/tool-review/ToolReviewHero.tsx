import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Download, Users, MessageSquare } from "lucide-react";

interface ToolReviewHeroProps {
  name: string;
  categories: string[];
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  websiteUrl: string;
  affiliateUrl?: string;
  pricing: string;
  userCount?: string;
  messageCount?: string;
  heroImage?: string;
}

export default function ToolReviewHero({
  name,
  categories,
  tagline,
  description,
  rating,
  reviewCount,
  websiteUrl,
  affiliateUrl,
  pricing,
  userCount,
  messageCount,
  heroImage
}: ToolReviewHeroProps) {
  const ctaUrl = affiliateUrl || websiteUrl;
  
  // Generate star display
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 py-12 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
      
      <div className="container relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Badges */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, idx) => (
                <Badge 
                  key={idx}
                  variant="secondary" 
                  className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 px-2.5 py-0.5 text-xs font-medium"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {name} Review 2025
            </h1>

            {/* Tagline */}
            {tagline && (
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                {tagline}
              </p>
            )}

            {/* Rating - PROMINENT */}
            <div className="flex items-center gap-4 py-4 px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-6 h-6 ${
                      idx < fullStars
                        ? 'fill-yellow-400 text-yellow-400'
                        : idx === fullStars && hasHalfStar
                        ? 'fill-yellow-400/50 text-yellow-400'
                        : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
                    }`}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{rating}/5</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Based on {reviewCount.toLocaleString()} reviews
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>

            {/* Trust Indicators */}
            {(userCount || messageCount) && (
              <div className="flex flex-wrap items-center gap-6 text-sm">
                {userCount && (
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">{userCount}</span>
                    <span>users</span>
                  </div>
                )}
                {messageCount && (
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">{messageCount}</span>
                    <span>messages sent</span>
                  </div>
                )}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary CTA - Affiliate */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-6"
                asChild
              >
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  Try {name} Free
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>

              {/* Secondary CTA - Lead Magnet */}
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/20 text-lg px-8 py-6"
                asChild
              >
                <a href="#setup-guide">
                  <Download className="mr-2 w-5 h-5" />
                  Get Setup Guide
                </a>
              </Button>
            </div>

            {/* Sub-CTA Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <span className="text-green-600 dark:text-green-400">✓</span> Free trial available
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-600 dark:text-green-400">✓</span> No credit card required
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-600 dark:text-green-400">✓</span> Setup in 5 minutes
              </span>
            </div>
          </div>

          {/* Right Column - Hero Image (1/3 width) */}
          <div className="lg:col-span-1 relative">
            {heroImage ? (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src={heroImage}
                  alt={`${name} dashboard preview`}
                  className="w-full h-auto"
                />
                {/* Floating badge - REDUCED SIZE */}
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-base font-bold leading-tight">5 min</div>
                  <div className="text-xs opacity-90">Setup</div>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-4 border-white dark:border-gray-800 shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-2 p-8">
                  <div className="text-6xl mb-4">💬</div>
                  <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                    {name} Dashboard
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Screenshot preview
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

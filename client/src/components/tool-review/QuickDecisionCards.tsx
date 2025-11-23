import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, DollarSign, Sparkles, Check, X, TrendingUp, Zap, Clock, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";

interface QuickDecisionCardsProps {
  bestFor: string[];
  startingPrice: string;
  freeTier?: boolean;
  topFeatures: string[];
  pros: string[];
  cons: string[];
}

export default function QuickDecisionCards({
  bestFor,
  startingPrice,
  freeTier,
  topFeatures,
  pros,
  cons
}: QuickDecisionCardsProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl">
        {/* Quick Summary Cards - Neil's style: soft backgrounds, no borders, no shadows */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Best For Card */}
          <div className="bg-[#F7F8F9] dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/60 dark:border-gray-700/50 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Best For</h3>
            </div>
            <ul className="space-y-3">
              {bestFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base">
                  <Check className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Card - HIGHLIGHTED with coral/peach */}
          <div className="bg-[#FFF2EF] dark:bg-gray-800 rounded-2xl p-6 relative overflow-hidden border border-orange-200/60 dark:border-gray-700/50">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-300/20 to-transparent rounded-full -mr-12 -mt-12" />
            <Badge className="w-fit bg-gradient-to-r from-orange-500 to-red-500 text-white mb-3 border-0">Most Popular</Badge>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Starting Price</h3>
            </div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {startingPrice}
            </div>
            {freeTier && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Free plan available for testing
              </p>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 font-semibold"
              asChild
            >
              <a href="#pricing">View All Plans →</a>
            </Button>
          </div>

          {/* Top Features Card */}
          <div className="bg-[#F7F8F9] dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/60 dark:border-gray-700/50 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Top Features</h3>
            </div>
            <ul className="space-y-3">
              {topFeatures.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base">
                  <Zap className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pros & Cons - Side by Side */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Pros and Cons
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros - Neil's style: soft bg, no border, better icons */}
            <div className="bg-[#F0FDF4] dark:bg-emerald-950/20 rounded-2xl p-7 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full -mr-16 -mt-16" />
              
              {/* Header with better icon */}
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                  <ThumbsUp className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Pros
                </h3>
              </div>
              
              {/* List with better visual interest */}
              <ul className="space-y-4 relative">
                {pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                      {pro}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons - Neil's style with coral/orange tones */}
            <div className="bg-[#FFF2EF] dark:bg-rose-950/20 rounded-2xl p-7 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full -mr-16 -mt-16" />
              
              {/* Header with better icon */}
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                  <AlertCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Cons
                </h3>
              </div>
              
              {/* List with better visual interest */}
              <ul className="space-y-4 relative">
                {cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors">
                      <X className="w-4 h-4 text-orange-600 dark:text-orange-400" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Line Verdict */}
          <div className="mt-6 bg-[#F7F8F9] dark:bg-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  Bottom Line
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                  {pros.length > cons.length ? 
                    "Overall, this is a strong choice with more advantages than limitations. The pros significantly outweigh the cons for most use cases." :
                    "This tool has notable strengths but also important limitations to consider. Make sure it aligns with your specific needs before committing."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Encouragement CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-6 bg-[#F7F8F9] dark:bg-gray-800 rounded-2xl">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Want the full details? Keep reading for:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-1">
                  ⚡ <strong>Features breakdown</strong>
                </span>
                <span className="flex items-center gap-1">
                  💰 <strong>Pricing details</strong>
                </span>
                <span className="flex items-center gap-1">
                  📊 <strong>Real reviews</strong>
                </span>
                <span className="flex items-center gap-1">
                  🏢 <strong>Agency use cases</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium animate-bounce">
                <span>↓</span>
                <span>Scroll down for complete review</span>
                <span>↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

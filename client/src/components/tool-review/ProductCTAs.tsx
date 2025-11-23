import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Gift, Download, ArrowRight } from "lucide-react";

interface ProductCTAsProps {
  toolName: string;
}

export default function ProductCTAs({ toolName }: ProductCTAsProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get More Value from Your AI Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Free resources and exclusive offers to help you maximize {toolName} and grow your agency
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Lead Magnet: Book */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-300/30 to-transparent rounded-full -mr-16 -mt-16" />
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <BookOpen className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3">
                <Gift className="w-3 h-3" />
                FREE RESOURCE
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                The Agency AI Playbook
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Complete guide to implementing AI tools like {toolName} in your agency. 50+ pages of actionable strategies, templates, and case studies.
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  Step-by-step implementation guides
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  Real agency case studies with ROI data
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  Exclusive templates and checklists
                </li>
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                asChild
              >
                <a href="#book-download" className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Free Book
                </a>
              </Button>
            </div>
          </div>

          {/* Product Offer: AI Wingman */}
          <div className="relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border-2 border-orange-300 dark:border-orange-700 overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-300/30 to-transparent rounded-full -mr-16 -mt-16" />
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                <Zap className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full mb-3">
                <Zap className="w-3 h-3" />
                LIMITED OFFER
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                AI Wingman Pro Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Get your {toolName} instance professionally configured by our experts. Done-for-you setup optimized for agency workflows.
              </p>

              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$497</span>
                <span className="text-gray-500 dark:text-gray-400 line-through">$997</span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">50% OFF</span>
              </div>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  Complete {toolName} setup & optimization
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  Custom AI training on your services
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  30-day support & optimization
                </li>
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
                asChild
              >
                <a href="#ai-wingman-offer" className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Claim Your Spot
                </a>
              </Button>

              {/* Urgency */}
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
                🔥 Only 3 spots left this month
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Trust Signal */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            🔒 Your information is 100% secure. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}

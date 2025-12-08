import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface Tool {
  slug: string;
  name: string;
  description: string;
  logo?: string;
  screenshot?: string;
  rating: number;
  ratingCount: number;
  pricing: string;
  category: string;
  categories?: string[];
}

interface RelatedToolsProps {
  currentToolSlug: string;
  allTools: Tool[];
  maxTools?: number;
}

export default function RelatedTools({ currentToolSlug, allTools, maxTools = 6 }: RelatedToolsProps) {
  // Find current tool to get its categories
  const currentTool = allTools.find(t => t.slug === currentToolSlug);
  if (!currentTool) return null;

  const currentCategories = currentTool.categories || [currentTool.category];

  // Find related tools in same categories
  const relatedTools = allTools
    .filter(tool => {
      // Exclude current tool
      if (tool.slug === currentToolSlug) return false;
      
      // Check if tool shares any category
      const toolCategories = tool.categories || [tool.category];
      return toolCategories.some(cat => currentCategories.includes(cat));
    })
    .slice(0, maxTools);

  // If not enough related tools, add popular ones
  if (relatedTools.length < maxTools) {
    const popularTools = allTools
      .filter(t => t.slug !== currentToolSlug && !relatedTools.find(rt => rt.slug === t.slug))
      .sort((a, b) => (b.ratingCount || 0) - (a.ratingCount || 0))
      .slice(0, maxTools - relatedTools.length);
    
    relatedTools.push(...popularTools);
  }

  if (relatedTools.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Similar Tools Worth Checking Out
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            More AI tools that agencies love for similar use cases
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTools.map((tool) => (
            <Link key={tool.slug} href={`/tool/${tool.slug}`}>
              <Card className="h-full border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-xl cursor-pointer group">
                <CardContent className="p-6">
                  {/* Logo + Name */}
                  <div className="flex items-center gap-4 mb-4">
                    {tool.logo ? (
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} logo`}
                        className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                          {tool.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">{tool.rating}</span>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400">
                          ({tool.ratingCount?.toLocaleString() || 0})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {tool.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">
                      {(tool.categories && tool.categories[0]) || tool.category}
                    </span>
                  </div>

                  {/* Pricing + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Starting at</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {tool.pricing}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/20 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/tools">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Browse All Tools
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

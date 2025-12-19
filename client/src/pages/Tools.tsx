import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ArrowRight, Sparkles, Shield, Zap, TrendingUp, Filter } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";
import toolsData from "@/data/tools.json";
import { getTagColor } from "@/lib/tag-colors";
import { getCategoryBorderColor } from "@/lib/category-colors";
import { Helmet } from "react-helmet";

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Main categories with icons
  const mainCategories = [
    { name: "All", icon: Filter },
    { name: "White Label Tools", icon: Sparkles },
    { name: "Client Services", icon: Shield },
    { name: "Agency Operations", icon: Zap },
    { name: "Lead Generation", icon: TrendingUp },
  ];

  // Filter tools
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesSearch = searchQuery === "" || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || 
        tool.categories.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://agencyai.tools/tools" />
      </Helmet>
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Browse All AI Tools
              </h1>
              <p className="text-lg text-muted-foreground">
                Every tool here has been tested. If it's listed, it works.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tools..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Tools */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-8">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {mainCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.name}
                      variant={selectedCategory === category.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.name)}
                      className="gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>

              {/* Results Count */}
              <div className="text-sm text-muted-foreground">
                Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
              </div>

              {/* Tools Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool) => (
                    <Card key={tool.id} className="hover:shadow-lg transition-shadow border-l-2" style={{borderLeftColor: getCategoryBorderColor(tool.category)}}>
                      <CardHeader>
                        <div className="space-y-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-xl">{tool.name}</CardTitle>
                            {tool.featured && (
                              <Badge variant="default" className="text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{tool.category}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {tool.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <span>👁️</span>
                            <span>{tool.views?.toLocaleString() || '0'}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>⭐</span>
                            <span>{tool.rating || '0'} ({tool.ratingCount || '0'})</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tool.tags.slice(0, 3).map((tag) => {
                            const colors = getTagColor(tag);
                            return (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className={`text-xs ${colors.bg} ${colors.text} ${colors.border}`}
                              >
                                {tag}
                              </Badge>
                            );
                          })}
                        </div>
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-sm font-medium text-foreground">
                            {tool.pricing}
                          </span>
                          <Link href={`/tool/${tool.slug}`}>
                            <Button variant="outline" size="sm">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No tools found matching your search.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}

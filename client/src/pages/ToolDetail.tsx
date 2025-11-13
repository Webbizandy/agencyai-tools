import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, X, Star, ArrowLeft } from "lucide-react";
import { useParams, Link } from "wouter";
import toolsData from "@/data/tools.json";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getTagColor } from "@/lib/tag-colors";

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = toolsData.find(t => t.slug === slug);

  useDocumentTitle(tool ? `${tool.name} Review - AgencyAI.tools` : "Tool Not Found");

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/30">
          <div className="container">
            <Link href="/tools">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-muted/30 border-b">
          <div className="container max-w-5xl">
            <div className="flex items-start gap-6">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-xl flex items-center justify-center p-4 flex-shrink-0 border-2 border-border">
                {tool.logo ? (
                  <img src={tool.logo} alt={`${tool.name} logo`} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-4xl">{tool.icon}</span>
                )}
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold">{tool.name}</h1>
                    {tool.featured && <Badge variant="default">Featured</Badge>}
                  </div>
                  <p className="text-xl text-muted-foreground">{tool.description}</p>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tool.rating}</span>
                    <span className="text-muted-foreground">({tool.ratingCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👁️</span>
                    <span>{tool.views?.toLocaleString()} views</span>
                  </div>
                  <div className="text-green-600 dark:text-green-400">
                    Added {tool.addedDaysAgo} days ago
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tool.tags?.map((tag) => {
                    const colors = getTagColor(tag);
                    return (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`${colors.bg} ${colors.text} ${colors.border}`}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Link href={`/rec/${tool.slug}`}>
                    <Button size="lg" className="gap-2">
                      Try {tool.name}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                  <div className="text-lg font-semibold">{tool.pricing}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <div className="prose dark:prose-invert max-w-none">
                    {tool.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Screenshots - Only show for tools with screenshots */}
                {tool.slug === 'gohighlevel' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Product Screenshots</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="rounded-lg overflow-hidden border border-border">
                        <img 
                          src="/screenshots/ghl-dashboard.png" 
                          alt="GoHighLevel Dashboard" 
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg overflow-hidden border border-border">
                          <img 
                            src="/screenshots/ghl-analytics.png" 
                            alt="GoHighLevel Analytics" 
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="rounded-lg overflow-hidden border border-border">
                          <img 
                            src="/screenshots/ghl-overview.png" 
                            alt="GoHighLevel Overview" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features */}
                {tool.features && tool.features.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Pros & Cons */}
                {(tool.pros || tool.cons) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tool.pros && tool.pros.length > 0 && (
                      <Card className="border-green-200 dark:border-green-800">
                        <CardContent className="pt-6">
                          <h3 className="text-lg font-bold mb-4 text-green-700 dark:text-green-400">Pros</h3>
                          <div className="space-y-2">
                            {tool.pros.map((pro, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                                <span className="text-sm">{pro}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {tool.cons && tool.cons.length > 0 && (
                      <Card className="border-red-200 dark:border-red-800">
                        <CardContent className="pt-6">
                          <h3 className="text-lg font-bold mb-4 text-red-700 dark:text-red-400">Cons</h3>
                          <div className="space-y-2">
                            {tool.cons.map((con, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                                <span className="text-sm">{con}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Use Cases */}
                {tool.useCases && tool.useCases.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Use Cases</h3>
                    <div className="space-y-4">
                      {tool.useCases.map((useCase, index) => (
                        <Card key={index}>
                          <CardContent className="pt-6">
                            <h4 className="font-semibold mb-2">{useCase.title}</h4>
                            <p className="text-sm text-muted-foreground">{useCase.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Pricing Card */}
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Pricing</div>
                      <div className="text-2xl font-bold">{tool.pricing}</div>
                      {tool.pricingDetails && (
                        <div className="text-sm text-muted-foreground mt-2">{tool.pricingDetails}</div>
                      )}
                    </div>
                    <Link href={`/rec/${tool.slug}`}>
                      <Button className="w-full gap-2">
                        Visit {tool.name}
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Category Card */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-2">Category</div>
                    <div className="font-semibold">{tool.category}</div>
                    {tool.categories && tool.categories.length > 1 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tool.categories.map((cat) => (
                          <Badge key={cat} variant="outline">{cat}</Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Website Card */}
                {tool.website && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-sm text-muted-foreground mb-2">Website</div>
                      <a 
                        href={tool.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline break-all"
                      >
                        {tool.website}
                      </a>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to try {tool.name}?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of agencies already using this tool to grow their business.
            </p>
            <Link href={`/rec/${tool.slug}`}>
              <Button size="lg" className="gap-2">
                Get Started with {tool.name}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

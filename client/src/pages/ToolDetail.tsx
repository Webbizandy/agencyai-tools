import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Check, X, ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import toolsData from "@/data/tools.json";

export default function ToolDetail() {
  const params = useParams();
  const tool = toolsData.find(t => t.slug === params.slug);

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Tool Not Found</h1>
            <p className="text-muted-foreground">
              Sorry, we couldn't find that tool.
            </p>
            <Link href="/tools">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
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

        {/* Tool Header */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Title and Tags */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    {tool.name}
                  </h1>
                  {tool.featured && (
                    <Badge variant="default">Featured</Badge>
                  )}
                </div>
                <p className="text-xl text-muted-foreground">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  <Button size="lg">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button size="lg" variant="outline">
                  {tool.pricing}
                </Button>
              </div>

              {/* Long Description */}
              <Card>
                <CardHeader>
                  <CardTitle>What It Does</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  {tool.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>

              {/* Features */}
              {tool.features && tool.features.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pros */}
                {tool.pros && tool.pros.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600 dark:text-green-400">
                        Pros
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tool.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Cons */}
                {tool.cons && tool.cons.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600 dark:text-red-400">
                        Cons
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tool.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Pricing Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{tool.pricingDetails}</p>
                </CardContent>
              </Card>

              {/* Final CTA */}
              <div className="text-center py-8">
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  <Button size="lg">
                    Try {tool.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import blogPosts from "@/data/blog-posts.json";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Badge className="mb-4">Blog & Resources</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Real Talk About Selling AI Services
              </h1>
              <p className="text-xl text-muted-foreground">
                No fluff. No hype. Just what's working right now for agencies selling AI to businesses with money.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container">
            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Blog posts coming soon. Check back later.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post: any) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden border-l-4" style={{borderLeftColor: post.tags.includes('AI Tools') ? '#3b82f6' : post.tags.includes('Agency Growth') ? '#a855f7' : '#22c55e'}}>
                      {post.image && (
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag: string) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">
                Get the Good Stuff First
              </h2>
              <p className="text-lg text-muted-foreground">
                Every week, I send out the best AI tools and strategies for agencies. No spam. No BS. Just tools that actually work.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Link href="/#subscribe" className="flex-1">
                  <Button size="lg" className="w-full">
                    Subscribe Now
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Join 500+ agencies already getting the good stuff.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

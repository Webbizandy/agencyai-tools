
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { getTagColor } from "@/lib/tag-colors";

export default function Home() {
  const [email, setEmail] = useState("");

  const featuredTools = [
    {
      name: "ChatBase",
      category: "Chatbots",
      description: "Upload your docs, train it in 5 minutes, and your clients get instant answers. No coding. No headaches.",
      pricing: "From $19/mo",
      tags: ["White Label", "Easy Setup"],
      color: "bg-blue-500",
      logo: "/logos/chatbase.png",
    },
    {
      name: "Jasper AI",
      category: "Content Creation",
      description: "Write client content faster than you can type. Blog posts, ads, emails — all in your client's voice.",
      pricing: "From $49/mo",
      tags: ["Content", "Marketing"],
      color: "bg-purple-500",
      logo: "/logos/jasper.png",
    },
    {
      name: "Make.com",
      category: "Automation",
      description: "Connect anything to anything. No code required, but powerful enough to automate your entire agency workflow.",
      pricing: "Free tier available",
      tags: ["Automation", "Integration"],
      color: "bg-green-500",
      logo: "/logos/make.png",
    },
  ];

  const categories = [
    { name: "White Label Tools", icon: Sparkles, count: 23, description: "Rebrand and resell", color: "bg-purple-500", bgColor: "bg-purple-50 dark:bg-purple-950/20" },
    { name: "Client Services", icon: Shield, count: 34, description: "Deliver better results", color: "bg-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
    { name: "Agency Operations", icon: Zap, count: 18, description: "Run your business", color: "bg-orange-500", bgColor: "bg-orange-50 dark:bg-orange-950/20" },
    { name: "Lead Generation", icon: TrendingUp, count: 27, description: "Fill your pipeline", color: "bg-green-500", bgColor: "bg-green-50 dark:bg-green-950/20" },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.systeme.io/api/public/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': '7t3r5oi0nbnsna9tbtjibbl45rjw6o1vqqfhaxr49bjww5waaf0w9mi1iy8mj2eu'
        },
        body: JSON.stringify({
          email: email,
          tags: ['AgencyAI.tools Newsletter']
        })
      });
      
      if (response.ok) {
        setEmail("");
        alert("Thanks for subscribing! Check your email.");
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
          
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Get More Clients and Scale with the Right AI Tools
                </p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  The AI Stack for Agencies Who Actually Want to{" "}
                  <span className="text-primary">
                    Make Money
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  No fluff. No hype. Just the AI tools that work — tested by agencies, for agencies.
                </p>
              </div>

              {/* Search Bar */}
              <div className="flex gap-2 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for AI tools..."
                    className="pl-10"
                  />
                </div>
                <Button size="lg">
                  Search
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Over 100+ curated tools. Every one tested. If it's listed, it works.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">
                  Here's the thing... Most AI tool directories are a mess. 10,000 tools, half of them don't work, and you waste hours trying to figure out which ones are legit.
                </p>
                <p className="text-lg text-foreground leading-relaxed mt-4">
                  Not here.
                </p>
                <p className="text-lg text-foreground leading-relaxed mt-4">
                  Every tool on this site has been vetted. Either I've used it, or an agency I trust has. If it's listed, it works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
          <div className="container">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <Badge variant="outline" className="mb-2">Featured Tools</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Tools Agencies Actually Use
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Not the ones with fancy demos that fall apart when you try to use them. These are battle-tested.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredTools.map((tool) => (
                  <Card key={tool.name} className="hover:shadow-lg transition-shadow border-l-4 relative overflow-hidden group" style={{borderLeftColor: tool.color === 'bg-blue-500' ? '#3b82f6' : tool.color === 'bg-purple-500' ? '#a855f7' : '#22c55e'}}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center p-2 flex-shrink-0 border border-border">
                          <img src={tool.logo} alt={`${tool.name} logo`} className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <CardTitle>{tool.name}</CardTitle>
                          <CardDescription>{tool.category}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag) => {
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
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm font-medium text-foreground">
                          {tool.pricing}
                        </span>
                        <Button variant="outline" size="sm">
                          View Tool
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link href="/tools">
                  <Button size="lg" variant="default">
                    Browse All Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="relative py-20 bg-gradient-to-b from-muted/20 via-background to-muted/10">
          <div className="container">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <Badge variant="outline" className="mb-2">Browse by Category</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Find Tools by What You Need
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you're selling AI services or running your agency, we've got you covered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Card key={category.name} className={`hover:shadow-lg transition-shadow cursor-pointer border-l-4 ${category.bgColor}`} style={{borderLeftColor: category.color === 'bg-purple-500' ? '#a855f7' : category.color === 'bg-blue-500' ? '#3b82f6' : category.color === 'bg-orange-500' ? '#f97316' : '#22c55e'}}>
                      <CardHeader>
                        <div className="flex flex-col gap-3">
                          <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{category.name}</CardTitle>
                            <CardDescription className="text-xs">
                              {category.count} tools
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 -z-10" />
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10">
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-2xl md:text-3xl">
                    Get the AI Tools Agencies Need
                  </CardTitle>
                  <CardDescription className="text-base">
                    Every week, I send out the best AI tools for agencies. No spam. No BS. Just tools that actually work.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEmailSubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button type="submit" size="lg">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Join 500+ agencies already getting the good stuff.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

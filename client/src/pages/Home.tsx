import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search, Sparkles, Zap, Shield, TrendingUp, Award, CheckCircle2, Target, Users, Briefcase, Star, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { getTagColor } from "@/lib/tag-colors";
import { getCategoryBorderColor } from "@/lib/category-colors";

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
      gradientFrom: "from-blue-500/10",
      gradientTo: "to-blue-600/5",
      logo: "/logos/chatbase.png",
    },
    {
      name: "Jasper AI",
      category: "Content Creation",
      description: "Write client content faster than you can type. Blog posts, ads, emails — all in your client's voice.",
      pricing: "From $49/mo",
      tags: ["Content", "Marketing"],
      color: "bg-purple-500",
      gradientFrom: "from-purple-500/10",
      gradientTo: "to-purple-600/5",
      logo: "/logos/jasper.png",
    },
    {
      name: "Make.com",
      category: "Automation",
      description: "Connect anything to anything. No code required, but powerful enough to automate your entire agency workflow.",
      pricing: "Free tier available",
      tags: ["Automation", "Integration"],
      color: "bg-green-500",
      gradientFrom: "from-green-500/10",
      gradientTo: "to-green-600/5",
      logo: "/logos/make.png",
    },
  ];

  const pillars = [
    {
      icon: Users,
      title: "Attract Leads",
      line1: "Tools to help you attract your dream clients",
      line2: "Attract high-value leads on demand",
      color: "bg-blue-500",
      lightBg: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: Briefcase,
      title: "Convert Clients",
      line1: "AI assets that help you convert leads into closed deals",
      line2: "Turn prospects into paying customers faster",
      color: "bg-purple-500",
      lightBg: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: Star,
      title: "Deliver Awesome",
      line1: "Tools that deliver world-class results",
      line2: "Keep clients for years with exceptional service",
      color: "bg-orange-500",
      lightBg: "bg-orange-50 dark:bg-orange-950/20",
    },
    {
      icon: BarChart3,
      title: "Scale Revenue",
      line1: "Tools that help you scale sales operations",
      line2: "Grow revenue month on month systematically",
      color: "bg-green-500",
      lightBg: "bg-green-50 dark:bg-green-950/20",
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
        {/* Hero Section - BALANCED SPACING */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
          
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Stop Wasting Money on AI Tools That Don't Work
                </p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  The AI Stack for Agencies Who Actually Want to{" "}
                  <span className="text-primary">
                    Make Money
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  No fluff. No hype. Just the AI tools that work—tested by agencies, for agencies.
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
                100+ curated tools. Every one tested. If it's here, it works.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Badges - BALANCED SPACING */}
        <section className="py-10 border-y border-border/40 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">10+ Years Agency Experience</h3>
                <p className="text-sm text-muted-foreground">Built and sold agencies. I know what works.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">100+ Tools Tested</h3>
                <p className="text-sm text-muted-foreground">Every tool here has been battle-tested.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/30">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Zero Tolerance for BS</h3>
                <p className="text-sm text-muted-foreground">If it doesn't work, it doesn't get listed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition with Avatar - BALANCED SPACING */}
        <section className="py-14 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src="/andy-avatar-clean.png" 
                    alt="Andy Kelly" 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-primary/20 shadow-lg"
                  />
                </div>
                
                {/* Quote Content */}
                <div className="flex-1 space-y-4">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    "Here's the thing... Most AI tool directories are a mess. 10,000 tools, half of them don't work, and you waste hours trying to figure out which ones are legit."
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    "Not here."
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    "Every tool on this site has been vetted. Either I've used it, or an agency I trust has. If it's listed, it works."
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground">
                    — Andy Kelly, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section - BALANCED SPACING */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/30">
          <div className="container">
            <div className="space-y-12">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  These are the 4 core pillars of Agency AI and Why I built it.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <Card key={pillar.title} className={`${pillar.lightBg} border-t-4 hover:shadow-lg transition-shadow`} style={{borderTopColor: pillar.color === 'bg-blue-500' ? '#3b82f6' : pillar.color === 'bg-purple-500' ? '#a855f7' : pillar.color === 'bg-orange-500' ? '#f97316' : '#22c55e'}}>
                      <CardHeader className="text-center pb-4">
                        <div className={`${pillar.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {pillar.line1}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {pillar.line2}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools - BALANCED SPACING */}
        <section className="relative py-18 overflow-hidden">
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
                  <Card 
                    key={tool.name} 
                    className="hover:shadow-xl transition-all duration-300 border-l-4 relative overflow-hidden group hover:scale-[1.02]" 
                    style={{borderLeftColor: getCategoryBorderColor(tool.category)}}
                  >
                    {/* Gradient overlay for visual pop */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradientFrom} ${tool.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                    
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-xl flex items-center justify-center p-2.5 flex-shrink-0 border-2 border-border shadow-sm">
                          <img src={tool.logo} alt={`${tool.name} logo`} className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <CardDescription className="text-xs font-medium">{tool.category}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag) => {
                          const colors = getTagColor(tag);
                          return (
                            <Badge 
                              key={tag} 
                              variant="outline"
                              className={`${colors.bg} ${colors.text} ${colors.border} font-medium`}
                            >
                              {tag}
                            </Badge>
                          );
                        })}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-sm font-semibold text-foreground">
                          {tool.pricing}
                        </span>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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

        {/* Categories - BALANCED SPACING */}
        <section className="relative py-18 bg-gradient-to-b from-muted/20 via-background to-muted/10">
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

        {/* Email Capture - BALANCED SPACING */}
        <section className="relative py-18 overflow-hidden">
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
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
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

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Rocket, TrendingUp, Zap, CheckCircle2, DollarSign, Users, Target, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Stack() {
  const stacks = [
    {
      id: "starting-out",
      title: "Starting Out",
      subtitle: "Perfect for your first 10 clients",
      description: "Everything you need to launch your agency without breaking the bank. These tools will get you from 0 to $10K/month.",
      icon: Rocket,
      color: "blue",
      iconBg: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800",
      budget: "$50-200/mo",
      revenue: "$0-10K/mo",
      clients: "1-10 clients",
      highlights: [
        "Free-tier tools where possible",
        "Easy to learn and implement",
        "One-person operation ready",
        "Scales to 10 clients easily"
      ],
      tools: [
        { name: "GoHighLevel", category: "CRM", price: "$97/mo" },
        { name: "ChatBase", category: "Chatbot", price: "$19/mo" },
        { name: "Canva", category: "Design", price: "Free" },
        { name: "Google Workspace", category: "Email", price: "$6/mo" },
        { name: "Calendly", category: "Scheduling", price: "Free" }
      ],
      cta: "View Starting Stack",
      path: "/stack/starting-out"
    },
    {
      id: "growing",
      title: "Growing",
      subtitle: "Scale to $25K+ monthly revenue",
      description: "You've got clients, now it's time to systematize. These tools help you deliver consistently while growing your team.",
      icon: TrendingUp,
      color: "purple",
      iconBg: "bg-purple-50 dark:bg-purple-950/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800",
      budget: "$300-800/mo",
      revenue: "$10K-25K/mo",
      clients: "10-30 clients",
      highlights: [
        "Team collaboration tools",
        "Advanced automation",
        "Client reporting built-in",
        "White-label capabilities"
      ],
      tools: [
        { name: "GoHighLevel", category: "CRM", price: "$297/mo" },
        { name: "Instantly", category: "Cold Email", price: "$97/mo" },
        { name: "Make.com", category: "Automation", price: "$29/mo" },
        { name: "Notion", category: "Project Mgmt", price: "$10/mo" },
        { name: "Loom", category: "Video", price: "$12.50/mo" }
      ],
      cta: "View Growing Stack",
      path: "/stack/growing",
      popular: true
    },
    {
      id: "scaling",
      title: "Scaling",
      subtitle: "Built for agencies doing $50K+/mo",
      description: "Enterprise-grade tools for serious agencies. Manage 50+ clients, multiple team members, and complex workflows.",
      icon: Zap,
      color: "orange",
      iconBg: "bg-orange-50 dark:bg-orange-950/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-200 dark:border-orange-800",
      budget: "$1,200-3,000/mo",
      revenue: "$50K-200K+/mo",
      clients: "30-100+ clients",
      highlights: [
        "Unlimited team seats",
        "Advanced reporting & analytics",
        "API integrations for everything",
        "Dedicated account managers"
      ],
      tools: [
        { name: "GoHighLevel", category: "CRM", price: "$497/mo" },
        { name: "HubSpot", category: "Marketing", price: "$800/mo" },
        { name: "Smartlead", category: "Cold Email", price: "$94/mo" },
        { name: "ClickUp", category: "Project Mgmt", price: "$19/mo" },
        { name: "Semrush", category: "SEO", price: "$129/mo" }
      ],
      cta: "View Scaling Stack",
      path: "/stack/scaling"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-gray-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-white to-[#F9FAFB] dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/20 dark:text-blue-400 border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            Find Your Perfect Stack
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            The Right Tools for Your Stage
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Stop wasting money on tools you don't need yet. Here's exactly what to use based on your current revenue and client count.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm">Used by 2,000+ agencies</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm">Proven tool combinations</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm">Save $500-2K/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Stack Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {stacks.map((stack) => {
              const IconComponent = stack.icon;
              return (
                <Card
                  key={stack.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-900 border ${stack.borderColor} ${
                    stack.popular ? 'ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-gray-950' : ''
                  }`}
                  style={{ borderRadius: '32px' }}
                >
                  {stack.popular && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-purple-600 text-white border-0 shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${stack.iconBg} flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-8 h-8 ${stack.iconColor}`} />
                    </div>
                    
                    <CardTitle className="text-2xl mb-2">{stack.title}</CardTitle>
                    <CardDescription className="text-base">{stack.subtitle}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {stack.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className={`p-3 rounded-xl ${stack.iconBg}`}>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Budget</div>
                        <div className={`text-sm font-semibold ${stack.iconColor}`}>{stack.budget}</div>
                      </div>
                      <div className={`p-3 rounded-xl ${stack.iconBg}`}>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Revenue</div>
                        <div className={`text-sm font-semibold ${stack.iconColor}`}>{stack.revenue}</div>
                      </div>
                      <div className={`p-3 rounded-xl ${stack.iconBg}`}>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Clients</div>
                        <div className={`text-sm font-semibold ${stack.iconColor}`}>{stack.clients}</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {stack.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${stack.iconColor}`} />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sample Tools Preview */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
                        Includes {stack.tools.length} Essential Tools:
                      </div>
                      <div className="space-y-2">
                        {stack.tools.slice(0, 3).map((tool, index) => (
                          <div key={index} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${stack.color === 'blue' ? 'bg-blue-500' : stack.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'}`} />
                              <span className="font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
                              <span className="text-gray-400 dark:text-gray-600">·</span>
                              <span className="text-gray-500 dark:text-gray-500">{tool.category}</span>
                            </div>
                            <span className="text-gray-500 dark:text-gray-500">{tool.price}</span>
                          </div>
                        ))}
                        {stack.tools.length > 3 && (
                          <div className="text-xs text-gray-400 dark:text-gray-600 italic">
                            +{stack.tools.length - 3} more tools...
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href={stack.path}>
                      <Button 
                        className={`w-full mt-4 ${
                          stack.color === 'blue' 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : stack.color === 'purple' 
                            ? 'bg-purple-600 hover:bg-purple-700' 
                            : 'bg-orange-600 hover:bg-orange-700'
                        } text-white border-0 shadow-lg`}
                        style={{ borderRadius: '16px' }}
                      >
                        {stack.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Stack?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Take our 2-minute quiz and get a personalized tool stack recommendation based on your specific needs, budget, and goals.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl"
            style={{ borderRadius: '16px' }}
          >
            Take the Stack Quiz
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            Free • No email required • Get instant results
          </p>
        </div>
      </section>

      {/* Service-Specific Stacks Teaser */}
      <section className="py-16 px-4 bg-[#F9FAFB] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need a Specialized Stack?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We also have curated stacks for specific agency services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Lead Generation", path: "/stack/lead-generation", icon: Target, color: "green" },
              { name: "Chatbot Automation", path: "/stack/chatbot-automation", icon: Sparkles, color: "blue" },
              { name: "Social Media", path: "/stack/social-media", icon: Users, color: "purple" },
              { name: "Email Marketing", path: "/stack/email-marketing", icon: Zap, color: "orange" },
              { name: "Website Services", path: "/stack/website-clients", icon: Rocket, color: "cyan" },
              { name: "White-Label Tools", path: "/stack/white-label-tools", icon: TrendingUp, color: "pink" }
            ].map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link key={service.name} href={service.path}>
                  <Card 
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    style={{ borderRadius: '24px' }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-${service.color}-50 dark:bg-${service.color}-950/20 flex items-center justify-center flex-shrink-0`}>
                          <ServiceIcon className={`w-6 h-6 text-${service.color}-600 dark:text-${service.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{service.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-500">View specialized tools</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

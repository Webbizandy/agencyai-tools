import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Mail, Calendar, Video, Image, Code } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Helmet } from "react-helmet";

export default function Comparisons() {
  useDocumentTitle(
    "Tool Comparisons 2025: Side-by-Side Reviews | AgencyAI.tools",
    "Compare the best AI tools for agencies. Honest, detailed comparisons of automation, email, CRM, video, and more. Find which tool fits your agency."
  );

  const comparisons = [
    {
      category: "Cold Email & Outreach",
      icon: Mail,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      items: [
        {
          title: "Instantly vs Smartlead",
          description: "Unlimited accounts vs unified inbox for cold email",
          href: "/compare/instantly-vs-smartlead"
        },
        {
          title: "Lemlist vs Instantly",
          description: "Personalization vs volume for cold outreach",
          href: "/compare/lemlist-vs-instantly"
        },
        {
          title: "Reply.io vs Instantly",
          description: "Multi-channel sequences vs email-only platform",
          href: "/compare/replyio-vs-instantly"
        }
      ]
    },
    {
      category: "CRM & Marketing Platforms",
      icon: Zap,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      items: [
        {
          title: "GoHighLevel vs HubSpot",
          description: "White-label agency platform vs enterprise CRM",
          href: "/compare/gohighlevel-vs-hubspot"
        },
        {
          title: "GoHighLevel vs ClickFunnels",
          description: "All-in-one agency tool vs funnel builder",
          href: "/compare/gohighlevel-vs-clickfunnels"
        }
      ]
    },
    {
      category: "Email Marketing",
      icon: Mail,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      items: [
        {
          title: "ActiveCampaign vs ConvertKit",
          description: "Advanced automation vs creator-friendly simplicity",
          href: "/compare/activecampaign-vs-convertkit"
        },
        {
          title: "Mailchimp vs ActiveCampaign",
          description: "Free tier vs advanced automation for agencies",
          href: "/compare/mailchimp-vs-activecampaign"
        }
      ]
    },
    {
      category: "Lead Generation",
      icon: ArrowRight,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      items: [
        {
          title: "Apollo.io vs Hunter.io",
          description: "Full sales pipeline vs simple email finding",
          href: "/compare/apollo-vs-hunter"
        }
      ]
    },
    {
      category: "AI Writing & Content",
      icon: Code,
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      items: [
        {
          title: "Jasper vs ChatGPT",
          description: "Brand voice training vs free AI writing",
          href: "/compare/jasper-vs-chatgpt"
        },
        {
          title: "Jasper vs Copy.ai",
          description: "Long-form content vs quick ad copy",
          href: "/compare/jasper-vs-copyai"
        }
      ]
    },
    {
      category: "Scheduling & Booking",
      icon: Calendar,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      items: [
        {
          title: "Calendly vs Acuity Scheduling",
          description: "Free simplicity vs payment collection",
          href: "/compare/calendly-vs-acuity"
        }
      ]
    },
    {
      category: "Automation & Workflows",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      items: [
        {
          title: "Make vs Zapier",
          description: "Visual automation vs simple zaps",
          href: "/compare/make-vs-zapier"
        },
        {
          title: "Make vs n8n",
          description: "Cloud automation vs self-hosted open-source",
          href: "/compare/make-vs-n8n"
        }
      ]
    },
    {
      category: "Video Creation & Editing",
      icon: Video,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      items: [
        {
          title: "Synthesia vs Descript",
          description: "AI avatar videos vs transcription-based editing",
          href: "/compare/synthesia-vs-descript"
        }
      ]
    },
    {
      category: "AI Image Generation",
      icon: Image,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      items: [
        {
          title: "Midjourney vs DALL-E",
          description: "Artistic style vs photorealistic images",
          href: "/compare/midjourney-vs-dalle"
        }
      ]
    }
  ];

  return (
    <div
      <Helmet>
        <link rel="canonical" href="https://agencyai.tools/comparisons" />
      </Helmet>
 className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="mb-4">
                <Zap className="h-3 w-3 mr-1 inline" />
                Tool Comparisons 2025
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Tool Showdowns: Side-by-Side Comparisons
              </h1>
              <p className="text-xl text-muted-foreground">
                Honest, detailed comparisons of the best AI tools for agencies. No fluff, just the features, pricing, and real-world recommendations you need to make the right choice.
              </p>
            </div>
          </div>
        </section>

        {/* Comparisons Grid */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="space-y-12">
              {comparisons.map((category) => (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                    <Badge variant="outline">{category.items.length}</Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <Card className="h-full hover:border-primary/50 transition-all cursor-pointer group">
                          <CardHeader>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center justify-between">
                              {item.title}
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Can't Find the Comparison You Need?</h2>
              <p className="text-lg text-muted-foreground">
                We're constantly adding new tool comparisons. Check back soon or browse our full tool directory.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/tools">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                    Browse All Tools
                  </button>
                </Link>
                <Link href="/top-10">
                  <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
                    See Top 10 Tools
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

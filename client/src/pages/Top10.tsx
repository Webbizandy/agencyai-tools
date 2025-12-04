import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, Star, ChevronRight } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Link } from "wouter";
import { getCategoryBorderColor } from "@/lib/category-colors";

const top10Tools = [
  {
    rank: 1,
    name: "GoHighLevel",
    slug: "gohighlevel",
    category: "All-in-One Platform",
    tagline: "The Swiss Army Knife for Agencies",
    description: "If you're still cobbling together 10 different tools for CRM, email, funnels, calendars, and automation, you're wasting time and money. GoHighLevel is everything you need to run client campaigns in one platform, and you can white-label it.",
    pricing: "From $97/month (unlimited clients)",
    commission: "40% recurring",
    features: [
      "CRM, email marketing, SMS, funnels, websites, calendars in one platform",
      "White-label option - charge clients $297/month while paying $97",
      "Unlimited sub-accounts for clients",
      "Built-in automation workflows",
      "Two-way SMS and calling",
      "Reputation management"
    ],
    whyItWorks: "Service businesses (HVAC, contractors, dentists) need the full stack. This gives it to them without managing 15 different subscriptions. The white-label option means you can build a SaaS business inside your agency.",
    bestFor: "Agencies selling to service businesses who need CRM + marketing automation + client communication",
    borderColor: "#8B5CF6"
  },
  {
    rank: 2,
    name: "ChatBase",
    slug: "chatbase",
    category: "AI Chatbots",
    tagline: "Turn Your Docs into a 24/7 Support Team",
    description: "Upload your docs, train a chatbot in 5 minutes, and your clients get instant answers. No coding required, which is good because most of us aren't developers. This is the easiest way to add AI to a service business.",
    pricing: "From $19/month",
    commission: "30% recurring",
    features: [
      "Upload documents, PDFs, websites to train chatbot",
      "Embed on any website with one line of code",
      "Customizable branding and responses",
      "Lead capture built-in",
      "Multi-language support",
      "Analytics and conversation logs"
    ],
    whyItWorks: "Every service business loses leads outside business hours. This solves that problem immediately. Easy to demo, easy to sell, easy to implement.",
    bestFor: "Any agency client who gets repetitive questions or loses leads after hours",
    borderColor: "#3B82F6"
  },
  {
    rank: 3,
    name: "Jasper AI",
    slug: "jasper",
    category: "Content Creation",
    tagline: "AI Writing That Doesn't Sound Like a Robot",
    description: "Most AI writing tools suck. They sound like a robot trying to pass a Turing test. Jasper's different - it actually understands brand voice, which matters when you're writing for clients who care about how they sound.",
    pricing: "From $49/month",
    commission: "30% first year",
    features: [
      "Brand voice training for consistent tone",
      "Boss Mode for long-form content",
      "50+ templates for ads, emails, blog posts",
      "SEO mode for optimized content",
      "Plagiarism checker built-in",
      "Team collaboration features"
    ],
    whyItWorks: "You can scale content production without hiring a team of writers or sacrificing quality. The brand voice feature means it actually sounds like your client, not generic AI.",
    bestFor: "Agencies selling content marketing, social media management, or email campaigns",
    borderColor: "#A855F7"
  },
  {
    rank: 4,
    name: "Make.com",
    slug: "make",
    category: "Automation",
    tagline: "Automation That Actually Works",
    description: "Zapier's great until you need something more complex than 'when this happens, do that.' Make gives you visual automation that can handle the messy, multi-step workflows agencies actually need.",
    pricing: "Free plan available, paid from $9/month",
    commission: "20% recurring",
    features: [
      "Visual workflow builder",
      "1000+ app integrations",
      "Advanced logic and branching",
      "Error handling and debugging",
      "Unlimited scenarios on paid plans",
      "HTTP/API requests for custom integrations"
    ],
    whyItWorks: "You can build custom solutions for clients without hiring developers or spending months on implementation. I've sold $10K+ automation projects built entirely in Make.",
    bestFor: "Agencies that want to offer automation services or automate their own operations",
    borderColor: "#22C55E"
  },
  {
    rank: 5,
    name: "Listkit.io",
    slug: "listkit",
    category: "Lead Generation",
    tagline: "Build Targeted Lead Lists Fast",
    description: "Most lead gen tools give you garbage data. Listkit doesn't. It pulls from multiple verified sources and gives you clean, accurate contact info - emails, phone numbers, company details, everything you need to start outreach immediately.",
    pricing: "From $49/month",
    commission: "25% recurring",
    features: [
      "Verified email addresses",
      "Direct dial phone numbers",
      "Company firmographics",
      "Technology tracking",
      "Intent data",
      "CRM integration"
    ],
    whyItWorks: "The data is actually verified - you're not wasting time on bounced emails or disconnected numbers. Plus, the interface is dead simple. Search, filter, export. No learning curve.",
    bestFor: "Agencies doing cold outreach or building prospect lists for clients",
    borderColor: "#3B82F6"
  },
  {
    rank: 6,
    name: "Instantly.ai",
    slug: "instantly",
    category: "Email Outreach",
    tagline: "Scale Cold Email Without Getting Blacklisted",
    description: "Sending cold email at scale is tricky. Do it wrong and you'll tank your deliverability. Instantly handles the technical stuff (domain rotation, warmup, spam testing) so you can focus on writing good emails.",
    pricing: "From $37/month",
    commission: "30% recurring",
    features: [
      "Unlimited email accounts",
      "Built-in email warmup",
      "Automated domain rotation",
      "Spam testing and deliverability monitoring",
      "A/B testing for sequences",
      "Lead finder with 160M+ contacts"
    ],
    whyItWorks: "Most agencies kill their deliverability by sending too much from one domain. Instantly solves this with automatic rotation and warmup. You can scale without worrying about landing in spam.",
    bestFor: "Agencies running cold email campaigns for themselves or clients",
    borderColor: "#EF4444"
  },
  {
    rank: 7,
    name: "SmartLead",
    slug: "smartlead",
    category: "Email Outreach",
    tagline: "The Smarter Way to Do Cold Email",
    description: "Another cold email tool, but with better deliverability features and unlimited warmup. If you're serious about cold outreach, you need either Instantly or SmartLead. I use both depending on the campaign.",
    pricing: "From $39/month",
    commission: "30% recurring",
    features: [
      "Unlimited email warmup",
      "Master inbox for all replies",
      "Spintax and personalization",
      "Deliverability optimization",
      "Multi-channel sequences (email + LinkedIn)",
      "Team collaboration"
    ],
    whyItWorks: "The master inbox is a game-changer - all replies from all email accounts in one place. Makes managing campaigns way easier when you're running multiple sequences.",
    bestFor: "Agencies doing high-volume cold outreach who need better inbox management",
    borderColor: "#06B6D4"
  },
  {
    rank: 8,
    name: "Clay",
    slug: "clay",
    category: "Data Enrichment",
    tagline: "Find Anyone's Email (And Everything Else)",
    description: "Need to find someone's email? Their company's tech stack? Their recent funding? Clay pulls data from 50+ sources and enriches your leads with everything you need to personalize outreach.",
    pricing: "From $149/month",
    commission: "20% recurring",
    features: [
      "50+ data enrichment sources",
      "Waterfall enrichment (try multiple sources)",
      "AI-powered personalization",
      "Spreadsheet-like interface",
      "CRM integration",
      "Custom workflows"
    ],
    whyItWorks: "Personalization is what makes cold outreach work. Clay gives you the data to personalize at scale. Instead of generic 'Hey {{firstName}}' emails, you can reference their tech stack, recent hires, or funding rounds.",
    bestFor: "Agencies doing personalized outreach at scale or selling to enterprise clients",
    borderColor: "#8B5CF6"
  },
  {
    rank: 9,
    name: "Synthesia",
    slug: "synthesia",
    category: "Video Creation",
    tagline: "Create Professional Videos Without a Camera",
    description: "Need a video for a client but don't want to hire a videographer or be on camera yourself? Synthesia creates AI videos with realistic avatars. Type your script, pick an avatar, and you've got a professional video in minutes.",
    pricing: "From $29/month",
    commission: "20% recurring",
    features: [
      "140+ AI avatars",
      "120+ languages and voices",
      "Custom avatar creation",
      "Screen recording",
      "Video templates",
      "Brand kit for consistent styling"
    ],
    whyItWorks: "Video content converts better than text, but creating videos is expensive and time-consuming. Synthesia makes it fast and cheap. Great for client onboarding videos, product demos, or social content.",
    bestFor: "Agencies creating video content for clients without video production resources",
    borderColor: "#EC4899"
  },
  {
    rank: 10,
    name: "Descript",
    slug: "descript",
    category: "Video Editing",
    tagline: "Edit Video Like a Word Doc",
    description: "Video editing is usually a pain. Descript makes it simple - edit your video by editing the transcript. Delete a word, and it deletes that part of the video. Add text, and it generates AI voiceover. It's magic.",
    pricing: "Free plan available, paid from $12/month",
    commission: "25% first year",
    features: [
      "Text-based video editing",
      "AI voice cloning",
      "Remove filler words automatically",
      "Screen recording",
      "Multi-track editing",
      "Automatic transcription"
    ],
    whyItWorks: "You don't need to be a video editor to create professional videos. Edit by editing text, remove 'ums' and 'ahs' with one click, and use AI voices for voiceovers. Makes video content accessible to non-editors.",
    bestFor: "Agencies creating video content, podcasts, or webinars without dedicated video editors",
    borderColor: "#10B981"
  }
];

export default function Top10() {
  useDocumentTitle(
    "Top 10 AI Tools for Agencies 2025 | AgencyAI.tools",
    "The best AI tools for agencies, tested and ranked. From all-in-one platforms to specialized tools, here's what actually works."
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="mb-4">
                <Star className="h-3 w-3 mr-1 inline" />
                Top Picks 2025
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Top 10 AI Tools for Agencies
              </h1>
              <p className="text-xl text-muted-foreground">
                After testing 100+ tools and spending $50K+ on subscriptions, here are the 10 that actually matter. Ranked by ROI, ease of use, and how much money they'll make you.
              </p>
            </div>
          </div>
        </section>

        {/* Tools List */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="space-y-12">
              {top10Tools.map((tool) => (
                <Card key={tool.rank} className="overflow-hidden border-l-2" style={{borderLeftColor: getCategoryBorderColor(tool.category)}}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
                            #{tool.rank}
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{tool.name}</CardTitle>
                            <Badge variant="secondary" className="mt-1">{tool.category}</Badge>
                          </div>
                        </div>
                        <CardDescription className="text-lg font-semibold text-foreground mt-2">
                          {tool.tagline}
                        </CardDescription>
                      </div>
                      <Button asChild size="lg" variant="outline">
                        <Link href={`/tool/${tool.slug}`}>
                          View Tool Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-base leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Why It Works:</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tool.whyItWorks}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Best For:</h4>
                          <p className="text-sm text-muted-foreground">
                            {tool.bestFor}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      {tool.slug === 'gohighlevel' && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Compare:</span>
                          <Link href="/compare/gohighlevel-vs-clickfunnels">
                            <span className="text-primary hover:underline cursor-pointer">GoHighLevel vs ClickFunnels</span>
                          </Link>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Pricing: <span className="text-muted-foreground font-normal">{tool.pricing}</span></p>
                        </div>
                        <Button asChild>
                          <a href={`/rec/${tool.slug}`} target="_blank" rel="noopener noreferrer">
                            Try {tool.name}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">
                Want More Tool Recommendations?
              </h2>
              <p className="text-lg text-muted-foreground">
                Every week, I test new AI tools and share what's working (and what's not) with 500+ agencies. Get the good stuff first.
              </p>
              <Button size="lg" asChild>
                <a href="/#subscribe">
                  Get Weekly AI Tool Updates
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

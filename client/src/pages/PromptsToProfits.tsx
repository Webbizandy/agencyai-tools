import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Download, Sparkles } from "lucide-react";

import { toast } from "sonner";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function PromptsToProfits() {
  useDocumentTitle(
    "Prompts to Profits - Free Guide | AgencyAI.tools",
    "Learn the P.A.I.D Method™ for building Custom GPTs that solve expensive business problems. Launch a cash-generating AI system in 30 days."
  );

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Please enter your name and email");
      return;
    }
    
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
          fields: { first_name: name },
          tags: ['Prompts to Profits']
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Check your email for the download link!");
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast.error("Failed to send download link. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="container max-w-2xl text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold">You're In!</h1>
            <p className="text-xl text-muted-foreground">
              Click the button below to download your "Prompts to Profits" guide right now.
            </p>
            <Button size="lg" asChild>
              <a href="/prompts-to-profits.pdf" download="Prompts-to-Profits-Guide.pdf">
                <Download className="h-4 w-4 mr-2" />
                Download Your Guide
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              (I've also added you to my weekly AI tools newsletter. You can unsubscribe anytime.)
            </p>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Back to Home
            </Button>
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
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container max-w-5xl">
            <div className="text-center space-y-6 mb-12">
              <Badge className="mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                Free Download
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Prompts to Profits
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How to launch a cash-generating AI system in 30 days — without code, complexity, or being an AI expert. The P.A.I.D Method™ for building Custom GPTs that solve expensive business problems.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: What You Get */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What You're Getting:</h2>
                  <div className="space-y-4">
                    {[
                      "The P.A.I.D Method™ for monetizing AI (Position, Attract, Implement, Diversify)",
                      "How to find expensive problems businesses will pay $3K-$5K+ to solve",
                      "The M.A.P.S. framework for building Custom GPTs in an afternoon",
                      "Two major markets you can target: Local service businesses & expert market",
                      "Real case studies: How Jace sold out in a week, how James built AI implementation partners",
                      "The shift nobody sees: Why implementation beats information",
                      "How to replicate and scale into partnerships and licensing deals"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="bg-muted/50 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground italic">
                      "This isn't about prompts or AI theory. It's about finding problems that cost businesses money, building simple Custom GPTs that solve them, and getting paid. The business side of AI that actually makes money."
                    </p>
                    <p className="text-sm font-medium mt-2">— Andy Kelly</p>
                  </CardContent>
                </Card>
              </div>

              {/* Right: Opt-in Form */}
              <div>
                <Card className="border-2 border-primary/20 shadow-lg">
                  <CardContent className="pt-8 pb-8 space-y-6">
                    <div className="text-center space-y-2">
                      <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Get Instant Access</h3>
                      <p className="text-muted-foreground">
                        Enter your details and I'll send you the guide right now.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Me The Guide"}
                      </Button>
                    </form>

                    <p className="text-xs text-center text-muted-foreground">
                      No spam. No BS. Just the guide and weekly AI tool updates. Unsubscribe anytime.
                    </p>
                  </CardContent>
                </Card>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-center text-muted-foreground">
                    <strong>Join 500+ agencies</strong> building profitable AI businesses with the P.A.I.D Method™
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works Section */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why This Actually Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold">No Code Required</h3>
                <p className="text-sm text-muted-foreground">
                  You don't need technical skills or AI expertise. Build a Custom GPT in an afternoon that solves a specific problem and charge $3K to $5K+ for it.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold">Build Once, Sell Multiple Times</h3>
                <p className="text-sm text-muted-foreground">
                  Create one solution, then replicate it across other businesses with the same problem. Monthly recurring revenue instead of one-time consulting fees.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold">Implementation Beats Information</h3>
                <p className="text-sm text-muted-foreground">
                  Information is worthless. Implementation is what's valuable. Getting it DONE, applying it to THEIR specific situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="container max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Build Your AI Business?</h2>
            <p className="text-xl text-muted-foreground">
              Download "Prompts to Profits" now and learn the P.A.I.D Method™ for monetizing AI.
            </p>
            <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Get The Free Guide
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

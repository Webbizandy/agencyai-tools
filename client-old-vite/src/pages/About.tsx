import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Hero */}
            <div className="space-y-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Why I Built This
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                After 15+ years helping agencies and consultants win high-value clients, I got sick of watching them waste time on tools that don't work.
              </p>
            </div>

            {/* The Problem */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Here's the thing... Most AI tool directories are a mess.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                10,000 tools listed, half of them don't work, and you waste hours trying to figure out which ones are legit. Then you buy one, spend a week trying to set it up, and realize it doesn't do what the sales page promised.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                I've been there. Built marketing software for agencies since 2009, trained thousands of consultants and coaches through Local Marketing University, and watched too many good people get burned by shiny tools that fall apart when you actually try to use them.
              </p>
            </div>

            {/* The Solution */}
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-foreground mb-4">What Makes This Different</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    Every tool on this site has been vetted. Either I've used it in my own business (ClientFlow Method, SocialOxygen, Local Oxygen), or an agency I trust has. If it's listed here, it works.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mt-4">
                    No affiliate spam. No tools added just because they paid for a listing. Just the stuff that actually helps agencies attract clients, deliver better results, and run their business without burning out.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Who This Is For */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-4">Who This Is For</h2>
              <p className="text-lg text-foreground leading-relaxed">
                If you're a consultant, coach, or agency owner who's tired of the income roller coaster and wants predictable high-value clients every month, you're in the right place.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                I work with people who are done working IN their business and ready to work ON it. People who want smart automation and systems to do the heavy lifting so they can focus on growth without overwhelm or frustration.
              </p>
            </div>

            {/* Background */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">My Background</h2>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  I've been in the trenches since 2009. Started Local Marketing University to train consultants on client acquisition. Built Local Oxygen (marketing automation software for agencies). Co-founded SocialOxygen (social media management platform). Created the ClientFlow Method™ — a proven system that helps consultants and coaches generate high-value clients on demand without spending a fortune on ads.
                </p>
                <p className="leading-relaxed">
                  Learned through the highs and lows of building multiple software companies and coaching thousands of agency owners. I know what works because I've done it myself, not just read about it in a case study.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-6 pt-8">
              <h2 className="text-3xl font-bold text-foreground">Want to Connect?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you have questions about any of these tools or want to share what's working for your agency, hit me up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:andy@clientflowmethod.com"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  andy@clientflowmethod.com
                </a>
                <span className="text-muted-foreground hidden sm:inline">•</span>
                <a 
                  href="https://www.linkedin.com/in/andykelly64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

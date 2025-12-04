import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function ApolloVsHunter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero */}
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Badge>Lead Generation</Badge>
                <Badge variant="outline">Comparison</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Apollo.io vs Hunter.io: Which One Actually Finds You Clients?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both find emails. Both claim to be the best. But which one should you actually use?
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                Here's the thing about lead generation tools... Most of them promise the world and deliver a spreadsheet full of dead emails.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                I've burned through thousands of dollars testing these platforms. Apollo and Hunter are two of the few that actually work, but they're built for completely different use cases.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Pick the wrong one and you'll either overpay for features you don't need, or underpay and miss the tools that actually close deals.
              </p>
            </div>

            {/* Quick Comparison Table */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">The Quick Answer</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Feature</th>
                        <th className="text-left py-3 px-4 font-semibold">Apollo.io</th>
                        <th className="text-left py-3 px-4 font-semibold">Hunter.io</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Full sales pipeline</td>
                        <td className="py-3 px-4">Just email finding</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Database Size</td>
                        <td className="py-3 px-4">275M+ contacts</td>
                        <td className="py-3 px-4">100M+ emails</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Outreach Sequences</td>
                        <td className="py-3 px-4">✅ Yes</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">CRM Integration</td>
                        <td className="py-3 px-4">✅ Yes</td>
                        <td className="py-3 px-4">Limited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$49/mo</td>
                        <td className="py-3 px-4">$49/mo</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Winner</td>
                        <td className="py-3 px-4">Agencies doing outbound</td>
                        <td className="py-3 px-4">Solo users finding emails</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Deep Dive */}
            <div className="prose prose-lg max-w-none space-y-8">
              <h2 className="text-3xl font-bold text-foreground">What Each Tool Actually Does</h2>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-3">Apollo.io: The All-in-One</h3>
                <p className="text-foreground leading-relaxed">
                  Apollo is a full sales engagement platform. You can find contacts, verify emails, launch outreach sequences, track opens and clicks, and manage your entire pipeline — all in one place.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  Think of it as your CRM, email finder, and outreach tool combined. If you're doing serious outbound (50+ prospects a week), this is built for you.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-3">Hunter.io: The Email Specialist</h3>
                <p className="text-foreground leading-relaxed">
                  Hunter does one thing really well — finds emails. Type in a company domain, and it shows you every email associated with that company, plus the format they use.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  That's it. No sequences, no CRM, no pipeline management. Just email finding and verification. If that's all you need, it's perfect.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12">When to Use Apollo</h2>
              <p className="text-foreground leading-relaxed">
                You should use Apollo if you're running a real outbound operation. Here's what I mean by that...
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                You're prospecting 100+ companies a month. You need to send automated follow-up sequences. You want to track who opened your emails and when. You're managing a pipeline of deals and need to see where everything stands.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Apollo handles all of that. The database is massive (275 million contacts), the email accuracy is solid (90%+ deliverability in my experience), and the sequences let you automate follow-ups without sounding like a robot.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The downside? It's complex. There's a learning curve, and the credits run out fast if you're not careful. But if you're serious about outbound, it's worth the investment.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">When to Use Hunter</h2>
              <p className="text-foreground leading-relaxed">
                Hunter is for when you just need to find someone's email and move on with your life.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Maybe you're doing manual outreach. Maybe you're only prospecting 10-20 companies a month. Maybe you already have an outreach tool and just need email finding.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Hunter is cheaper, simpler, and faster for that use case. The Chrome extension is clutch — you can find emails while browsing LinkedIn or company websites without switching tools.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The free tier gives you 25 searches a month, which is enough to test it. Paid plans start at $49/month for 500 searches — way cheaper than Apollo if you're not using the extra features.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">The Real Difference</h2>
              <p className="text-foreground leading-relaxed">
                Apollo is a platform. Hunter is a tool.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                If you're building a sales machine — prospecting, outreach, follow-ups, pipeline management — you need Apollo. It's the foundation of your outbound engine.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                If you just need to find emails quickly and cheaply, Hunter does the job without the bloat.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">My Recommendation</h2>
              <p className="text-foreground leading-relaxed">
                Start with Hunter if you're testing outbound or doing low-volume prospecting (under 50 prospects a month). It's cheap, simple, and you can always upgrade later.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Switch to Apollo when you're ready to scale. Once you're prospecting 100+ companies a month and need automation, Apollo pays for itself in time saved.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Or do what I do — use both. Hunter for quick email lookups, Apollo for full campaigns. They play well together.
              </p>
            </div>

            {/* CTAs */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Apollo.io</h3>
                  <p className="text-muted-foreground mb-4">
                    Full sales engagement platform for serious outbound
                  </p>
                  <div className="space-y-2">
                    <Link href="/tool/apollo">
                      <Button variant="default" className="w-full">
                        View Full Review
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://apollo.io" target="_blank" rel="noopener noreferrer">
                        Try Apollo →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Hunter.io</h3>
                  <p className="text-muted-foreground mb-4">
                    Simple email finding for manual outreach
                  </p>
                  <div className="space-y-2">
                    <Link href="/tool/hunter">
                      <Button variant="default" className="w-full">
                        View Full Review
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://hunter.io" target="_blank" rel="noopener noreferrer">
                        Try Hunter →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

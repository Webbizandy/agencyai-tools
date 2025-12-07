import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function InstantlyVsSmartlead() {
  useDocumentTitle(
    "Instantly vs Smartlead 2025: Which Cold Email Tool for Agencies? | AgencyAI.tools",
    "Instantly vs Smartlead comparison for agencies. Pricing, deliverability, features, and which cold email platform actually gets replies in 2025."
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero */}
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Badge>Cold Email</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Instantly vs Smartlead: Which Cold Email Tool Doesn't Tank Your Deliverability?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both promise unlimited sending and high deliverability. One has better warmup, the other has better inbox management. Here's which one you actually need in 2025.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I run cold email campaigns for clients every single day. Both tools get emails delivered, but they handle scale completely differently.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Here's what nobody tells you... Instantly is faster to set up and easier for agencies running multiple campaigns. Smartlead has better unified inbox and costs less at high volume.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Pick the wrong one and you'll either overpay by $200+/month, or spend hours managing replies across disconnected inboxes.
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
                        <th className="text-left py-3 px-4 font-semibold">Instantly</th>
                        <th className="text-left py-3 px-4 font-semibold">Smartlead</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Agencies, multiple campaigns</td>
                        <td className="py-3 px-4">High volume, unified inbox</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Unlimited Email Accounts</td>
                        <td className="py-3 px-4">✅ Yes</td>
                        <td className="py-3 px-4">✅ Yes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$37/mo</td>
                        <td className="py-3 px-4">$39/mo</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Warmup Included</td>
                        <td className="py-3 px-4">✅ Yes</td>
                        <td className="py-3 px-4">✅ Unlimited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Master Inbox</td>
                        <td className="py-3 px-4">Basic</td>
                        <td className="py-3 px-4">✅ Advanced</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Lead Database</td>
                        <td className="py-3 px-4">✅ 160M+ contacts</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Setup Speed</td>
                        <td className="py-3 px-4">⚡ Faster</td>
                        <td className="py-3 px-4">Moderate</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Winner</td>
                        <td className="py-3 px-4">Quick setup & lead gen</td>
                        <td className="py-3 px-4">Reply management & scale</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Comparison */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Deep Dive: What Each Tool Actually Does</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Instantly */}
                <Card className="border-2 border-blue-200">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-8 w-8 text-blue-600" />
                      <h3 className="text-2xl font-bold">Instantly</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Built for agencies running multiple client campaigns. Faster setup, built-in lead finder with 160M contacts, and simpler campaign management.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>160M+ contact database included (save $99/mo on Hunter/Apollo)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Faster campaign setup - live in 15 minutes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Better for agencies with multiple clients</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Spam checker and deliverability testing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Weaknesses:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Master inbox less polished than Smartlead</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>No LinkedIn automation (email only)</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full">
                      <a href="/rec/instantly" target="_blank" rel="noopener noreferrer">
                        Try Instantly Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Smartlead */}
                <Card className="border-2 border-purple-200">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-8 w-8 text-purple-600" />
                      <h3 className="text-2xl font-bold">Smartlead</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Built for high-volume cold email with unlimited warmup and a powerful master inbox. Better for managing massive reply volume.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Master inbox consolidates all replies - huge time saver</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Unlimited email warmup on all plans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Multi-channel sequences (email + LinkedIn)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Better for high-volume senders (50K+ emails/month)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Weaknesses:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>No built-in lead database (need Hunter/Apollo)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Steeper learning curve for setup</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <a href="/rec/smartlead" target="_blank" rel="noopener noreferrer">
                        Try Smartlead Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Pricing: Which One Costs Less at Scale?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Instantly Pricing</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Growth: $37/mo</p>
                        <p className="text-sm text-muted-foreground">Unlimited email accounts, 5K leads/mo</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Hypergrowth: $97/mo</p>
                        <p className="text-sm text-muted-foreground">Unlimited everything + 25K leads/mo</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Light Speed: $358/mo</p>
                        <p className="text-sm text-muted-foreground">100K leads/mo + priority support</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Smartlead Pricing</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Basic: $39/mo</p>
                        <p className="text-sm text-muted-foreground">6K emails/mo, unlimited warmup</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Pro: $94/mo</p>
                        <p className="text-sm text-muted-foreground">150K emails/mo + master inbox</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Custom: $174+/mo</p>
                        <p className="text-sm text-muted-foreground">500K+ emails/mo + white label</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground italic">
                💡 Real Talk: Instantly costs less upfront ($37 vs $39), but Smartlead is cheaper at high volume (50K+ emails/month). Factor in Instantly's lead database saves you $99/mo on Apollo.
              </p>
            </div>

            {/* Andy's Take */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-bold">Andy's Take: Which One Should You Actually Use?</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Use Instantly if:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You're an agency running campaigns for multiple clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You need leads and don't want to pay separately for Apollo/Hunter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You want the fastest setup - campaign live in 15 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You're sending under 50K emails per month</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Use Smartlead if:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You're sending 50K+ emails per month (better price per email)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You need a unified master inbox to manage all replies in one place</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You want LinkedIn + email sequences (multi-channel)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You already have a lead source (Apollo, Hunter, etc.)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <p className="font-semibold mb-2">My Setup (December 2025):</p>
                  <p className="text-sm text-muted-foreground">
                    I use <strong>Instantly</strong> for agency client campaigns because the built-in lead finder is a massive time saver, and most clients send under 20K/month. I switched two high-volume clients to <strong>Smartlead</strong> because they were sending 100K+/month and the master inbox made reply management actually manageable.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <div className="text-center space-y-6 py-8">
              <h2 className="text-3xl font-bold">Ready to Scale Your Cold Email?</h2>
              <p className="text-xl text-muted-foreground">
                Start with the tool that matches your volume and workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/rec/instantly" target="_blank" rel="noopener noreferrer">
                    Try Instantly Free
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/rec/smartlead" target="_blank" rel="noopener noreferrer">
                    Try Smartlead Free
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Both offer free trials. Test deliverability with your own domains before committing.
              </p>
            </div>

            {/* Related Comparisons */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Related Comparisons:</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/compare/lemlist-vs-instantly">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Lemlist vs Instantly
                  </Badge>
                </Link>
                <Link href="/compare/instantly-vs-reply">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Instantly vs Reply.io
                  </Badge>
                </Link>
                <Link href="/tool/instantly">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Full Instantly Review
                  </Badge>
                </Link>
                <Link href="/tool/smartlead">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Full Smartlead Review
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

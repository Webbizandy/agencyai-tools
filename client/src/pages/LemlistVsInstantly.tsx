import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function LemlistVsInstantly() {
  useDocumentTitle(
    "Lemlist vs Instantly 2025: Which Cold Email Platform for Agencies? | AgencyAI.tools",
    "Lemlist vs Instantly comparison for agencies. Personalization vs volume, pricing, features, and which cold email tool gets better results in 2025."
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
                Lemlist vs Instantly: Personalization or Volume?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both send cold emails. One focuses on hyper-personalization with video and images. The other focuses on massive volume with unlimited accounts. Here's which one actually gets you more replies in 2025.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I've tested both platforms with thousands of cold emails. The difference isn't features—it's philosophy.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Here's what nobody tells you... Lemlist is built for creative, highly personalized campaigns (think custom videos and dynamic images). Instantly is built for volume and agencies running multiple campaigns simultaneously.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Pick the wrong one and you'll either spend hours personalizing emails that don't scale, or send bland volume emails that get ignored.
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
                        <th className="text-left py-3 px-4 font-semibold">Lemlist</th>
                        <th className="text-left py-3 px-4 font-semibold">Instantly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Personalized, creative campaigns</td>
                        <td className="py-3 px-4">Volume, multiple campaigns</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Video Personalization</td>
                        <td className="py-3 px-4">✅ Built-in (loom-style)</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Dynamic Images</td>
                        <td className="py-3 px-4">✅ Yes (screenshots, custom)</td>
                        <td className="py-3 px-4">❌ No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Lead Database</td>
                        <td className="py-3 px-4">✅ 450M+ contacts</td>
                        <td className="py-3 px-4">✅ 160M+ contacts</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">$59/mo</td>
                        <td className="py-3 px-4">$37/mo</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Unlimited Email Accounts</td>
                        <td className="py-3 px-4">❌ Limited by plan</td>
                        <td className="py-3 px-4">✅ Yes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">LinkedIn Automation</td>
                        <td className="py-3 px-4">✅ Yes (lemwarm)</td>
                        <td className="py-3 px-4">❌ Email only</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Winner</td>
                        <td className="py-3 px-4">Personalization & creativity</td>
                        <td className="py-3 px-4">Volume & simplicity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Comparison */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Deep Dive: What Each Platform Does Best</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Lemlist */}
                <Card className="border-2 border-orange-200">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-8 w-8 text-orange-600" />
                      <h3 className="text-2xl font-bold">Lemlist</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Built for creative, highly personalized cold outreach. Record custom videos, generate dynamic images, and stand out in crowded inboxes with campaigns that feel 1-to-1.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Video personalization - record once, personalize at scale</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Dynamic images (screenshots of prospect's site, custom graphics)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>LinkedIn automation included (send + visit profiles)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>450M+ contact database (larger than Instantly)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Better for high-ticket offers ($5K+) where personalization matters</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Weaknesses:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>More expensive ($59/mo vs $37/mo)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Email accounts limited by plan (not unlimited)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Slower to set up (personalization takes time)</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full">
                      <a href="/rec/lemlist" target="_blank" rel="noopener noreferrer">
                        Try Lemlist Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Instantly */}
                <Card className="border-2 border-blue-200">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-8 w-8 text-blue-600" />
                      <h3 className="text-2xl font-bold">Instantly</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Built for agencies and high-volume senders. Unlimited email accounts, fast setup, and built-in lead finder. Focus on volume and deliverability over creative personalization.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Unlimited email accounts on all plans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Faster setup - campaign live in 15 minutes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>160M+ lead database included (save $99/mo)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Better for agencies managing multiple clients</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Lower price point ($37/mo entry)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Weaknesses:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>No video or image personalization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>No LinkedIn automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Less creative - focused on volume over personalization</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <a href="/rec/instantly" target="_blank" rel="noopener noreferrer">
                        Try Instantly Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Pricing: What Do You Actually Pay?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Lemlist Pricing</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Email Starter: $59/mo</p>
                        <p className="text-sm text-muted-foreground">5 email accounts, unlimited campaigns</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Email Pro: $99/mo</p>
                        <p className="text-sm text-muted-foreground">15 email accounts + API access</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Multichannel Expert: $159/mo</p>
                        <p className="text-sm text-muted-foreground">Email + LinkedIn + Phone + API</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Instantly Pricing</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Growth: $37/mo</p>
                        <p className="text-sm text-muted-foreground">Unlimited emails, 5K leads/mo</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Hypergrowth: $97/mo</p>
                        <p className="text-sm text-muted-foreground">25K leads/mo, unlimited everything</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-semibold">Light Speed: $358/mo</p>
                        <p className="text-sm text-muted-foreground">100K leads/mo + priority support</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground italic">
                💡 Real Talk: Lemlist costs $22/mo more but includes video/image personalization and LinkedIn. If you're doing creative outreach for high-ticket offers, the extra cost pays for itself in reply rate.
              </p>
            </div>

            {/* Use Cases */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Real-World Use Cases: When to Use Each</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Perfect for Lemlist:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">High-Ticket B2B Sales ($5K-$50K deals)</p>
                          <p className="text-muted-foreground">Personalized video increases trust for expensive services</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Agency Owner Outreach</p>
                          <p className="text-muted-foreground">Show their website + explain specific improvements</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Enterprise Sales</p>
                          <p className="text-muted-foreground">Multi-channel sequences (email + LinkedIn + phone)</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Perfect for Instantly:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Volume Campaigns (1000+ emails/day)</p>
                          <p className="text-muted-foreground">Unlimited accounts = massive sending capacity</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Agency Client Campaigns</p>
                          <p className="text-muted-foreground">Manage 10+ clients with separate campaigns</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Simple Offers ($500-$3K)</p>
                          <p className="text-muted-foreground">When speed matters more than personalization</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Andy's Take */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-bold">Andy's Take: Which One Should You Actually Use?</h2>
                <div className="space-y-4">
                  <p className="text-foreground">
                    I use <strong>both</strong>, but for completely different campaigns:
                  </p>
                  <div className="p-4 bg-background rounded-lg border space-y-3">
                    <div>
                      <p className="font-semibold mb-1">Lemlist for:</p>
                      <p className="text-sm text-muted-foreground">
                        High-ticket agency outreach ($10K+ deals). I'll record a 30-second video showing their website and explaining 2-3 specific improvements I'd make. Reply rate: 15-20% vs 2-5% for text-only.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Instantly for:</p>
                      <p className="text-sm text-muted-foreground">
                        Client campaigns where we're sending 5K-10K emails/month. Faster setup, unlimited accounts, and the built-in lead finder saves $99/mo. Reply rate: 3-8% but at 10x the volume.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
                    <p className="text-sm font-semibold mb-2">Bottom Line (December 2025):</p>
                    <p className="text-sm text-muted-foreground">
                      If you're selling services over $5K and targeting under 500 prospects/month → <strong>Lemlist</strong>. The personalization pays for itself.<br/><br/>
                      If you're an agency running multiple campaigns or need volume (1000+ emails/day) → <strong>Instantly</strong>. Unlimited accounts and lower cost win.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <div className="text-center space-y-6 py-8">
              <h2 className="text-3xl font-bold">Ready to Scale Your Cold Email?</h2>
              <p className="text-xl text-muted-foreground">
                Choose based on your offer price and volume needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/rec/lemlist" target="_blank" rel="noopener noreferrer">
                    Try Lemlist Free (Personalization)
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/rec/instantly" target="_blank" rel="noopener noreferrer">
                    Try Instantly Free (Volume)
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Both offer free trials. Test your first campaign before committing.
              </p>
            </div>

            {/* Related Comparisons */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Related Comparisons:</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/compare/instantly-vs-smartlead">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Instantly vs Smartlead
                  </Badge>
                </Link>
                <Link href="/compare/lemlist-vs-reply">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Lemlist vs Reply.io
                  </Badge>
                </Link>
                <Link href="/tool/lemlist">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Full Lemlist Review
                  </Badge>
                </Link>
                <Link href="/tool/instantly">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Full Instantly Review
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

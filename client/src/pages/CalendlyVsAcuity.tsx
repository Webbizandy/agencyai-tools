import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Calendar, DollarSign } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function CalendlyVsAcuity() {
  useDocumentTitle(
    "Calendly vs Acuity Scheduling 2025: Which Booking Tool for Agencies? | AgencyAI.tools",
    "Calendly vs Acuity Scheduling comparison for agencies. Free simplicity vs advanced customization. Pricing, features, and which scheduling tool fits your needs in 2025."
  );

  // Schema markup for SEO
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Calendly vs Acuity Scheduling Comparison",
    "description": "Comprehensive comparison of Calendly and Acuity Scheduling for agencies in 2025. Simple scheduling vs advanced customization and payments.",
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Andy Kelly"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.6",
        "bestRating": "5"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Calendly or Acuity Scheduling better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calendly is better for simple scheduling with free tier and team features. Acuity Scheduling is better for service businesses needing payments, intake forms, and deeper customization."
        }
      },
      {
        "@type": "Question",
        "name": "Does Calendly have a free plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Calendly has a free plan with unlimited 1-on-1 meetings and basic features. Acuity Scheduling starts at $16/mo with no free tier."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero */}
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Badge>Scheduling</Badge>
                <Badge variant="outline">Comparison 2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Calendly vs Acuity Scheduling: Free Simplicity or Paid Power?
              </h1>
              <p className="text-xl text-muted-foreground">
                Both eliminate scheduling back-and-forth. One is free and dead simple. The other costs $16/mo+ but has payments, intake forms, and service business features. Here's which one you actually need in 2025.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I use both for different clients. Calendly is my go-to for simple meeting bookings. Acuity is what I recommend to service businesses selling appointments.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Here's what nobody tells you... Calendly's free plan is insanely generous - unlimited 1-on-1 meetings forever. Acuity has no free tier but includes features service businesses actually need (payments, intake forms, packages).
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Pick the wrong one and you'll either overpay for features you don't need, or miss critical tools that cost you revenue.
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
                        <th className="text-left py-3 px-4 font-semibold">Calendly</th>
                        <th className="text-left py-3 px-4 font-semibold">Acuity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Best For</td>
                        <td className="py-3 px-4">Simple meeting scheduling</td>
                        <td className="py-3 px-4">Service businesses (salons, coaching, etc.)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Starting Price</td>
                        <td className="py-3 px-4">Free (unlimited 1-on-1 meetings)</td>
                        <td className="py-3 px-4">$16/mo (Emerging plan)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Paid Plans Start At</td>
                        <td className="py-3 px-4">$12/mo (group events, reminders)</td>
                        <td className="py-3 px-4">$16/mo</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Payment Collection</td>
                        <td className="py-3 px-4">❌ No (add-ons only on Teams)</td>
                        <td className="py-3 px-4">✅ Yes (Stripe, Square, PayPal)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Intake Forms</td>
                        <td className="py-3 px-4">Basic questions only</td>
                        <td className="py-3 px-4">✅ Advanced forms with conditional logic</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Appointment Packages</td>
                        <td className="py-3 px-4">❌ No</td>
                        <td className="py-3 px-4">✅ Yes (sell 5-session packages, etc.)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Team Scheduling</td>
                        <td className="py-3 px-4">✅ Yes (round-robin, collective)</td>
                        <td className="py-3 px-4">Yes (resource-based)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Ease of Setup</td>
                        <td className="py-3 px-4">✅ Easiest (5 minutes)</td>
                        <td className="py-3 px-4">More complex (15-30 min)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Feature Breakdown */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Feature-by-Feature Breakdown</h2>
              
              {/* Payments */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <DollarSign className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Payment Collection</h3>
                      <p className="text-muted-foreground">
                        <strong>Acuity wins.</strong> It has native Stripe, Square, and PayPal integration. Clients pay when they book. You can require deposits, sell packages, or charge full price upfront.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Calendly</strong> doesn't have native payments on most plans. You'd need to use Stripe add-on (Teams plan only) or send invoices manually after booking.
                      </p>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Winner: Acuity Scheduling (not even close).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ease of Use */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Check className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Ease of Use</h3>
                      <p className="text-muted-foreground">
                        <strong>Calendly wins.</strong> Connect your calendar, set availability, share your link. That's it. It's the most intuitive scheduling tool I've ever used.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Acuity</strong> has more settings because it has more features. Expect 15-30 minutes to set up properly (vs 5 min for Calendly).
                      </p>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Winner: Calendly (by a lot).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Business Features */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Service Business Features</h3>
                      <p className="text-muted-foreground">
                        <strong>Acuity wins.</strong> It's built for salons, coaches, therapists, consultants. Intake forms, appointment packages (sell 5-session bundles), class scheduling, gift certificates.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Calendly</strong> is built for meeting scheduling, not service delivery. No packages, no gift certificates, basic intake forms.
                      </p>
                      <p className="text-sm text-muted-foreground font-semibold">
                        Winner: Acuity Scheduling.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Breakdown */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Pricing Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Plan</th>
                        <th className="text-left py-3 px-4 font-semibold">Calendly</th>
                        <th className="text-left py-3 px-4 font-semibold">Acuity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">Free</td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 font-semibold">Free</span><br />
                          <span className="text-sm text-muted-foreground">Unlimited 1-on-1, 1 event type</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-muted-foreground">No free plan</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">Starter/Emerging</td>
                        <td className="py-3 px-4">
                          $12/mo<br />
                          <span className="text-sm text-muted-foreground">Group events, reminders, unlimited event types</span>
                        </td>
                        <td className="py-3 px-4">
                          $16/mo<br />
                          <span className="text-sm text-muted-foreground">Up to 6 calendars, intake forms, payments</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">Professional/Growing</td>
                        <td className="py-3 px-4">
                          $20/mo<br />
                          <span className="text-sm text-muted-foreground">More integrations, Salesforce</span>
                        </td>
                        <td className="py-3 px-4">
                          $27/mo<br />
                          <span className="text-sm text-muted-foreground">Up to 36 calendars, packages, coupons</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">Teams/Powerhouse</td>
                        <td className="py-3 px-4">
                          $20/user/mo<br />
                          <span className="text-sm text-muted-foreground">Team scheduling, Stripe payments</span>
                        </td>
                        <td className="py-3 px-4">
                          $49/mo<br />
                          <span className="text-sm text-muted-foreground">Unlimited calendars, multi-location</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Andy's Take */}
            <Card className="border-2 border-blue-200 dark:border-blue-900/50 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Andy's Take</h2>
                <div className="space-y-4 text-foreground">
                  <p className="text-lg leading-relaxed">
                    <strong>Use Calendly if:</strong>
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>You just need simple meeting scheduling (sales calls, consultations)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>You want a free plan that actually works</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>You don't need to collect payments at booking</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>You need team round-robin scheduling</span>
                    </li>
                  </ul>

                  <p className="text-lg leading-relaxed mt-6">
                    <strong>Use Acuity Scheduling if:</strong>
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You run a service business (salon, coaching, therapy, consulting)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You need to collect payments when clients book</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You want to sell appointment packages (5-session bundles, etc.)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You need detailed intake forms with conditional logic</span>
                    </li>
                  </ul>

                  <p className="text-lg leading-relaxed mt-6 pt-6 border-t">
                    <strong>Bottom line:</strong> If you're scheduling meetings or sales calls, use Calendly (start free). If you're selling services and need payments/packages, use Acuity ($16/mo minimum). I personally use Calendly for agency sales calls and recommend Acuity to service business clients.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/rec/calendly" className="flex-1">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Try Calendly Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/rec/acuity" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Try Acuity Free (14 Days)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

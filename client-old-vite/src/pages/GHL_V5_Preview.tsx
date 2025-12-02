import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function GHL_V5_Preview() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container max-w-6xl">
          <Link href="/tools">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tools
            </Button>
          </Link>
        </div>
      </div>

      {/* V5 Preview Hero */}
      <div className="container max-w-6xl py-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 mb-8 border-2 border-purple-300">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎨 V5 Review Design Preview
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            This is a live preview of how the new V5 review style will look - 
            more personal, less "generic review site."
          </p>
          <p className="text-sm text-gray-600">
            <strong>What's different:</strong> Warm colors, Andy's photo, note-card style, 
            conversational headers, and authentic voice.
          </p>
        </div>

        {/* Author Intro Card (V5 Style) */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-lg p-6 mb-12 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-amber-200 border-3 border-amber-400 shadow-md flex items-center justify-center text-3xl">
              👨‍💼
            </div>
            <div>
              <p className="text-sm text-amber-700 font-semibold uppercase tracking-wide mb-1">
                Written by
              </p>
              <p className="text-xl font-bold text-gray-900 mb-1">
                Andy Kelly
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Agency owner since 2007 • Using GHL since 2022 • 12 active clients
              </p>
              <p className="text-base text-gray-700 italic">
                "I've used GoHighLevel for 3 years running my agency. Here's what 
                nobody tells you..."
              </p>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          GoHighLevel: 3 Years In, Here's What Nobody Tells You
        </h1>

        {/* TL;DR Card (Note Style) */}
        <div className="max-w-3xl mx-auto my-12">
          <div className="relative">
            {/* Pin decoration */}
            <div className="absolute -top-3 right-8 text-4xl transform rotate-12">
              📌
            </div>
            
            {/* Main card */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 shadow-lg transform rotate-[-0.5deg]">
              <h3 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'cursive' }}>
                TL;DR - The Bottom Line
              </h3>
              
              <div className="space-y-4 text-base">
                {/* Green checks for positives */}
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-900">Using it since:</span>{' '}
                    <span className="text-gray-700">2022 (3 years)</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-900">What I pay:</span>{' '}
                    <span className="text-gray-700">$497/mo</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-900">What I was spending before:</span>{' '}
                    <span className="text-gray-700">$2,100/mo across 8+ tools</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-900">What I charge clients:</span>{' '}
                    <span className="text-gray-700">$397-$2,000/mo</span>
                  </div>
                </div>
                
                {/* Red X's for skip conditions */}
                <div className="flex items-start gap-3 pt-2">
                  <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                  <div>
                    <span className="font-semibold text-gray-900">Skip if:</span>{' '}
                    <span className="text-gray-700">You only need basic email</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl flex-shrink-0">✗</span>
                  <div>
                    <span className="font-semibold text-gray-900">Not for:</span>{' '}
                    <span className="text-gray-700">Pure e-commerce or B2B SaaS</span>
                  </div>
                </div>
                
                {/* Rating section */}
                <div className="mt-6 pt-6 border-t-2 border-yellow-300">
                  <p className="text-2xl text-gray-800 mb-2" style={{ fontFamily: 'cursive' }}>
                    My rating: 4.6/5 ⭐
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    (Would be 5 if email was better)
                  </p>
                </div>
              </div>
              
              {/* CTA button */}
              <div className="mt-8">
                <Button 
                  className="w-full sm:w-auto px-6 py-6 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all text-base"
                  asChild
                >
                  <a href="https://agencyai.tools/rec/gohighlevel" target="_blank" rel="noopener">
                    Try GHL Free for 14 Days <ExternalLink className="ml-2 h-4 w-4 inline" />
                    <span className="block text-sm font-normal mt-1">
                      (That's how I started)
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section Example */}
        <article className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700">
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              The $2,100/Month Wake-Up Call
            </h2>
            
            <p className="mb-4">
              It was 2022.
            </p>
            
            <p className="mb-4">
              I was staring at my credit card statement and doing math I really didn't want to do.
            </p>
            
            <p className="mb-4">
              Infusionsoft (or Keap, whatever they're calling it now): $299<br />
              Kartra for funnels: $199<br />
              Wistia for video: $99<br />
              Aweber for some campaigns: $49<br />
              Zapier Pro to make it all talk: $49<br />
              Make.com for the complex stuff: $29<br />
              Acuity for calendars: $34<br />
              ClickFunnels for landing pages: $297
            </p>
            
            <p className="mb-4">
              Plus a bunch of other tools I'm probably forgetting.
            </p>
            
            <p className="mb-4 font-bold text-xl">
              Total damage: Over $2,100 a month.
            </p>
            
            <p className="mb-4">
              For what? The privilege of flipping between six different tabs, chasing down broken 
              Zapier connections, and wondering why the hell my automation didn't fire at 2am.
            </p>
            
            <p className="mb-4">
              The worst part wasn't even the money.
            </p>
            
            <p className="mb-4">
              It was the constant babysitting.
            </p>
          </section>

          {/* Pull Quote */}
          <aside className="my-12">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400 rounded-r-lg p-8">
              <p className="text-2xl font-semibold text-gray-900 mb-4 leading-snug">
                "Everything talks to everything, natively, without Zapier breaking at 2am."
              </p>
              <p className="text-base text-gray-600">
                — That's the best part of GHL after 3 years
              </p>
            </div>
          </aside>

          {/* Before/After Comparison */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Before vs. After
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">😫</span>
                  <h3 className="text-xl font-bold text-gray-900">Before GHL</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>$2,100/mo across 8+ tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Zapier breaking at 2am</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>6 different dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Constant babysitting</span>
                  </li>
                </ul>
              </div>
              
              {/* After */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">😎</span>
                  <h3 className="text-xl font-bold text-gray-900">After GHL</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>$497/mo total</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Everything in one place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Single dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Mostly runs itself</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quick Hits Section */}
          <section>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quick Hits (Rapid Fire)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Best part in one sentence:
                  </p>
                  <p className="text-lg text-gray-700 italic">
                    "Everything talks to everything, natively, without Zapier breaking at 2am."
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Worst part in one sentence:
                  </p>
                  <p className="text-lg text-gray-700 italic">
                    "Email system is 'good enough' but not great."
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    White-label revenue - real or overhyped?
                  </p>
                  <p className="text-lg text-gray-700 italic">
                    "REAL. 5 clients at $397/mo = $1,985/mo on $497/mo cost. Do the math."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="my-16 text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-10 border-2 border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to try GoHighLevel?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Start with the 14-day free trial. That's how I started back in 2022.
              </p>
              <Button 
                className="px-8 py-6 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://agencyai.tools/rec/gohighlevel" target="_blank" rel="noopener">
                  Start Your Free Trial <ExternalLink className="ml-2 h-5 w-5 inline" />
                </a>
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                No credit card required • 14 days to test everything
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-base text-gray-700">
                <strong>Questions about setting it up?</strong><br />
                Hit reply. I read every email.
              </p>
              <p className="text-2xl text-gray-800 mt-4" style={{ fontFamily: 'cursive' }}>
                Cheers, Andy
              </p>
            </div>
          </section>
        </article>

        {/* Footer Note */}
        <div className="mt-16 mb-8 text-center text-sm text-gray-600 italic">
          <p>Written by someone who's actually used it for 3 years, not just read the sales page.</p>
        </div>
      </div>
    </div>
  );
}

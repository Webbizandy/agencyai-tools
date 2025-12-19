import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | AgencyAI.tools</title>
        <meta 
          name="description" 
          content="Terms of Service for AgencyAI.tools - Read our terms and conditions for using our AI tool directory and reviews."
        />
        <link rel="canonical" href="https://agencyai.tools/terms" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 mb-8">
            Last updated: December 18, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                By accessing and using AgencyAI.tools ("the Site"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Content</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The content on AgencyAI.tools, including but not limited to tool reviews, ratings, comparisons, and recommendations, is provided for informational purposes only. We strive to provide accurate and up-to-date information, but we make no warranties or representations about the accuracy, completeness, or suitability of any information on the Site.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                You are responsible for evaluating the accuracy, completeness, and usefulness of any opinions, advice, services, or other information provided through the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Affiliate Disclosure</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                AgencyAI.tools may contain affiliate links to third-party products and services. If you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you. Our reviews and recommendations are based on our genuine opinions and are not influenced by affiliate relationships.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Tools and Services</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                AgencyAI.tools provides information about third-party AI tools and services. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. Your use of third-party tools is subject to their respective terms of service and privacy policies.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                We do not endorse, warrant, or guarantee any third-party products or services featured on the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                AgencyAI.tools and its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the Site or any third-party tools or services referenced on the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                All content on AgencyAI.tools, including text, graphics, logos, images, and software, is the property of AgencyAI.tools or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. User Conduct</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Site. You agree not to attempt to gain unauthorized access to any part of the Site or any systems or networks connected to the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which AgencyAI.tools operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:hello@agencyai.tools" className="text-blue-600 hover:text-blue-700">
                  hello@agencyai.tools
                </a>
                .
              </p>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

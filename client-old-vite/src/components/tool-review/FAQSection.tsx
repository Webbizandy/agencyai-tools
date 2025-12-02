import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  toolName: string;
}

export default function FAQSection({ faqs, toolName }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate Schema.org FAQ markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Helmet>
        {/* FAQ Schema for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg shadow-purple-500/30">
            <HelpCircle className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about {toolName}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8F9] dark:bg-gray-800 rounded-2xl border border-gray-200/60 dark:border-gray-700/50 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                aria-expanded={openIndex === idx}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer Panel */}
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === idx
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#FFF2EF] dark:bg-gray-800 rounded-2xl p-6 border border-orange-200/60 dark:border-gray-700/50">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Still have questions? We're here to help.
            </p>
            <a
              href="#contact"
              className="text-orange-600 dark:text-orange-400 font-semibold hover:underline"
            >
              Contact our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

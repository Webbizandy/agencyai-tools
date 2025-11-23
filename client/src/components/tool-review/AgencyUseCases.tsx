import { Building2, Users, TrendingUp, Target, Briefcase, Rocket } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
  benefit: string;
}

interface AgencyUseCasesProps {
  toolName: string;
  useCases?: UseCase[];
}

// Default use cases if none provided
const defaultUseCases = [
  {
    title: "Client Onboarding & Support",
    description: "Automate client intake, answer FAQs 24/7, and provide instant support to reduce workload on your team.",
    benefit: "Save 15+ hours per week on repetitive questions"
  },
  {
    title: "Lead Qualification",
    description: "Pre-qualify leads automatically before they reach your sales team, ensuring only high-intent prospects book calls.",
    benefit: "Increase conversion rates by 35%"
  },
  {
    title: "Service Package Sales",
    description: "Guide prospects through your service offerings with interactive conversations that increase understanding and urgency.",
    benefit: "Boost package sales by 40%"
  },
  {
    title: "Team Productivity",
    description: "Give your team instant access to internal knowledge, SOPs, and processes without digging through documents.",
    benefit: "Reduce onboarding time from weeks to days"
  },
  {
    title: "Multi-Client Management",
    description: "Deploy custom solutions for each client while maintaining centralized control and consistent quality across all accounts.",
    benefit: "Scale to 3x more clients with same team"
  },
  {
    title: "Revenue Growth",
    description: "Upsell existing clients and capture inbound leads that would otherwise slip through the cracks overnight.",
    benefit: "Generate 20-30% additional revenue"
  }
];

const getUseCaseIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('onboard') || lowerTitle.includes('support')) {
    return <Users className="w-7 h-7" strokeWidth={2} />;
  }
  if (lowerTitle.includes('lead') || lowerTitle.includes('qualify')) {
    return <Target className="w-7 h-7" strokeWidth={2} />;
  }
  if (lowerTitle.includes('sales') || lowerTitle.includes('package')) {
    return <TrendingUp className="w-7 h-7" strokeWidth={2} />;
  }
  if (lowerTitle.includes('team') || lowerTitle.includes('productivity')) {
    return <Briefcase className="w-7 h-7" strokeWidth={2} />;
  }
  if (lowerTitle.includes('client') || lowerTitle.includes('management')) {
    return <Building2 className="w-7 h-7" strokeWidth={2} />;
  }
  if (lowerTitle.includes('revenue') || lowerTitle.includes('growth')) {
    return <Rocket className="w-7 h-7" strokeWidth={2} />;
  }
  
  return <Building2 className="w-7 h-7" strokeWidth={2} />;
};

export default function AgencyUseCases({ toolName, useCases = defaultUseCases }: AgencyUseCasesProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Agencies Use {toolName}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world applications that drive measurable results for agency owners and their clients
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => {
            const icon = getUseCaseIcon(useCase.title);
            
            return (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-7 border border-gray-200/60 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-200 group"
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                    <div className="text-white">
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight pt-2">
                    {useCase.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>

                {/* Benefit Badge */}
                <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200/60 dark:border-emerald-800/50">
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                    {useCase.benefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#FFF2EF] dark:bg-gray-800 rounded-2xl p-8 border border-orange-200/60 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Transform Your Agency?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
              Join thousands of agencies using {toolName} to scale their operations and increase revenue
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 shadow-lg transition-all"
            >
              Start Your Free Trial
              <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

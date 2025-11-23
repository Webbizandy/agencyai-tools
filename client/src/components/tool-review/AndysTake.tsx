import { MessageSquare } from "lucide-react";

interface AndysTakeProps {
  toolName: string;
  take: string;
  verdict?: string;
  personalExperience?: string;
  clientResults?: string;
  bestFor?: string;
  skipIf?: string;
}

export default function AndysTake({
  toolName,
  take,
  verdict,
  personalExperience,
  clientResults,
  bestFor,
  skipIf
}: AndysTakeProps) {
  return (
    <section id="andys-full-take" className="py-12 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="container max-w-4xl">
        {/* Andy's Photo + Header */}
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <MessageSquare className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Andy's Full Take
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Real talk from someone who's actually tested {toolName}
            </p>
          </div>
        </div>

        {/* Main Content Box with Avatar */}
        <div className="bg-[#FFF2EF] dark:bg-gray-800 rounded-2xl p-8 border border-orange-200/60 dark:border-gray-700/50 relative">
          {/* Andy's Avatar in Top Right Corner */}
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl">
            <img 
              src="/andy-avatar.jpg" 
              alt="Andy Kelly"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to icon if image not found
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center"><svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
                }
              }}
            />
          </div>
          {/* Main Take */}
          <div className="prose prose-lg max-w-none mb-6">
            <div className="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
              {take}
            </div>
          </div>

          {/* Quick Facts Grid */}
          {(verdict || personalExperience || clientResults) && (
            <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-orange-200 dark:border-gray-700">
              {verdict && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                      Bottom Line
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {verdict}
                  </p>
                </div>
              )}

              {personalExperience && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                      My Setup
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {personalExperience}
                  </p>
                </div>
              )}

              {clientResults && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                      Client Results
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {clientResults}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Best For / Skip If */}
          {(bestFor || skipIf) && (
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {bestFor && (
                <div className="bg-white/50 dark:bg-gray-900/30 rounded-xl p-4">
                  <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                    ✅ Worth it if:
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {bestFor}
                  </p>
                </div>
              )}

              {skipIf && (
                <div className="bg-white/50 dark:bg-gray-900/30 rounded-xl p-4">
                  <div className="text-sm font-bold text-orange-700 dark:text-orange-400 mb-2">
                    ⚠️ Skip if:
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {skipIf}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Signature */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm italic">
            — Andy Kelly, Agency AI Tools
          </p>
        </div>
      </div>
    </section>
  );
}

import { MessageSquare, ArrowDown } from "lucide-react";

interface AndysTakeSnippetProps {
  toolName: string;
  snippet: string;
}

export default function AndysTakeSnippet({ toolName, snippet }: AndysTakeSnippetProps) {
  const scrollToFullTake = () => {
    const fullTakeElement = document.getElementById('andys-full-take');
    if (fullTakeElement) {
      fullTakeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/10 dark:to-red-950/10 border-y border-orange-200 dark:border-orange-900">
      <div className="container max-w-7xl">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <MessageSquare className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Andy's Take
              </h3>
              <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full font-medium">
                Quick Opinion
              </span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {snippet}
            </p>

            {/* Read More Link */}
            <button
              onClick={scrollToFullTake}
              className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold text-sm transition-colors group"
            >
              Read my full take below
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

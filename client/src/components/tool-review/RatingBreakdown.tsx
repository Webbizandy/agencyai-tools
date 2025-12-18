// /client/src/components/tool-review/RatingBreakdown.tsx
interface Ratings {
  overall: number;
  easeOfUse: number;
  features: number;
  valueForMoney: number;
  agencyProfitability: number;
}

interface RatingBreakdownProps {
  ratings: Ratings;
}

export default function RatingBreakdown({ ratings }: RatingBreakdownProps) {
  const ratingLabels = {
    easeOfUse: "Ease of Use",
    features: "Features & Functionality",
    valueForMoney: "Value for Money",
    agencyProfitability: "Agency Profitability"
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor"/>
                <stop offset="50%" stopColor="transparent"/>
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        <span className="ml-2 text-sm font-semibold">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How We Rated It</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">Overall Rating</span>
              <div className="flex items-center gap-2">
                {renderStars(ratings.overall)}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {Object.entries(ratingLabels).map(([key, label]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{label}</span>
                {renderStars(ratings[key as keyof typeof ratingLabels])}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

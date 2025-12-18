// /client/src/components/tool-review/CommunityReviews.tsx
interface Review {
  author: string;
  source: string;
  sourceUrl: string;
  rating: number;
  review: string;
}

interface CommunityReviewsProps {
  reviews: Review[];
}

export default function CommunityReviews({ reviews }: CommunityReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
            viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Community Reviews</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{review.author}</p>
                  <a 
                    href={review.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline">
                    via {review.source}
                  </a>
                </div>
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

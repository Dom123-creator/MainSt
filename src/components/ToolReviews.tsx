import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

interface ToolReviewsProps {
  toolId: string;
}

export function ToolReviews({ toolId }: ToolReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reviews = useQuery(api.reviewsAndSubscriptions.getToolReviews, { toolId });
  const averageRating = useQuery(api.reviewsAndSubscriptions.getAverageRating, { toolId });
  const submitReview = useMutation(api.reviewsAndSubscriptions.createReview);
  const markHelpful = useMutation(api.reviewsAndSubscriptions.markReviewHelpful);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitReview({
        toolId,
        rating,
        review: reviewText.trim() || undefined,
      });

      toast.success("Review submitted successfully!");
      setRating(0);
      setReviewText("");
      setShowReviewForm(false);
    } catch (error: any) {
      if (error.message.includes("authenticated")) {
        toast.error("Please sign in to submit a review");
      } else if (error.message.includes("already reviewed")) {
        toast.error("You've already reviewed this tool");
      } else {
        toast.error("Failed to submit review. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMarkHelpful = async (reviewId: string, helpful: boolean) => {
    try {
      await markHelpful({ reviewId, helpful });
      toast.success(helpful ? "Marked as helpful" : "Marked as not helpful");
    } catch (error: any) {
      if (error.message.includes("authenticated")) {
        toast.error("Please sign in to mark reviews as helpful");
      } else {
        toast.error("Failed to mark review. Please try again.");
      }
    }
  };

  const renderStars = (rating: number, interactive = false, size = "w-5 h-5") => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            disabled={!interactive}
            onClick={() => interactive && setRating(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={interactive ? "cursor-pointer transition-transform hover:scale-110" : "cursor-default"}
          >
            <svg
              className={`${size} ${
                star <= (interactive ? (hoverRating || rating) : rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300 fill-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">
              {averageRating?.average?.toFixed(1) || "0.0"}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {renderStars(Math.round(averageRating?.average || 0))}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {averageRating?.count || 0} {averageRating?.count === 1 ? "review" : "reviews"}
            </div>
          </div>

          {/* Rating Breakdown */}
          {averageRating?.breakdown && (
            <div className="flex-1 max-w-xs space-y-1">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = averageRating.breakdown[star] || 0;
                const percentage = averageRating.count > 0 ? (count / averageRating.count) * 100 : 0;
                return (
                  <div key={star} className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600 w-8">{star}★</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-gray-600 w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          {showReviewForm ? "Cancel" : "Write a Review"}
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Your Rating *
              </label>
              {renderStars(rating, true, "w-8 h-8")}
            </div>

            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-900 mb-2">
                Your Review (Optional)
              </label>
              <textarea
                id="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with this tool..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews === undefined ? (
          // Loading state
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 animate-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No reviews yet</h3>
            <p className="text-gray-600 mb-4">Be the first to review this tool!</p>
            <button
              onClick={() => setShowReviewForm(true)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Write a Review
            </button>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(review.rating)}
                    {review.verified && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        ✓ Verified User
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {new Date(review.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>

              {review.review && (
                <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
              )}

              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">Was this helpful?</span>
                <button
                  onClick={() => handleMarkHelpful(review._id, true)}
                  className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  Yes ({review.helpful})
                </button>
                <button
                  onClick={() => handleMarkHelpful(review._id, false)}
                  className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                    />
                  </svg>
                  No ({review.notHelpful})
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

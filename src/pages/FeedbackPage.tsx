import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Star, ThumbsUp, MessageSquare, Send, User, Calendar } from 'lucide-react';

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    user: "John Smith",
    rating: 5,
    date: "2024-03-10",
    comment: "Excellent airport facilities and helpful staff. The check-in process was smooth and efficient.",
    helpful: 12,
    category: "General"
  },
  {
    id: 2,
    user: "Marie Claire",
    rating: 4,
    date: "2024-03-08",
    comment: "Clean terminals and good duty-free shopping options. Could improve signage in some areas.",
    helpful: 8,
    category: "Facilities"
  },
  {
    id: 3,
    user: "David Wilson",
    rating: 5,
    date: "2024-03-05",
    comment: "Security staff were professional and courteous. Very organized process.",
    helpful: 15,
    category: "Security"
  }
];

const categories = [
  "General",
  "Check-in",
  "Security",
  "Facilities",
  "Shopping",
  "Dining",
  "Staff",
  "Cleanliness"
];

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState("General");
  const [comment, setComment] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log({ rating, category, comment });
    // Reset form
    setRating(0);
    setCategory("General");
    setComment("");
  };

  const renderStars = (count: number, interactive = false) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-6 w-6 ${
          index < (interactive ? (hoverRating || rating) : count)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        } ${interactive ? "cursor-pointer" : ""}`}
        onClick={() => interactive && setRating(index + 1)}
        onMouseEnter={() => interactive && setHoverRating(index + 1)}
        onMouseLeave={() => interactive && setHoverRating(0)}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Share Your Experience"
        subtitle="Your feedback helps us improve our services"
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
        icon={<MessageSquare className="h-12 w-12" />}
      />
      <main className="py-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Submit Review Section */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 mb-12">
              <h3 className="text-xl font-semibold mb-6">Share Your Experience</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rate your experience
                  </label>
                  <div className="flex space-x-2">
                    {renderStars(rating, true)}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your feedback
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Share your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Review
                </button>
              </form>
            </div>

            {/* Reviews Section */}
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-xl font-semibold">Recent Reviews</h3>
                <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                    ))}
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="helpful">Most Helpful</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {mockReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <User className="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" />
                        <div className="ml-4">
                          <h4 className="font-semibold">{review.user}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {review.date}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{review.comment}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <button className="flex items-center hover:text-blue-600">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Helpful ({review.helpful})
                      </button>
                      <button className="flex items-center ml-4 hover:text-blue-600">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
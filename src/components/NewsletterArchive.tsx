import { useState } from "react";

interface Newsletter {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image?: string;
  featured: boolean;
}

const mockNewsletters: Newsletter[] = [
  {
    id: "1",
    title: "10 AI Tools That Saved Small Businesses $50K in 2024",
    excerpt: "Discover the game-changing AI tools that helped businesses cut costs and boost productivity by over 40% this year.",
    category: "Cost Savings",
    publishedAt: "2024-12-15",
    readTime: "5 min",
    featured: true,
  },
  {
    id: "2",
    title: "From Manual to Automated: HVAC Company Case Study",
    excerpt: "See how Johnson HVAC automated their scheduling and saved 15 hours per week using AI voice assistants.",
    category: "HVAC",
    publishedAt: "2024-12-10",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "3",
    title: "Legal Tech Simplified: AI for Solo Practitioners",
    excerpt: "A comprehensive guide to using AI for document review, contract analysis, and client communication.",
    category: "Legal",
    publishedAt: "2024-12-05",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "4",
    title: "Accounting Automation: Close Your Books in Half the Time",
    excerpt: "Learn how AI-powered accounting tools can reduce month-end closing from 5 days to just 2 days.",
    category: "Accounting",
    publishedAt: "2024-11-28",
    readTime: "7 min",
    featured: false,
  },
  {
    id: "5",
    title: "Customer Service AI: 24/7 Support Without Hiring",
    excerpt: "Implement AI chatbots that handle 80% of customer inquiries automatically while maintaining quality.",
    category: "Operations",
    publishedAt: "2024-11-20",
    readTime: "5 min",
    featured: false,
  },
];

export function NewsletterArchive() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Cost Savings", "HVAC", "Legal", "Accounting", "Operations"];

  // Filter newsletters
  let filteredNewsletters = mockNewsletters;

  if (selectedCategory !== "all") {
    filteredNewsletters = filteredNewsletters.filter(
      (n) => n.category === selectedCategory
    );
  }

  if (searchQuery) {
    filteredNewsletters = filteredNewsletters.filter(
      (n) =>
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const featuredNewsletters = filteredNewsletters.filter((n) => n.featured);
  const regularNewsletters = filteredNewsletters.filter((n) => !n.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Newsletter Archive</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our collection of actionable AI insights, case studies, and implementation guides
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search newsletters..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredNewsletters.length}</span>{" "}
            {filteredNewsletters.length === 1 ? "newsletter" : "newsletters"}
          </p>
        </div>

        {/* Featured Newsletters */}
        {featuredNewsletters.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredNewsletters.map((newsletter) => (
                <div
                  key={newsletter.id}
                  className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                      {newsletter.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {newsletter.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {newsletter.title}
                  </h3>

                  <p className="text-gray-700 mb-4 line-clamp-2">{newsletter.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {new Date(newsletter.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <button className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Newsletters */}
        {regularNewsletters.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Newsletters</h2>
            <div className="space-y-4">
              {regularNewsletters.map((newsletter) => (
                <div
                  key={newsletter.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {newsletter.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(newsletter.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-sm text-gray-500">• {newsletter.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {newsletter.title}
                      </h3>

                      <p className="text-gray-600 line-clamp-2">{newsletter.excerpt}</p>
                    </div>

                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors whitespace-nowrap">
                      Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredNewsletters.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No newsletters found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Subscribe CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Issue</h2>
          <p className="text-green-100 mb-6 text-lg">
            Get the latest AI tools, case studies, and implementation guides delivered to your inbox
          </p>
          <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

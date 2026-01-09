import { useState } from "react";
import { Footer } from "./components/Footer";
import { ToolModal } from "./components/ToolModal";
import { SubscriptionSection } from "./components/SubscriptionSection";
import { ProfileSubscriptionModal } from "./components/ProfileSubscriptionModal";
import { problemTools, techRyboksTools } from "./data/mockData";

export function ModernMainStLanding() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const allTools = [...problemTools, ...techRyboksTools];

  const handleToolClick = (toolId: string) => {
    setSelectedToolId(toolId);
  };

  const selectedTool = selectedToolId
    ? allTools.find(t => t.id === selectedToolId)
    : null;

  // Filter tools
  let filteredTools = allTools;
  if (selectedFilters.length > 0) {
    filteredTools = filteredTools.filter(tool =>
      tool.category && selectedFilters.includes(tool.category)
    );
  }
  if (searchQuery) {
    filteredTools = filteredTools.filter(tool =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const categories = [
    { id: "hvac", label: "HVAC", icon: "🔧" },
    { id: "legal", label: "Legal", icon: "⚖️" },
    { id: "accounting", label: "Accounting", icon: "💼" },
    { id: "finance", label: "Finance", icon: "💰" },
    { id: "landscaping", label: "Landscaping", icon: "🌿" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcfbf8' }}>
      {/* Hero Section - Modern & Minimal */}
      <div className="relative overflow-hidden bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Growth Tools</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              AI is your friend.<br />
              <span className="text-gray-500">We make it simple.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Discover the right AI tools for your business. No fluff, no complexity—just 10+ hours back in your week.
            </p>

            {/* Search Bar - Modern Design */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for tools..."
                  className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (selectedFilters.includes(cat.id)) {
                      setSelectedFilters(selectedFilters.filter(f => f !== cat.id));
                    } else {
                      setSelectedFilters([...selectedFilters, cat.id]);
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedFilters.includes(cat.id)
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-900'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-all"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="minimal-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#minimal-grid)" />
          </svg>
        </div>
      </div>

      {/* Tools Grid - Clean Card Design */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {filteredTools.length} AI Tools for Growth
          </h2>
          <p className="text-gray-600">
            Click any tool to see detailed implementation guides and proven strategies
          </p>
        </div>

        {/* Tools Grid */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => handleToolClick(tool.id)}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-900 hover:shadow-lg transition-all cursor-pointer"
              >
                {/* Pro Badge */}
                {tool.isPro && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      PRO
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="text-4xl mb-4">{tool.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-900">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {tool.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {tool.setupTime && (
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span>{tool.setupTime}</span>
                    </div>
                  )}
                  {tool.roi && (
                    <div className="flex items-center gap-1">
                      <span>📈</span>
                      <span>{tool.roi}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {tool.tags && tool.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tool.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Simple CTA Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using AI to save time and grow faster.
          </p>
          <button
            onClick={() => {
              const section = document.querySelector('#subscription-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <SubscriptionSection />
      <Footer />

      {/* Modals */}
      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          onClose={() => setSelectedToolId(null)}
          onGetStarted={() => {
            setShowProfileModal(true);
            setSelectedToolId(null);
          }}
        />
      )}

      {showProfileModal && (
        <ProfileSubscriptionModal
          selectedPlan="Pro"
          onClose={() => setShowProfileModal(false)}
        />
      )}
    </div>
  );
}

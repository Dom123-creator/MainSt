import { useState } from "react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function HeroSection({
  onSearch,
  title = "Your Business is 2026-Ready. Your Schedule Isn't",
  subtitle = "We find the right AI tools that actually* work for Zero fluff. Zero fluff. Zero code. Just 10+ hours back in your week.",
  buttonText = "Explore the Hub"
}: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: 'var(--hero-navy)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200">
              {subtitle}
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Find the right AI tools for your business..."
                    className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white pr-12"
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
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ backgroundColor: 'var(--primary-green)' }}
              >
                {searchQuery ? 'Search' : buttonText}
              </button>
            </form>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="text-9xl">📱</div>
              <div className="absolute -right-16 top-8 text-6xl">✋</div>
              <div className="absolute top-4 left-4 text-2xl">💬</div>
              <div className="absolute bottom-8 left-8 text-3xl">🕐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

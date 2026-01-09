import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { LatestPlaybooks } from "./components/LatestPlaybooks";
import { ProblemSection } from "./components/ProblemSection";
import { TechRyboks } from "./components/TechRyboks";
import { UnlockSection } from "./components/UnlockSection";
import { ChallengeSection } from "./components/ChallengeSection";
import { Footer } from "./components/Footer";
import { ToolModal } from "./components/ToolModal";
import { SubscriptionSection } from "./components/SubscriptionSection";
import { ProfileSubscriptionModal } from "./components/ProfileSubscriptionModal";
import { operationsTools, operationsTechTools } from "./data/mockData";

export function OperationsLanding() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to tools section
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const handleToolClick = (toolId: string) => {
    setSelectedToolId(toolId);
  };

  const selectedTool = selectedToolId
    ? [...operationsTools, ...operationsTechTools].find(t => t.id === selectedToolId)
    : null;

  return (
    <div>
      <HeroSection
        onSearch={handleSearch}
        title="Streamline Your Operations with AI"
        subtitle="Automate scheduling, invoicing, and field service management. Save 10-20 hours per week while completing 30% more jobs."
        buttonText="Explore Operations Tools"
      />

      {searchQuery && (
        <div className="bg-blue-50 border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-blue-900">
                Showing results for: <span className="font-semibold">"{searchQuery}"</span>
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-sm text-blue-700 hover:text-blue-900 font-medium"
              >
                Clear search
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Latest Playbooks */}
          <div className="lg:col-span-3">
            <LatestPlaybooks
              selectedFilters={selectedFilters}
              onFilterChange={setSelectedFilters}
              articlesType="operations"
            />
          </div>

          {/* Middle Column - Problem Section and Additional Content */}
          <div className="lg:col-span-6">
            <ProblemSection
              selectedFilters={selectedFilters}
              searchQuery={searchQuery}
              onToolClick={handleToolClick}
              tools={operationsTools}
              sectionTitle="⚙️ Operations Optimization"
            />
            <UnlockSection />
            <ChallengeSection />
          </div>

          {/* Right Sidebar - Tech Ryboks */}
          <div className="lg:col-span-3">
            <TechRyboks
              selectedFilters={selectedFilters}
              searchQuery={searchQuery}
              onToolClick={handleToolClick}
              tools={operationsTechTools}
              sectionTitle="Tech Operations"
            />
          </div>
        </div>
      </div>

      <SubscriptionSection />

      <Footer />

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

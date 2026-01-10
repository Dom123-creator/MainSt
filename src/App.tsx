import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { Toaster } from "sonner";
import { ModernMainStLanding } from "./ModernMainStLanding";
import { OperationsLanding } from "./OperationsLanding";
import { TechToolsLanding } from "./TechToolsLanding";
import { UserDashboard } from "./UserDashboard";
import { AdminPanel } from "./AdminPanel";
import { Chatbot } from "./components/Chatbot";
import { MobileNav } from "./components/MobileNav";
import { EmailCapturePopup } from "./components/EmailCapturePopup";
import { ComparisonBar } from "./components/ComparisonBar";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { useState } from "react";

type ActivePage = "growth" | "operations" | "tech-tools" | "dashboard" | "admin";

export default function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [activePage, setActivePage] = useState<ActivePage>("growth");

  const scrollToSubscription = () => {
    const subscriptionSection = document.querySelector('#subscription-section');
    if (subscriptionSection) {
      subscriptionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--light-gray-bg)' }}>
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePageChange("growth")}>
                <div className="text-2xl">🏢</div>
                <h1 className="text-xl font-bold text-gray-900">Main St. AI</h1>
              </div>

              <nav className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => handlePageChange("growth")}
                  className={`font-medium pb-1 transition-all ${
                    activePage === "growth"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-300"
                  }`}
                  style={activePage === "growth" ? { color: 'var(--primary-green)' } : {}}
                >
                  Growth
                </button>
                <button
                  onClick={() => handlePageChange("operations")}
                  className={`font-medium pb-1 transition-all ${
                    activePage === "operations"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-300"
                  }`}
                  style={activePage === "operations" ? { color: 'var(--primary-green)' } : {}}
                >
                  Operations
                </button>
                <button
                  onClick={() => handlePageChange("tech-tools")}
                  className={`font-medium pb-1 transition-all ${
                    activePage === "tech-tools"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-300"
                  }`}
                  style={activePage === "tech-tools" ? { color: 'var(--primary-green)' } : {}}
                >
                  Tech & Tools
                </button>
                <button
                  onClick={scrollToSubscription}
                  className="text-gray-700 hover:text-gray-900 font-medium hover:border-b-2 hover:border-gray-300 pb-1 transition-all"
                >
                  Pricing
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <DarkModeToggle />

              <Unauthenticated>
                <button
                  onClick={() => setShowSignIn(true)}
                  className="hidden sm:block px-6 py-2 rounded-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={scrollToSubscription}
                  className="hidden sm:block px-6 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                  style={{ backgroundColor: 'var(--primary-green)' }}
                >
                  Join Pro
                </button>
              </Unauthenticated>

              <Authenticated>
                <button
                  onClick={() => handlePageChange("dashboard")}
                  className="hidden sm:block px-6 py-2 rounded-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => handlePageChange("admin")}
                  className="hidden sm:block px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-lg transition-all"
                >
                  Admin
                </button>
              </Authenticated>

              <MobileNav
                activePage={activePage}
                onPageChange={handlePageChange}
                onScrollToPricing={scrollToSubscription}
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Content showSignIn={showSignIn} setShowSignIn={setShowSignIn} activePage={activePage} />
      </main>

      <Toaster />
      <Chatbot />
      <EmailCapturePopup />
      <ComparisonBar />
    </div>
  );
}

function Content({
  showSignIn,
  setShowSignIn,
  activePage
}: {
  showSignIn: boolean;
  setShowSignIn: (show: boolean) => void;
  activePage: ActivePage;
}) {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: 'var(--primary-green)' }}></div>
      </div>
    );
  }

  // Show sign in modal when requested
  if (showSignIn && !loggedInUser) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowSignIn(false)}>
        <div className="max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome to Main St. AI</h2>
              <button
                onClick={() => setShowSignIn(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
    );
  }

  // Render the appropriate landing page based on active page
  if (activePage === "dashboard") {
    return <UserDashboard />;
  }

  if (activePage === "operations") {
    return <OperationsLanding />;
  }

  if (activePage === "tech-tools") {
    return <TechToolsLanding />;
  }

  // Default to growth page
  return <ModernMainStLanding />;
}

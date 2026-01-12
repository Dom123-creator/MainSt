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
import { NotificationCenter } from "./components/NotificationCenter";
import { NewsletterArchive } from "./components/NewsletterArchive";
import { ProfileSettings } from "./components/ProfileSettings";
import { useState } from "react";

type ActivePage = "growth" | "operations" | "tech-tools" | "dashboard" | "admin" | "newsletter" | "settings";

export default function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [activePage, setActivePage] = useState<ActivePage>("growth");


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
                  onClick={() => handlePageChange("newsletter")}
                  className={`font-medium pb-1 transition-all ${
                    activePage === "newsletter"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-300"
                  }`}
                  style={activePage === "newsletter" ? { color: 'var(--primary-green)' } : {}}
                >
                  Newsletter
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <DarkModeToggle />

              {/* Notification Center */}
              <Authenticated>
                <NotificationCenter />
              </Authenticated>

              <Unauthenticated>
                <button
                  onClick={() => setShowSignIn(true)}
                  className="hidden sm:block px-6 py-2 rounded-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => setShowSignIn(true)}
                  className="hidden sm:block px-6 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                  style={{ backgroundColor: 'var(--primary-green)' }}
                >
                  Sign Up
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
                  onClick={() => handlePageChange("settings")}
                  className="hidden sm:block p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  title="Settings"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
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

  if (activePage === "admin") {
    return <AdminPanel />;
  }

  if (activePage === "newsletter") {
    return <NewsletterArchive />;
  }

  if (activePage === "settings") {
    return <ProfileSettings />;
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

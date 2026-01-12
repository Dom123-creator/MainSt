import { useState } from "react";
import { Authenticated, Unauthenticated } from "convex/react";

type ActivePage = "growth" | "operations" | "tech-tools" | "dashboard" | "admin" | "newsletter" | "settings";

interface MobileNavProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
}

export function MobileNav({ activePage, onPageChange }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (page: ActivePage) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold text-gray-900">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => handlePageChange("growth")}
              className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                activePage === "growth"
                  ? "bg-green-50 text-green-600 border-l-4 border-green-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              🚀 Growth
            </button>
            <button
              onClick={() => handlePageChange("operations")}
              className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                activePage === "operations"
                  ? "bg-green-50 text-green-600 border-l-4 border-green-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              ⚙️ Operations
            </button>
            <button
              onClick={() => handlePageChange("tech-tools")}
              className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                activePage === "tech-tools"
                  ? "bg-green-50 text-green-600 border-l-4 border-green-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              🛠️ Tech & Tools
            </button>
            <button
              onClick={() => handlePageChange("newsletter")}
              className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                activePage === "newsletter"
                  ? "bg-green-50 text-green-600 border-l-4 border-green-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              📰 Newsletter
            </button>
          </nav>

          {/* Authenticated User Links */}
          <Authenticated>
            <div className="my-6 border-t border-gray-200"></div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handlePageChange("dashboard")}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  activePage === "dashboard"
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                📊 Dashboard
              </button>
              <button
                onClick={() => handlePageChange("admin")}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  activePage === "admin"
                    ? "bg-purple-50 text-purple-600 border-l-4 border-purple-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                👑 Admin
              </button>
              <button
                onClick={() => handlePageChange("settings")}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  activePage === "settings"
                    ? "bg-gray-50 text-gray-700 border-l-4 border-gray-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                ⚙️ Settings
              </button>
            </div>
          </Authenticated>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Additional Links */}
          <div className="flex flex-col gap-3">
            <a
              href="#about"
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="#help"
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Help Center
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

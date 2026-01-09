import { useState } from "react";
import { useComparison } from "../contexts/ComparisonContext";
import { ComparisonModal } from "./ComparisonModal";

export function ComparisonBar() {
  const { comparisonTools, removeFromComparison, clearComparison } = useComparison();
  const [showModal, setShowModal] = useState(false);

  if (comparisonTools.length === 0) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slideUp">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-4 max-w-4xl">
          <div className="flex items-center gap-4">
            {/* Tool Pills */}
            <div className="flex items-center gap-2 flex-1">
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                Compare ({comparisonTools.length}/3):
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {comparisonTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 group hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <span className="text-sm font-medium text-gray-900 max-w-[150px] truncate">
                      {tool.title}
                    </span>
                    <button
                      onClick={() => removeFromComparison(tool.id)}
                      className="ml-1 p-1 hover:bg-white rounded transition-colors"
                      aria-label={`Remove ${tool.title} from comparison`}
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
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
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={clearComparison}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowModal(true)}
                disabled={comparisonTools.length < 2}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Compare Now
              </button>
            </div>
          </div>

          {comparisonTools.length < 2 && (
            <p className="text-xs text-gray-500 mt-2 text-center">
              Add at least 2 tools to start comparing
            </p>
          )}
        </div>
      </div>

      {showModal && <ComparisonModal onClose={() => setShowModal(false)} />}
    </>
  );
}

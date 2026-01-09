import { useComparison } from "../contexts/ComparisonContext";

interface ComparisonModalProps {
  onClose: () => void;
}

export function ComparisonModal({ onClose }: ComparisonModalProps) {
  const { comparisonTools, removeFromComparison, clearComparison } = useComparison();

  if (comparisonTools.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-7xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tool Comparison</h2>
            <p className="text-sm text-gray-600 mt-1">
              Compare features, pricing, and setup requirements
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={clearComparison}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-500"
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
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Tool Cards Row */}
            <div className="grid gap-4 p-6 bg-gray-50" style={{ gridTemplateColumns: `repeat(${comparisonTools.length}, 1fr)` }}>
              {comparisonTools.map((tool) => (
                <div key={tool.id} className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{tool.icon}</div>
                    <button
                      onClick={() => removeFromComparison(tool.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Remove from comparison"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                  {tool.isPro && (
                    <span className="inline-block mt-3 px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      PRO
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="p-6 space-y-4">
              {/* Setup Time */}
              <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${comparisonTools.length}, 1fr)` }}>
                <div className="font-semibold text-gray-900 flex items-center">
                  <span className="mr-2">⏱️</span>
                  Setup Time
                </div>
                {comparisonTools.map((tool) => (
                  <div key={tool.id} className="text-gray-700 bg-gray-50 rounded-lg p-3 text-center font-medium">
                    {tool.setupTime || "N/A"}
                  </div>
                ))}
              </div>

              {/* ROI */}
              <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${comparisonTools.length}, 1fr)` }}>
                <div className="font-semibold text-gray-900 flex items-center">
                  <span className="mr-2">📈</span>
                  Expected ROI
                </div>
                {comparisonTools.map((tool) => (
                  <div key={tool.id} className="text-gray-700 bg-gray-50 rounded-lg p-3 text-center font-medium">
                    {tool.roi || "N/A"}
                  </div>
                ))}
              </div>

              {/* Cost */}
              <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${comparisonTools.length}, 1fr)` }}>
                <div className="font-semibold text-gray-900 flex items-center">
                  <span className="mr-2">💰</span>
                  Cost
                </div>
                {comparisonTools.map((tool) => (
                  <div key={tool.id} className="text-gray-700 bg-gray-50 rounded-lg p-3 text-center font-medium">
                    {tool.cost || "N/A"}
                  </div>
                ))}
              </div>

              {/* Category */}
              <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${comparisonTools.length}, 1fr)` }}>
                <div className="font-semibold text-gray-900 flex items-center">
                  <span className="mr-2">📂</span>
                  Category
                </div>
                {comparisonTools.map((tool) => (
                  <div key={tool.id} className="text-gray-700 bg-gray-50 rounded-lg p-3 text-center">
                    <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium border border-gray-200">
                      {tool.category || "General"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${comparisonTools.length}, 1fr)` }}>
                <div className="font-semibold text-gray-900 flex items-center">
                  <span className="mr-2">🏷️</span>
                  Tags
                </div>
                {comparisonTools.map((tool) => (
                  <div key={tool.id} className="bg-gray-50 rounded-lg p-3">
                    {tool.tags && tool.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">No tags</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Techniques Count */}
              {comparisonTools.some(tool => tool.techniques) && (
                <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${comparisonTools.length}, 1fr)` }}>
                  <div className="font-semibold text-gray-900 flex items-center">
                    <span className="mr-2">📚</span>
                    Techniques
                  </div>
                  {comparisonTools.map((tool) => (
                    <div key={tool.id} className="text-gray-700 bg-gray-50 rounded-lg p-3 text-center font-medium">
                      {tool.techniques ? `${tool.techniques.length} techniques` : "N/A"}
                    </div>
                  ))}
                </div>
              )}

              {/* Actual Tools */}
              {comparisonTools.some(tool => tool.actualTools) && (
                <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${comparisonTools.length}, 1fr)` }}>
                  <div className="font-semibold text-gray-900 flex items-center">
                    <span className="mr-2">🔧</span>
                    Recommended Tools
                  </div>
                  {comparisonTools.map((tool) => (
                    <div key={tool.id} className="bg-gray-50 rounded-lg p-3">
                      {tool.actualTools && tool.actualTools.length > 0 ? (
                        <div className="space-y-2">
                          {tool.actualTools.map((actualTool, idx) => (
                            <div key={idx} className="text-sm">
                              <a
                                href={actualTool.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 font-medium"
                              >
                                {actualTool.name}
                              </a>
                              <div className="text-xs text-gray-500">{actualTool.pricing}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm">No tools listed</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Compare up to 3 tools to find the best fit for your business
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Close Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

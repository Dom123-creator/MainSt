import { Tool } from "../data/mockData";
import { SocialShare } from "./SocialShare";
import { ToolReviews } from "./ToolReviews";
import { ROICalculator } from "./ROICalculator";
import { ProgressTracker } from "./ProgressTracker";
import { useState } from "react";

interface ToolModalProps {
  tool: Tool;
  onClose: () => void;
  onGetStarted?: () => void;
}

export function ToolModal({ tool, onClose, onGetStarted }: ToolModalProps) {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{tool.icon}</div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">{tool.title}</h2>
                {tool.isPro && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
                    PRO
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-1">{tool.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {tool.longDescription && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-700">{tool.longDescription}</p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4">
            {tool.setupTime && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-xs text-gray-600 mb-1">Setup Time</div>
                <div className="text-lg font-semibold text-gray-900">{tool.setupTime}</div>
              </div>
            )}
            {tool.roi && (
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-xs text-gray-600 mb-1">ROI</div>
                <div className="text-lg font-semibold text-green-700">{tool.roi}</div>
              </div>
            )}
            {tool.cost && (
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-xs text-gray-600 mb-1">Cost</div>
                <div className="text-lg font-semibold text-blue-700">{tool.cost}</div>
              </div>
            )}
          </div>

          {tool.benefits && tool.benefits.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.tags && tool.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-blue-700 bg-blue-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {tool.techniques && tool.techniques.length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📚 Proven Techniques & Strategies
              </h3>
              <div className="space-y-6">
                {tool.techniques.map((technique, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {idx + 1}. {technique.title}
                    </h4>
                    <p className="text-gray-700 mb-4">{technique.description}</p>

                    {technique.steps && technique.steps.length > 0 && (
                      <div className="mb-4">
                        <p className="font-semibold text-gray-900 mb-2">Steps:</p>
                        <ol className="space-y-2 ml-4">
                          {technique.steps.map((step, stepIdx) => (
                            <li key={stepIdx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="font-bold text-blue-600">{stepIdx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {technique.example && (
                      <div className="bg-white bg-opacity-60 rounded-lg p-4 mb-3">
                        <p className="text-xs font-semibold text-gray-600 mb-1">💡 Example:</p>
                        <p className="text-sm text-gray-800">{technique.example}</p>
                      </div>
                    )}

                    {technique.expectedResult && (
                      <div className="bg-green-100 rounded-lg p-3">
                        <p className="text-xs font-semibold text-green-800 mb-1">✅ Expected Result:</p>
                        <p className="text-sm text-green-900 font-semibold">{technique.expectedResult}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.caseStudies && tool.caseStudies.length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏆 Success Stories
              </h3>
              <div className="space-y-4">
                {tool.caseStudies.map((study, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{study.company}</h4>
                        <p className="text-sm text-gray-600">{study.industry}</p>
                      </div>
                      <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Case Study
                      </span>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-semibold text-red-700 mb-1">⚠️ Challenge:</p>
                      <p className="text-sm text-gray-700">{study.challenge}</p>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-semibold text-blue-700 mb-1">💡 Solution:</p>
                      <p className="text-sm text-gray-700">{study.solution}</p>
                    </div>

                    <div className="bg-white bg-opacity-60 rounded-lg p-4">
                      <p className="text-xs font-semibold text-green-700 mb-2">📈 Results:</p>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIdx) => (
                          <li key={resultIdx} className="text-sm text-gray-800 flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span className="font-semibold">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.actualTools && tool.actualTools.length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🚀 Recommended Tools to Get Started
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Here are the top-rated tools you can use right now:
              </p>
              <div className="space-y-3">
                {tool.actualTools.map((actualTool, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">
                            {actualTool.name}
                          </h4>
                          {actualTool.rating && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                              ⭐ {actualTool.rating}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          {actualTool.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-green-700">
                            💰 {actualTool.pricing}
                          </span>
                          <a
                            href={actualTool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity text-sm"
                            style={{ backgroundColor: 'var(--primary-green)' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit Website
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROI Calculator Section */}
          <div className="border-t pt-6">
            <ROICalculator
              toolTitle={tool.title}
              defaultHoursSaved={10}
              defaultHourlyRate={50}
              defaultMonthlyCost={100}
            />
          </div>

          {/* Progress Tracker Section */}
          <div className="border-t pt-6">
            <ProgressTracker
              toolId={tool.id}
              toolTitle={tool.title}
              toolIcon={tool.icon}
            />
          </div>

          {/* Social Share Section */}
          <div className="border-t pt-6">
            <SocialShare
              title={tool.title}
              description={tool.description}
            />
          </div>

          {/* Reviews & Ratings Section */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Reviews & Ratings</h3>
              <button
                onClick={() => setShowReviews(!showReviews)}
                className="text-sm text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
              >
                {showReviews ? (
                  <>
                    Hide Reviews
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Show Reviews
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
            {showReviews && <ToolReviews toolId={tool.id} />}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => {
                if (onGetStarted) {
                  onGetStarted();
                }
              }}
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--primary-green)' }}
            >
              Get Started
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

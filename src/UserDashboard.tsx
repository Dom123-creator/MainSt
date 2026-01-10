import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { problemTools, techRyboksTools } from "./data/mockData";
import { useState } from "react";
import { exportFavoritesToCSV, exportFavoritesToPDF, exportFavoritesAsJSON } from "./utils/exportFavorites";
import { toast } from "sonner";

export function UserDashboard() {
  const [activeTab, setActiveTab] = useState<"favorites" | "progress" | "subscription">("favorites");

  const userFavorites = useQuery(api.userDataManagement.getUserFavorites) || [];
  const userProgress = useQuery(api.userDataManagement.getUserProgress) || [];
  const subscription = useQuery(api.reviewsAndSubscriptions.getUserSubscription);

  const allTools = [...problemTools, ...techRyboksTools];
  const favoriteTools = allTools.filter((tool) => userFavorites.includes(tool.id));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Track your tools, progress, and subscription</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("favorites")}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === "favorites"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ❤️ Favorites ({favoriteTools.length})
            </button>
            <button
              onClick={() => setActiveTab("progress")}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === "progress"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📊 Progress ({userProgress.length})
            </button>
            <button
              onClick={() => setActiveTab("subscription")}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === "subscription"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              💳 Subscription
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {activeTab === "favorites" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Favorite Tools</h2>
                {favoriteTools.length > 0 && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        exportFavoritesToCSV(favoriteTools);
                        toast.success("Favorites exported to CSV!");
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Export CSV
                    </button>
                    <button
                      onClick={() => {
                        exportFavoritesToPDF(favoriteTools);
                        toast.success("Favorites exported to PDF!");
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Export PDF
                    </button>
                    <button
                      onClick={() => {
                        exportFavoritesAsJSON(favoriteTools);
                        toast.success("Favorites exported to JSON!");
                      }}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      Export JSON
                    </button>
                  </div>
                )}
              </div>
              {favoriteTools.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">❤️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
                  <p className="text-gray-600">Start adding tools to your favorites to see them here</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteTools.map((tool) => (
                    <div key={tool.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tool.description}</p>
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
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "progress" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Progress</h2>
              {userProgress.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No progress tracked yet</h3>
                  <p className="text-gray-600">Start implementing tools to track your progress</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {userProgress.map((progress) => {
                    const tool = allTools.find((t) => t.id === progress.toolId);
                    if (!tool) return null;

                    const percentage = (progress.completedSteps.length / progress.totalSteps) * 100;

                    return (
                      <div key={progress._id} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="text-4xl">{tool.icon}</div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{tool.title}</h3>
                              <p className="text-sm text-gray-600">
                                {progress.completedSteps.length} of {progress.totalSteps} steps completed
                              </p>
                            </div>
                          </div>
                          {progress.completed && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                              ✓ Completed
                            </span>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="mt-2 text-sm text-gray-600 text-right">{Math.round(percentage)}%</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === "subscription" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscription Details</h2>
              {subscription ? (
                <div className="space-y-6">
                  {/* Current Plan */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-gray-900 capitalize mb-1">
                          {subscription.plan}
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          subscription.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {subscription.status}
                        </div>
                      </div>
                      {subscription.plan !== "free" && (
                        <button className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                          Manage Subscription
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Billing Info */}
                  {subscription.plan !== "free" && (
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Current Period Start:</span>
                          <span className="font-medium text-gray-900">
                            {new Date(subscription.currentPeriodStart).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Current Period End:</span>
                          <span className="font-medium text-gray-900">
                            {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                          </span>
                        </div>
                        {subscription.cancelAtPeriodEnd && (
                          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-sm text-yellow-800">
                              Your subscription will be cancelled at the end of the current period.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💳</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No active subscription</h3>
                  <p className="text-gray-600 mb-6">Upgrade to Pro to unlock all features</p>
                  <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    Upgrade to Pro
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

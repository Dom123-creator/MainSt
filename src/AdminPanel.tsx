import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

type AdminTab = "dashboard" | "subscribers" | "analytics" | "users";

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");

  const subscriberCount = useQuery(api.subscribersManagement.getSubscriberCount);
  const allSubscribers = useQuery(api.subscribersManagement.getAllSubscribers);
  const analyticsSummary = useQuery(api.userDataManagement.getAnalyticsSummary);
  const activeSubscriptions = useQuery(api.reviewsAndSubscriptions.getActiveSubscriptionsCount);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-600 mt-1">Manage your Main St. AI platform</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                activeTab === "dashboard"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setActiveTab("subscribers")}
              className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                activeTab === "subscribers"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📧 Subscribers ({subscriberCount?.active || 0})
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                activeTab === "analytics"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📈 Analytics
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                activeTab === "users"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              👥 Users
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Subscribers */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Subscribers</h3>
                  <span className="text-2xl">📧</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">{subscriberCount?.active || 0}</div>
                <p className="text-sm text-gray-500 mt-1">
                  {subscriberCount?.total || 0} total (including inactive)
                </p>
              </div>

              {/* Active Subscriptions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Active Subscriptions</h3>
                  <span className="text-2xl">💳</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">{activeSubscriptions || 0}</div>
                <p className="text-sm text-gray-500 mt-1">Paying customers</p>
              </div>

              {/* Total Events */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Events</h3>
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {analyticsSummary?.totalEvents || 0}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {analyticsSummary?.todayEvents || 0} today
                </p>
              </div>

              {/* Unique Users */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Unique Users</h3>
                  <span className="text-2xl">👥</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {analyticsSummary?.uniqueUsers || 0}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {analyticsSummary?.uniqueSessions || 0} sessions
                </p>
              </div>
            </div>

            {/* Event Breakdown */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Event Breakdown</h3>
              {analyticsSummary?.eventCounts && Object.keys(analyticsSummary.eventCounts).length > 0 ? (
                <div className="space-y-3">
                  {Object.entries(analyticsSummary.eventCounts).map(([event, count]) => (
                    <div key={event} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium capitalize">
                        {event.replace(/_/g, " ")}
                      </span>
                      <span className="text-gray-900 font-bold">{count}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No events tracked yet</p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="px-4 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-green-500 hover:text-green-600 transition-colors">
                  📧 Export Subscribers
                </button>
                <button className="px-4 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-green-500 hover:text-green-600 transition-colors">
                  📊 Download Analytics
                </button>
                <button className="px-4 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-green-500 hover:text-green-600 transition-colors">
                  ⚙️ Platform Settings
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "subscribers" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">All Subscribers</h3>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Export CSV
              </button>
            </div>

            {allSubscribers && allSubscribers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Business Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Subscribed</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allSubscribers.map((subscriber) => (
                      <tr key={subscriber._id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">{subscriber.email}</td>
                        <td className="py-3 px-4 text-gray-700">{subscriber.name || "-"}</td>
                        <td className="py-3 px-4 text-gray-700">{subscriber.businessType || "-"}</td>
                        <td className="py-3 px-4 text-gray-700">
                          {new Date(subscriber.subscribedAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              subscriber.active
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {subscriber.active ? "Active" : "Inactive"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📧</div>
                <p className="text-gray-600">No subscribers yet</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            {/* Analytics Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Analytics Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Total Events</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {analyticsSummary?.totalEvents || 0}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Unique Sessions</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {analyticsSummary?.uniqueSessions || 0}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Unique Users</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {analyticsSummary?.uniqueUsers || 0}
                  </div>
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Event Types</h3>
              {analyticsSummary?.eventCounts ? (
                <div className="space-y-4">
                  {Object.entries(analyticsSummary.eventCounts)
                    .sort(([, a], [, b]) => (b as number) - (a as number))
                    .map(([event, count]) => (
                      <div key={event}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {event.replace(/_/g, " ")}
                          </span>
                          <span className="text-sm font-bold text-gray-900">{count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{
                              width: `${
                                ((count as number) / (analyticsSummary?.totalEvents || 1)) * 100
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-500">No analytics data available</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">User Management</h3>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">User Management</h4>
              <p className="text-gray-600 mb-4">
                View and manage all registered users, their subscriptions, and activity
              </p>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                View All Users
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

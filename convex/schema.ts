import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  articles: defineTable({
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    author: v.string(),
    publishedAt: v.number(),
    featured: v.boolean(),
    readTime: v.number(),
    tags: v.array(v.string()),
  })
    .index("by_category", ["category"])
    .index("by_published", ["publishedAt"])
    .index("by_featured", ["featured"]),
  
  subscribers: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    businessType: v.optional(v.string()),
    subscribedAt: v.number(),
    active: v.boolean(),
  })
    .index("by_email", ["email"]),
  
  categories: defineTable({
    name: v.string(),
    description: v.string(),
    icon: v.string(),
    color: v.string(),
  }),

  // User favorites - tracks which tools users have favorited
  userFavorites: defineTable({
    userId: v.id("users"),
    toolId: v.string(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_tool", ["toolId"])
    .index("by_user_and_tool", ["userId", "toolId"]),

  // User progress - tracks implementation progress for each tool
  userProgress: defineTable({
    userId: v.id("users"),
    toolId: v.string(),
    completedSteps: v.array(v.number()),
    totalSteps: v.number(),
    startedAt: v.number(),
    lastUpdated: v.number(),
    completed: v.boolean(),
  })
    .index("by_user", ["userId"])
    .index("by_tool", ["toolId"])
    .index("by_user_and_tool", ["userId", "toolId"]),

  // Analytics events - tracks user actions
  analyticsEvents: defineTable({
    userId: v.optional(v.id("users")),
    sessionId: v.string(),
    eventType: v.string(), // "page_view", "tool_view", "tool_favorite", "tool_compare", "email_submit", etc.
    eventData: v.optional(v.any()),
    timestamp: v.number(),
    page: v.optional(v.string()),
    referrer: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_event_type", ["eventType"])
    .index("by_timestamp", ["timestamp"])
    .index("by_session", ["sessionId"]),

  // Tool reviews and ratings
  toolReviews: defineTable({
    userId: v.id("users"),
    toolId: v.string(),
    rating: v.number(), // 1-5
    review: v.optional(v.string()),
    verified: v.boolean(),
    helpful: v.number(),
    notHelpful: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_tool", ["toolId"])
    .index("by_user", ["userId"])
    .index("by_rating", ["rating"])
    .index("by_created", ["createdAt"]),

  // Payments and subscriptions
  subscriptions: defineTable({
    userId: v.id("users"),
    plan: v.string(), // "free", "pro", "enterprise"
    status: v.string(), // "active", "cancelled", "expired", "trial"
    stripeCustomerId: v.optional(v.string()),
    stripeSubscriptionId: v.optional(v.string()),
    currentPeriodStart: v.number(),
    currentPeriodEnd: v.number(),
    cancelAtPeriodEnd: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_stripe_customer", ["stripeCustomerId"])
    .index("by_status", ["status"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});

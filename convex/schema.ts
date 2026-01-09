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
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Add a new subscriber
export const addSubscriber = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
    businessType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      // If exists but inactive, reactivate
      if (!existing.active) {
        await ctx.db.patch(existing._id, {
          active: true,
          name: args.name || existing.name,
          businessType: args.businessType || existing.businessType,
        });
        return { success: true, reactivated: true, id: existing._id };
      }
      return { success: false, message: "Email already subscribed" };
    }

    // Create new subscriber
    const subscriberId = await ctx.db.insert("subscribers", {
      email: args.email,
      name: args.name,
      businessType: args.businessType,
      subscribedAt: Date.now(),
      active: true,
    });

    return { success: true, id: subscriberId };
  },
});

// Unsubscribe
export const unsubscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const subscriber = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!subscriber) {
      return { success: false, message: "Subscriber not found" };
    }

    await ctx.db.patch(subscriber._id, { active: false });
    return { success: true };
  },
});

// Get all active subscribers (admin only)
export const getAllSubscribers = query({
  args: {},
  handler: async (ctx) => {
    const subscribers = await ctx.db
      .query("subscribers")
      .collect();

    return subscribers;
  },
});

// Get subscriber count
export const getSubscriberCount = query({
  args: {},
  handler: async (ctx) => {
    const subscribers = await ctx.db
      .query("subscribers")
      .collect();

    const active = subscribers.filter((s) => s.active).length;
    const total = subscribers.length;

    return { active, total };
  },
});

// Check if email is subscribed
export const isSubscribed = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const subscriber = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    return subscriber ? subscriber.active : false;
  },
});

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
    businessType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if already subscribed
    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    
    if (existing) {
      if (!existing.active) {
        // Reactivate subscription
        await ctx.db.patch(existing._id, { active: true });
        return existing._id;
      }
      throw new Error("Email already subscribed");
    }
    
    return await ctx.db.insert("subscribers", {
      ...args,
      subscribedAt: Date.now(),
      active: true,
    });
  },
});

export const getCount = query({
  args: {},
  handler: async (ctx) => {
    const subscribers = await ctx.db.query("subscribers").collect();
    return subscribers.filter(s => s.active).length;
  },
});

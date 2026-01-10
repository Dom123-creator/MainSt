import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// ============= REVIEWS =============

export const addReview = mutation({
  args: {
    toolId: v.string(),
    rating: v.number(),
    review: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    // Check if user already reviewed this tool
    const existing = await ctx.db
      .query("toolReviews")
      .filter((q) => q.and(q.eq(q.field("userId"), userId), q.eq(q.field("toolId"), args.toolId)))
      .first();

    if (existing) {
      // Update existing review
      await ctx.db.patch(existing._id, {
        rating: args.rating,
        review: args.review,
        updatedAt: Date.now(),
      });
      return { success: true, id: existing._id, updated: true };
    }

    // Create new review
    const reviewId = await ctx.db.insert("toolReviews", {
      userId,
      toolId: args.toolId,
      rating: args.rating,
      review: args.review,
      verified: false, // Admin can verify later
      helpful: 0,
      notHelpful: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return { success: true, id: reviewId, updated: false };
  },
});

export const getToolReviews = query({
  args: { toolId: v.string() },
  handler: async (ctx, args) => {
    const reviews = await ctx.db
      .query("toolReviews")
      .withIndex("by_tool", (q) => q.eq("toolId", args.toolId))
      .collect();

    return reviews;
  },
});

export const getToolRating = query({
  args: { toolId: v.string() },
  handler: async (ctx, args) => {
    const reviews = await ctx.db
      .query("toolReviews")
      .withIndex("by_tool", (q) => q.eq("toolId", args.toolId))
      .collect();

    if (reviews.length === 0) {
      return { average: 0, count: 0 };
    }

    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = total / reviews.length;

    return {
      average: Math.round(average * 10) / 10,
      count: reviews.length,
    };
  },
});

// Alias for addReview
export const createReview = addReview;

export const getAverageRating = query({
  args: { toolId: v.string() },
  handler: async (ctx, args) => {
    const reviews = await ctx.db
      .query("toolReviews")
      .withIndex("by_tool", (q) => q.eq("toolId", args.toolId))
      .collect();

    if (reviews.length === 0) {
      return { average: 0, count: 0, breakdown: {} };
    }

    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = total / reviews.length;

    // Calculate breakdown by rating
    const breakdown: Record<number, number> = {};
    for (let i = 1; i <= 5; i++) {
      breakdown[i] = reviews.filter(r => r.rating === i).length;
    }

    return {
      average: Math.round(average * 10) / 10,
      count: reviews.length,
      breakdown,
    };
  },
});

export const markReviewHelpful = mutation({
  args: {
    reviewId: v.id("toolReviews"),
    helpful: v.boolean(),
  },
  handler: async (ctx, args) => {
    const review = await ctx.db.get(args.reviewId);
    if (!review) throw new Error("Review not found");

    if (args.helpful) {
      await ctx.db.patch(args.reviewId, {
        helpful: review.helpful + 1,
      });
    } else {
      await ctx.db.patch(args.reviewId, {
        notHelpful: review.notHelpful + 1,
      });
    }

    return { success: true };
  },
});

// ============= SUBSCRIPTIONS =============

export const createSubscription = mutation({
  args: {
    plan: v.string(),
    stripeCustomerId: v.optional(v.string()),
    stripeSubscriptionId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    // Check if user already has a subscription
    const existing = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    const now = Date.now();
    const oneMonthLater = now + 30 * 24 * 60 * 60 * 1000;

    if (existing) {
      // Update existing subscription
      await ctx.db.patch(existing._id, {
        plan: args.plan,
        status: "active",
        stripeCustomerId: args.stripeCustomerId,
        stripeSubscriptionId: args.stripeSubscriptionId,
        currentPeriodStart: now,
        currentPeriodEnd: oneMonthLater,
        cancelAtPeriodEnd: false,
        updatedAt: now,
      });
      return { success: true, id: existing._id };
    }

    // Create new subscription
    const subscriptionId = await ctx.db.insert("subscriptions", {
      userId,
      plan: args.plan,
      status: "active",
      stripeCustomerId: args.stripeCustomerId,
      stripeSubscriptionId: args.stripeSubscriptionId,
      currentPeriodStart: now,
      currentPeriodEnd: oneMonthLater,
      cancelAtPeriodEnd: false,
      createdAt: now,
      updatedAt: now,
    });

    return { success: true, id: subscriptionId };
  },
});

export const getUserSubscription = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const userId = identity.subject as any;

    const subscription = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    return subscription;
  },
});

export const cancelSubscription = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    const subscription = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    if (!subscription) {
      return { success: false, message: "No subscription found" };
    }

    await ctx.db.patch(subscription._id, {
      cancelAtPeriodEnd: true,
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});

export const getActiveSubscriptionsCount = query({
  args: {},
  handler: async (ctx) => {
    const subscriptions = await ctx.db
      .query("subscriptions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    return subscriptions.length;
  },
});

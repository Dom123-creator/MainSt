import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// ============= FAVORITES =============

export const addFavorite = mutation({
  args: {
    toolId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    // Check if already favorited
    const existing = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_and_tool", (q) => q.eq("userId", userId).eq("toolId", args.toolId))
      .first();

    if (existing) {
      return { success: false, message: "Already favorited" };
    }

    const favoriteId = await ctx.db.insert("userFavorites", {
      userId,
      toolId: args.toolId,
      createdAt: Date.now(),
    });

    return { success: true, id: favoriteId };
  },
});

export const removeFavorite = mutation({
  args: { toolId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    const favorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_and_tool", (q) => q.eq("userId", userId).eq("toolId", args.toolId))
      .first();

    if (!favorite) {
      return { success: false, message: "Favorite not found" };
    }

    await ctx.db.delete(favorite._id);
    return { success: true };
  },
});

export const getUserFavorites = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const userId = identity.subject as any;

    const favorites = await ctx.db
      .query("userFavorites")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return favorites.map((f) => f.toolId);
  },
});

// ============= PROGRESS TRACKING =============

export const updateProgress = mutation({
  args: {
    toolId: v.string(),
    completedSteps: v.array(v.number()),
    totalSteps: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    const existing = await ctx.db
      .query("userProgress")
      .withIndex("by_user_and_tool", (q) => q.eq("userId", userId).eq("toolId", args.toolId))
      .first();

    const completed = args.completedSteps.length === args.totalSteps;

    if (existing) {
      await ctx.db.patch(existing._id, {
        completedSteps: args.completedSteps,
        totalSteps: args.totalSteps,
        lastUpdated: Date.now(),
        completed,
      });
      return { success: true, id: existing._id };
    }

    const progressId = await ctx.db.insert("userProgress", {
      userId,
      toolId: args.toolId,
      completedSteps: args.completedSteps,
      totalSteps: args.totalSteps,
      startedAt: Date.now(),
      lastUpdated: Date.now(),
      completed,
    });

    return { success: true, id: progressId };
  },
});

export const getUserProgress = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const userId = identity.subject as any;

    const progress = await ctx.db
      .query("userProgress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return progress;
  },
});

export const getToolProgress = query({
  args: { toolId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const userId = identity.subject as any;

    const progress = await ctx.db
      .query("userProgress")
      .withIndex("by_user_and_tool", (q) => q.eq("userId", userId).eq("toolId", args.toolId))
      .first();

    return progress;
  },
});

// ============= ANALYTICS =============

export const trackEvent = mutation({
  args: {
    eventType: v.string(),
    eventData: v.optional(v.any()),
    sessionId: v.string(),
    page: v.optional(v.string()),
    referrer: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const userId = identity ? (identity.subject as any) : undefined;

    const eventId = await ctx.db.insert("analyticsEvents", {
      userId,
      sessionId: args.sessionId,
      eventType: args.eventType,
      eventData: args.eventData,
      timestamp: Date.now(),
      page: args.page,
      referrer: args.referrer,
      userAgent: args.userAgent,
    });

    return { success: true, id: eventId };
  },
});

export const getAnalytics = query({
  args: {
    startDate: v.optional(v.number()),
    endDate: v.optional(v.number()),
    eventType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let events;

    if (args.eventType) {
      const eventType = args.eventType;
      events = await ctx.db
        .query("analyticsEvents")
        .withIndex("by_event_type", (q) => q.eq("eventType", eventType))
        .collect();
    } else {
      events = await ctx.db.query("analyticsEvents").collect();
    }

    // Filter by date range if provided
    if (args.startDate) {
      events = events.filter((e) => e.timestamp >= args.startDate!);
    }
    if (args.endDate) {
      events = events.filter((e) => e.timestamp <= args.endDate!);
    }

    return events;
  },
});

export const getAnalyticsSummary = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query("analyticsEvents").collect();

    const totalEvents = events.length;
    const uniqueSessions = new Set(events.map((e) => e.sessionId)).size;
    const uniqueUsers = new Set(events.filter((e) => e.userId).map((e) => e.userId)).size;

    const eventCounts: Record<string, number> = {};
    events.forEach((e) => {
      eventCounts[e.eventType] = (eventCounts[e.eventType] || 0) + 1;
    });

    // Get today's events
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayEvents = events.filter((e) => e.timestamp >= today.getTime());

    return {
      totalEvents,
      uniqueSessions,
      uniqueUsers,
      eventCounts,
      todayEvents: todayEvents.length,
    };
  },
});

"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

// Initialize Chimoney SDK
const getChimoney = () => {
  const apiKey = process.env.CHIMONEY_API_KEY;
  if (!apiKey) {
    throw new Error("CHIMONEY_API_KEY is not set in environment variables");
  }

  // Using require for CommonJS module
  const chimoneyjs = require("chimoneyjs");
  return chimoneyjs(apiKey);
};

// Create Chimoney Payment Request
export const createPaymentRequest = action({
  args: {
    amount: v.number(),
    currency: v.string(),
    description: v.string(),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject;
    const email = identity.email;

    const chimoney = getChimoney();

    try {
      // Create a payment request using Chimoney
      // Note: This uses Chimoney's payment request API
      const paymentRequest = await chimoney.paymentRequests.create({
        amount: args.amount,
        currency: args.currency,
        description: args.description,
        payerEmail: email,
        metadata: {
          userId: userId,
          successUrl: args.successUrl,
          cancelUrl: args.cancelUrl,
        },
      });

      return {
        success: true,
        requestId: paymentRequest.id,
        paymentUrl: paymentRequest.paymentUrl || args.successUrl,
      };
    } catch (error: any) {
      console.error("Chimoney payment request error:", error);
      throw new Error("Failed to create payment request: " + error.message);
    }
  },
});

// Create One-Time Payment Session (Alternative to Stripe for one-time payments)
export const createOneTimePayment = action({
  args: {
    amount: v.number(),
    currency: v.string(),
    plan: v.string(),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  handler: async (ctx, args): Promise<{ success: boolean; paymentUrl: string; requestId: string }> => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject;
    const email = identity.email;

    const chimoney = getChimoney();

    try {
      // Create a one-time payment request
      const payment = await chimoney.paymentRequests.create({
        amount: args.amount,
        currency: args.currency,
        description: `${args.plan} Plan Payment`,
        payerEmail: email,
        metadata: {
          userId: userId,
          plan: args.plan,
          paymentType: "one-time",
        },
      });

      return {
        success: true,
        paymentUrl: payment.paymentUrl || args.successUrl,
        requestId: payment.id,
      };
    } catch (error: any) {
      console.error("Chimoney one-time payment error:", error);
      throw new Error("Failed to create one-time payment: " + error.message);
    }
  },
});

// Handle Successful Payment (called from webhook)
export const handleSuccessfulPayment = action({
  args: {
    requestId: v.string(),
    transactionId: v.string(),
    amount: v.number(),
    currency: v.string(),
    plan: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    // Create subscription in database (one-time payment, not recurring)
    await ctx.runMutation(api.reviewsAndSubscriptions.createSubscription, {
      plan: args.plan,
      stripeCustomerId: `chimoney_${args.transactionId}`, // Using Chimoney transaction ID
      stripeSubscriptionId: args.requestId,
    });

    // Track analytics event
    await ctx.runMutation(api.userDataManagement.trackEvent, {
      eventType: "payment_completed",
      eventData: {
        plan: args.plan,
        provider: "chimoney",
        amount: args.amount,
        currency: args.currency,
      },
      sessionId: args.requestId,
    });

    return { success: true };
  },
});

// Verify Chimoney Webhook Signature
export const verifyWebhookSignature = action({
  args: {
    payload: v.string(),
    signature: v.string(),
  },
  handler: async (ctx, args) => {
    const webhookSecret = process.env.CHIMONEY_WEBHOOK_SECRET;

    if (!webhookSecret) {
      throw new Error("CHIMONEY_WEBHOOK_SECRET is not set in environment variables");
    }

    try {
      // Verify webhook signature
      // Note: Adjust this based on Chimoney's actual webhook verification method
      const crypto = require("crypto");
      const computedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(args.payload)
        .digest("hex");

      if (computedSignature === args.signature) {
        return { valid: true, event: JSON.parse(args.payload) };
      } else {
        return { valid: false, error: "Invalid signature" };
      }
    } catch (err: any) {
      console.error("Chimoney webhook verification failed:", err.message);
      return { valid: false, error: err.message };
    }
  },
});

// Get Payment Status
export const getPaymentStatus = action({
  args: {
    requestId: v.string(),
  },
  handler: async (ctx, args) => {
    const chimoney = getChimoney();

    try {
      const status = await chimoney.paymentRequests.get(args.requestId);
      return {
        success: true,
        status: status.status,
        data: status,
      };
    } catch (error: any) {
      console.error("Failed to get payment status:", error);
      throw new Error("Failed to get payment status: " + error.message);
    }
  },
});

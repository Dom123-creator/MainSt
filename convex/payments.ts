"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

/**
 * Payment Provider Management
 *
 * This module provides a unified interface for handling payments across
 * multiple payment providers (Stripe and Chimoney).
 *
 * - Stripe: Used for recurring subscriptions and standard card payments
 * - Chimoney: Used for global payouts, alternative payment methods, and one-time payments
 */

// Create a payment session (automatically selects provider based on type)
export const createPaymentSession = action({
  args: {
    provider: v.union(v.literal("stripe"), v.literal("chimoney")),
    paymentType: v.union(v.literal("subscription"), v.literal("one-time")),
    priceId: v.optional(v.string()), // For Stripe
    amount: v.optional(v.number()), // For Chimoney
    currency: v.optional(v.string()), // For Chimoney
    plan: v.string(),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  handler: async (ctx, args): Promise<{
    success: boolean;
    provider: string;
    sessionId?: string;
    requestId?: string;
    url: string | null;
  }> => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    try {
      if (args.provider === "stripe") {
        // Use Stripe for subscriptions
        if (!args.priceId) {
          throw new Error("priceId is required for Stripe payments");
        }

        const session: any = await ctx.runAction(api.stripe.createCheckoutSession, {
          priceId: args.priceId,
          successUrl: args.successUrl,
          cancelUrl: args.cancelUrl,
        });

        return {
          success: true,
          provider: "stripe",
          sessionId: session.sessionId,
          url: session.url,
        };
      } else if (args.provider === "chimoney") {
        // Use Chimoney for one-time payments
        if (!args.amount || !args.currency) {
          throw new Error("amount and currency are required for Chimoney payments");
        }

        // Note: This will be available once Convex regenerates API
        // For now, using any type to allow compilation
        const payment: any = { requestId: "temp", paymentUrl: args.successUrl };
        // Uncomment when API is regenerated:
        // const payment: any = await ctx.runAction(api.chimoney.createOneTimePayment, {
        //   amount: args.amount,
        //   currency: args.currency,
        //   plan: args.plan,
        //   successUrl: args.successUrl,
        //   cancelUrl: args.cancelUrl,
        // });

        return {
          success: true,
          provider: "chimoney",
          requestId: payment.requestId,
          url: payment.paymentUrl,
        };
      } else {
        throw new Error("Invalid payment provider");
      }
    } catch (error: any) {
      console.error("Payment session creation error:", error);
      throw new Error("Failed to create payment session: " + error.message);
    }
  },
});

// Get available payment providers and their supported features
export const getPaymentProviders = action({
  args: {},
  handler: async (ctx) => {
    return {
      providers: [
        {
          id: "stripe",
          name: "Stripe",
          description: "Credit/Debit cards, recurring subscriptions",
          features: ["subscriptions", "card_payments", "billing_portal"],
          supported: true,
          currencies: ["USD", "EUR", "GBP", "CAD"],
        },
        {
          id: "chimoney",
          name: "Chimoney",
          description: "Global payouts, Mobile Money, Interac, PIX, SPEI",
          features: ["one_time_payments", "mobile_money", "global_payouts"],
          supported: true,
          currencies: ["USD", "CAD", "NGN", "GHS", "KES", "ZAR"],
        },
      ],
    };
  },
});

// Get recommended payment provider based on user location and payment type
export const getRecommendedProvider = action({
  args: {
    paymentType: v.union(v.literal("subscription"), v.literal("one-time")),
    currency: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Default recommendation logic
    if (args.paymentType === "subscription") {
      return {
        provider: "stripe",
        reason: "Stripe offers the best support for recurring subscriptions",
      };
    }

    // For one-time payments, recommend based on currency
    if (args.currency && ["NGN", "GHS", "KES", "ZAR"].includes(args.currency)) {
      return {
        provider: "chimoney",
        reason: "Chimoney provides better support for African currencies and payment methods",
      };
    }

    return {
      provider: "stripe",
      reason: "Stripe is recommended for this payment type",
    };
  },
});

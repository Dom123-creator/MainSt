import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const getStripe = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
  }
  return new Stripe(secretKey, {
    apiVersion: "2025-12-15.clover",
  });
};

// Create Stripe Checkout Session
export const createCheckoutSession = action({
  args: {
    priceId: v.string(),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject;
    const email = identity.email;

    const stripe = getStripe();

    try {
      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        client_reference_id: userId,
        line_items: [{
          price: args.priceId,
          quantity: 1,
        }],
        mode: 'subscription',
        success_url: args.successUrl,
        cancel_url: args.cancelUrl,
        metadata: {
          userId: userId,
        },
      });

      return {
        success: true,
        sessionId: session.id,
        url: session.url,
      };
    } catch (error: any) {
      console.error("Stripe checkout error:", error);
      throw new Error("Failed to create checkout session: " + error.message);
    }
  },
});

// Create Stripe Customer Portal Session
export const createPortalSession = action({
  args: {
    returnUrl: v.string(),
  },
  handler: async (ctx, args): Promise<{ success: boolean; url: string | null }> => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    // Get user's subscription
    const subscription: any = await ctx.runQuery(api.reviewsAndSubscriptions.getUserSubscription);

    if (!subscription?.stripeCustomerId) {
      throw new Error("No Stripe customer found");
    }

    const stripe = getStripe();

    try {
      const session: any = await stripe.billingPortal.sessions.create({
        customer: subscription.stripeCustomerId,
        return_url: args.returnUrl,
      });

      return {
        success: true,
        url: session.url,
      };
    } catch (error: any) {
      console.error("Stripe portal error:", error);
      throw new Error("Failed to create portal session: " + error.message);
    }
  },
});

// Handle successful payment (called from webhook or success page)
export const handleSuccessfulPayment = action({
  args: {
    sessionId: v.string(),
    customerId: v.string(),
    subscriptionId: v.string(),
    plan: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    // Create or update subscription in database
    await ctx.runMutation(api.reviewsAndSubscriptions.createSubscription, {
      plan: args.plan,
      stripeCustomerId: args.customerId,
      stripeSubscriptionId: args.subscriptionId,
    });

    // Track analytics event
    await ctx.runMutation(api.userDataManagement.trackEvent, {
      eventType: "subscription_created",
      eventData: { plan: args.plan },
      sessionId: args.sessionId,
    });

    return { success: true };
  },
});

// Verify Stripe webhook signature (called from HTTP endpoint)
export const verifyWebhookSignature = action({
  args: {
    payload: v.string(),
    signature: v.string(),
  },
  handler: async (ctx, args) => {
    const stripe = getStripe();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      throw new Error("STRIPE_WEBHOOK_SECRET is not set in environment variables");
    }

    try {
      const event = stripe.webhooks.constructEvent(
        args.payload,
        args.signature,
        webhookSecret
      );
      return { valid: true, event };
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return { valid: false, error: err.message };
    }
  },
});

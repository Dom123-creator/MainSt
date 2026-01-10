import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

// Note: In production, install Stripe with: npm install stripe
// For now, this provides the structure

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

    // In production, you would initialize Stripe here:
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    try {
      // Example Stripe checkout session creation
      // const session = await stripe.checkout.sessions.create({
      //   customer_email: email,
      //   client_reference_id: userId,
      //   line_items: [{
      //     price: args.priceId,
      //     quantity: 1,
      //   }],
      //   mode: 'subscription',
      //   success_url: args.successUrl,
      //   cancel_url: args.cancelUrl,
      //   metadata: {
      //     userId: userId,
      //   },
      // });

      // For now, return mock data
      return {
        success: true,
        sessionId: "mock_session_" + Date.now(),
        url: args.successUrl, // In production: session.url
      };
    } catch (error: any) {
      console.error("Stripe checkout error:", error);
      throw new Error("Failed to create checkout session");
    }
  },
});

// Create Stripe Customer Portal Session
export const createPortalSession = action({
  args: {
    returnUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const userId = identity.subject as any;

    // Get user's subscription
    const subscription = await ctx.runQuery(api.reviewsAndSubscriptions.getUserSubscription);

    if (!subscription?.stripeCustomerId) {
      throw new Error("No Stripe customer found");
    }

    // In production:
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const session = await stripe.billingPortal.sessions.create({
    //   customer: subscription.stripeCustomerId,
    //   return_url: args.returnUrl,
    // });

    return {
      success: true,
      url: args.returnUrl, // In production: session.url
    };
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
    // In production:
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    //
    // try {
    //   const event = stripe.webhooks.constructEvent(
    //     args.payload,
    //     args.signature,
    //     webhookSecret
    //   );
    //   return { valid: true, event };
    // } catch (err) {
    //   return { valid: false };
    // }

    return { valid: true, event: JSON.parse(args.payload) };
  },
});

import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

// Stripe webhook endpoint
http.route({
  path: "/stripe/webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const signature = request.headers.get("stripe-signature");
    const body = await request.text();

    if (!signature) {
      return new Response("Missing signature", { status: 400 });
    }

    try {
      // Verify webhook signature
      const verification = await ctx.runAction(api.stripe.verifyWebhookSignature, {
        payload: body,
        signature,
      });

      if (!verification.valid) {
        return new Response("Invalid signature", { status: 400 });
      }

      const event = verification.event;

      // Handle different event types
      switch (event.type) {
        case "checkout.session.completed":
          const session = event.data.object;
          // Handle successful checkout
          await ctx.runMutation(api.reviewsAndSubscriptions.createSubscription, {
            plan: session.metadata?.plan || "pro",
            stripeCustomerId: session.customer,
            stripeSubscriptionId: session.subscription,
          });
          break;

        case "customer.subscription.updated":
          // Handle subscription update
          const updatedSub = event.data.object;
          // Update subscription status in database
          break;

        case "customer.subscription.deleted":
          // Handle subscription cancellation
          const cancelledSub = event.data.object;
          // Mark subscription as cancelled
          break;

        case "invoice.payment_succeeded":
          // Handle successful payment
          break;

        case "invoice.payment_failed":
          // Handle failed payment
          break;

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      return new Response(JSON.stringify({ received: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      console.error("Webhook error:", error);
      return new Response(error.message, { status: 500 });
    }
  }),
});

export default http;

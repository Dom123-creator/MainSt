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
      if (!event) {
        return new Response("No event data", { status: 400 });
      }

      // Handle different event types
      switch (event.type) {
        case "checkout.session.completed":
          const session: any = event.data.object;
          // Handle successful checkout
          await ctx.runMutation(api.reviewsAndSubscriptions.createSubscription, {
            plan: session.metadata?.plan || "pro",
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: session.subscription as string,
          });
          break;

        case "customer.subscription.updated":
          // Handle subscription update
          const updatedSub: any = event.data.object;
          await ctx.runMutation(api.reviewsAndSubscriptions.updateSubscriptionByStripeId, {
            stripeSubscriptionId: updatedSub.id,
            status: updatedSub.status,
            currentPeriodStart: updatedSub.current_period_start * 1000, // Convert to milliseconds
            currentPeriodEnd: updatedSub.current_period_end * 1000,
            cancelAtPeriodEnd: updatedSub.cancel_at_period_end,
          });
          break;

        case "customer.subscription.deleted":
          // Handle subscription cancellation
          const cancelledSub: any = event.data.object;
          await ctx.runMutation(api.reviewsAndSubscriptions.deleteSubscriptionByStripeId, {
            stripeSubscriptionId: cancelledSub.id,
          });
          break;

        case "invoice.payment_succeeded":
          // Handle successful payment - could track revenue here
          const successInvoice: any = event.data.object;
          console.log(`Payment succeeded for subscription: ${successInvoice.subscription}`);
          // Optional: Track analytics or send confirmation email
          break;

        case "invoice.payment_failed":
          // Handle failed payment - could notify user
          const failedInvoice: any = event.data.object;
          console.log(`Payment failed for subscription: ${failedInvoice.subscription}`);
          // Optional: Send payment failure notification to user
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

// Chimoney webhook endpoint
// Note: Temporarily commented out until API is regenerated
// Uncomment after running: npm run dev:backend
/*
http.route({
  path: "/chimoney/webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const signature = request.headers.get("x-chimoney-signature");
    const body = await request.text();

    if (!signature) {
      return new Response("Missing signature", { status: 400 });
    }

    try {
      // Verify webhook signature
      const verification = await ctx.runAction(api.chimoney.verifyWebhookSignature, {
        payload: body,
        signature,
      });

      if (!verification.valid) {
        return new Response("Invalid signature", { status: 400 });
      }

      const event = verification.event;
      if (!event) {
        return new Response("No event data", { status: 400 });
      }

      // Handle different event types
      switch (event.type) {
        case "payment.completed":
        case "payment_request.completed":
          const payment: any = event.data;
          // Handle successful payment
          // Note: Adapt based on actual Chimoney webhook structure
          await ctx.runMutation(api.reviewsAndSubscriptions.createSubscription, {
            plan: payment.metadata?.plan || "pro",
            stripeCustomerId: `chimoney_${payment.transactionId}`,
            stripeSubscriptionId: payment.requestId,
          });
          break;

        case "payment.failed":
        case "payment_request.failed":
          // Handle failed payment
          const failedPayment: any = event.data;
          console.log(`Chimoney payment failed: ${failedPayment.requestId}`);
          break;

        case "payment.refunded":
          // Handle refunded payment
          const refund: any = event.data;
          console.log(`Chimoney payment refunded: ${refund.requestId}`);
          break;

        default:
          console.log(`Unhandled Chimoney event type: ${event.type}`);
      }

      return new Response(JSON.stringify({ received: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      console.error("Chimoney webhook error:", error);
      return new Response(error.message, { status: 500 });
    }
  }),
});
*/

export default http;

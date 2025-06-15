import { NextRequest } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig!, endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err);
    return new Response("Invalid webhook signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerId = session.customer as string;
    const email = session.customer_email;

    // Map customer email back to Clerk user
    if (email) {
      const users = await clerkClient.users.getUserList({ emailAddress: [email] });
      const user = users[0];

      if (user) {
        // Pick tier based on Price ID
        const priceId = session.metadata?.price_id || session?.items?.[0]?.price?.id;
        let tier = "starter";

        if (session.amount_total === 499) tier = "starter";
        else if (session.amount_total === 2499) tier = "pro";
        else if (session.amount_total === 14999) tier = "premium";

        await clerkClient.users.updateUserMetadata(user.id, {
          publicMetadata: { tier },
        });
      }
    }
  }

  return new Response("Success", { status: 200 });
}

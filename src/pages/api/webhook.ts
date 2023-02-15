import { Request, Response } from "express";
import { buffer } from "micro";
import { ServiceAccount } from "firebase-admin";
import * as admin from "firebase-admin";
import serviceAccount from "../../../permissions.json";
import Stripe from "stripe";
console.log("000");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(<ServiceAccount>serviceAccount),
    })
  : admin.app();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session: Stripe.Checkout.Session) => {
  console.log("Fulfilling order", session);
  return app
    .firestore()
    .collection("user")
    .doc(session?.metadata?.email ? session.metadata.email : "")
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total ? session.amount_total / 100 : null,
      amount_shipping: session.total_details?.amount_shipping
        ? session.total_details.amount_shipping / 100
        : null,
      images: JSON.parse(
        session.metadata?.images ? session.metadata.images : ""
      ),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} had been added to the DB`);
    });
};

export default async (req: Request, res: Response) => {
  console.log("111");
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      if (err instanceof Error) {
        console.log("ERROR", err.message);
        return res.status(400).send(`Webhook error: ${err.message}`);
      }
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

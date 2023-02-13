import { ProductProps } from "../../../types";
import { Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: Request, res: Response) {
  const { items, email } = req.body;

  const transformedItems = items.map((item: ProductProps) => ({
    price_data: {
      currency: "eur",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: { allowed_countries: ["IT", "FR", "GB"] },
    shipping_options: [
      {
        shipping_rate: "shr_1Mb7myIb9rvcEQEbtv0bJ0wD",
      },
    ],
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: ProductProps) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
}

"use client";
import React, { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import db from "../../../../firebase";
import moment from "moment";
import { OrderProps } from "../../../../types";
import { useEffect } from "react";

function Items({ orders }: { orders: OrderProps[] }) {
  const session = useSession();
  getServerSideProps();
  return (
    <div>
      {/* {orders.map((order) => (
        <>{order.id}</>
      ))} */}
      {session ? <h3>x Orders</h3> : <h3>Please sign in to see your orders</h3>}
    </div>
  );
}

export async function getServerSideProps() {
  const session = useSession();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  if (session.status === "authenticated") {
    const stripeOrders = await db
      .collection("user")
      .doc(session?.data?.user?.email ? session.data.user.email : "")
      .collection("orders")
      .orderBy("timestamp", "desc")
      .get();

    const order = await Promise.all(
      stripeOrders.docs.map(async (order) => ({
        id: order.id,
        amount: order.data().amount,
        amountShipping: order.data().amount_shipping,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(),
        items: (
          await stripe.checkout.sessions.listLineItems(order.id, {
            limit: 100,
          })
        ).data,
      }))
    );
    // eslint-disable-next-line prefer-const
    const orders: OrderProps[] = order;
    return orders;
  } else {
    //
  }
}

export default Items;

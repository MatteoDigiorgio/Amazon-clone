import React from "react";
import styles from "./Orders.module.css";
import Order from "./Order";
import db from "../../../../firebase";
import moment from "moment";
import { OrderProps } from "../../../../types";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

async function Orders() {
  const session = false;
  const orders = await getOrders();

  return (
    <div className={styles.orders_page}>
      <main>
        <h1>Your Orders</h1>

        <div className={styles.order}>
          <div>
            {session ? (
              <>
                <h3>{orders.length} Orders </h3>
                {orders.map((order) => (
                  <>
                    <Order orderProps={order} />
                  </>
                ))}
              </>
            ) : (
              <h3>Please sign in to see your orders</h3>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getOrders() {
  const session = false;

  if (session) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const stripe = await require("stripe")(process.env.STRIPE_SECRET_KEY);

    const stripeOrders = await db
      .collection("user")
      .doc(session?.user?.email ? session.user.email : "")
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
    console.log(order);
    // eslint-disable-next-line prefer-const
    const orders: OrderProps[] = order;
    return orders;
  } else {
    const orders: OrderProps[] = [];
    return orders;
  }
}

export default Orders;

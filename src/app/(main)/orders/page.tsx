import React from "react";
import styles from "./Orders.module.css";
import Order from "./Order";
import db from "../../../../firebase";
import moment from "moment";
import { OrderProps } from "../../../../types";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

async function Orders() {
  const session = false;
  const orders: OrderProps[] = [];

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

export default Orders;

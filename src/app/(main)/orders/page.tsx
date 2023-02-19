// "use client";
import React from "react";
import Items from "./Items";
import styles from "./Orders.module.css";

async function orders() {
  return (
    <div className={styles.orders_page}>
      <main>
        <h1>Your Orders</h1>

        <div className={styles.order}>
          <Items orders={[]} />
        </div>
      </main>
    </div>
  );
}

export default orders;

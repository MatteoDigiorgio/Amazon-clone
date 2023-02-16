"use client";
import React from "react";
import styles from "./Orders.module.css";
import { useSession } from "next-auth/react";

function orders() {
  const { data: session } = useSession();
  return (
    <div className={styles.orders_page}>
      <main>
        <h1>Your Orders</h1>

        {session ? (
          <h3>x Orders</h3>
        ) : (
          <h3>Please sign in to see your orders</h3>
        )}

        <div className={styles.order}></div>
      </main>
    </div>
  );
}

export default orders;

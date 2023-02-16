"use client";
import React, { useState } from "react";
import styles from "./Success.module.css";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { redirect } from "next/navigation";

function success() {
  const [redirectToOrders, setredirectToOrders] = useState(false);

  if (redirectToOrders) {
    redirect("/orders");
  }

  return (
    <div className={styles.success_page}>
      <main>
        <div className={styles.success_container}>
          <div className={styles.headline}>
            <CheckCircleIcon className={styles.checkIcon} />
            <h1>Thank you, your order has been confirmed!</h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) please press the button below
          </p>
          <button onClick={() => setredirectToOrders(true)}>
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;

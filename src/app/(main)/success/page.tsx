"use client";
import React from "react";
import styles from "./Success.module.css";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function success() {
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
          <div>
            <Link title="Orders" passHref href="/orders">
              <button>Go to my orders</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default success;

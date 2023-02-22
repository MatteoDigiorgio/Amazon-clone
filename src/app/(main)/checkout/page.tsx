"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../../slices/basketSlice";
import { ProductProps } from "../../../../types";
import styles from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Price from "../(productsFeed)/(attributes)/Price";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.stripe_public_key ? process.env.stripe_public_key : ""
);

const PrimeDayImage = () => {
  return (
    <img
      alt="Prime Day"
      src="https://links.papareact.com/ikj"
      className={styles.primeDayImage}
    />
  );
};

function Checkout() {
  const items: Array<ProductProps> = useSelector(selectItems);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items,
        email: session?.user?.email,
      }),
    });

    const data = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: data.id,
    });

    if (result?.error) alert(result.error.message);
  };

  const Products = () => {
    return (
      <div className={styles.products}>
        <h1>
          {items.length === 0 ? "Your Basket is empty" : "Shopping Basket"}
        </h1>

        {items.map((item, i) => (
          <CheckoutProduct key={i} productProps={item} />
        ))}
      </div>
    );
  };

  const Subtotal = () => {
    const total = useSelector(selectTotal);
    return (
      <>
        <h2>
          Subtotal ({items.length} items):
          <span>
            <Price price={total} />
          </span>
        </h2>

        <button
          role="link"
          onClick={createCheckoutSession}
          disabled={!session}
          className={session ? styles.button : styles.button__notSignIn}
        >
          {!session ? "Sign in to checkout" : "Proceed to checkout"}
        </button>
      </>
    );
  };

  return (
    <div className={styles.checkout}>
      <main className={styles.main}>
        <div className={styles.basket}>
          <PrimeDayImage />
          <Products />
        </div>

        <div className={styles.subtotal}>
          <Subtotal />
        </div>
      </main>
    </div>
  );
}

export default Checkout;

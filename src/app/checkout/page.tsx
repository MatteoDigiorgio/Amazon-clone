"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import { ProductProps } from "../../../types";
import styles from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Price from "../(productsFeed)/(attributes)/Price";

function Checkout() {
  const PrimeDayImage = () => {
    return (
      <img
        alt="Prime Day"
        src="https://links.papareact.com/ikj"
        className={styles.primeDayImage}
      />
    );
  };

  const items: Array<ProductProps> = useSelector(selectItems);

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
    const { data: session } = useSession();
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

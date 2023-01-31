import { useSession } from "next-auth/react";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../app/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import styles from "../styles/Checkout.module.css";
import Price from "../components/(attributes)/Price";
import { ProductProps } from "../../types";

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
      <Header />

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

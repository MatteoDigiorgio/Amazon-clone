import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import styles from "../styles/Checkout.module.css";

function Checkout() {
  const PrimeDayImage = () => {
    return (
      <img
        alt="Prime Day"
        width="auto"
        height="auto"
        src="https://links.papareact.com/ikj"
        className={styles.primeDayImage}
      />
    );
  };

  const Products = () => {
    const items = useSelector(selectItems);

    return (
      <div className={styles.products}>
        <h1>
          {items.lenght === 0 ? "Your Basket is empty" : "Shopping Basket"}
        </h1>

        {items.map((item, i) => (
          <CheckoutProduct key={i} product={item} />
        ))}
      </div>
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

        <div className={styles.subtotal}></div>
      </main>
    </div>
  );
}

export default Checkout;

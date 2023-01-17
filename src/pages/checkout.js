import React from "react";
import Header from "../components/Header";
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
    return (
      <div className={styles.products}>
        <h1>Your Shopping Basket</h1>
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

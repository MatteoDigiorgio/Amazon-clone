import React, { useState } from "react";
import styles from "../styles/CheckoutProduct.module.css";
import Price from "./ProductAttributes/Price";
import Prime from "./ProductAttributes/Prime";
import Stars from "./ProductAttributes/Stars";

function CheckoutProduct({ product }) {
  const ProductImage = () => {
    return (
      <img
        src={product.image}
        height="auto"
        width="auto"
        alt="Product"
        className={styles.image}
      />
    );
  };

  const ProductProps = () => {
    return (
      <div className={styles.props}>
        <p className={styles.title}>{product.title}</p>
        <Stars product={{ rating: product.rating, id: product.id }} />
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>
          <Price price={product.price} />
        </div>
        <Prime hasPrime={product.hasPrime} />
      </div>
    );
  };

  return (
    <div className={styles.product}>
      <ProductImage />
      <ProductProps />
    </div>
  );
}

export default CheckoutProduct;

import React, { useState } from "react";
import styles from "../styles/CheckoutProduct.module.css";
import { StarIcon } from "@heroicons/react/24/solid";

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
        <p>{product.title}</p>
        <Stars />
        <p>{product.description}</p>
      </div>
    );
  };

  const Stars = () => {
    const [rate] = useState(
      Math.round(product.rating.rate ? product.rating.rate : 0)
    );
    return Array(rate)
      .fill()
      .map((_, i) => (
        <StarIcon
          key={`Star-${product.key ? product.key : ""}-${Math.random()}`}
          className={styles.stars}
        />
      ));
  };
  return (
    <div className={styles.product}>
      <ProductImage />
      <ProductProps />
    </div>
  );
}

export default CheckoutProduct;

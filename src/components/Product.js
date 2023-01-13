import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import Currency from "react-currency-formatter";
import styles from "../styles/Product.module.css";

function Product({ product }) {
  const ProductImage = () => {
    return (
      <img
        src={product.image}
        height={200}
        width={200}
        alt="Product"
        className={styles.image}
      />
    );
  };

  const Stars = () => {
    const [rate] = useState(Math.round(product.rating.rate));
    return Array(rate)
      .fill()
      .map((_, i) => (
        <StarIcon
          key={`Star-${product.key}-${Math.random()}`}
          className={styles.stars}
        />
      ));
  };

  const Price = () => {
    return <Currency quantity={product.price} currency="EUR" />;
  };

  const Prime = () => {
    const [hasPrime] = useState(Math.random() < 0.5);
    return (
      hasPrime && (
        <div className={styles.prime}>
          <img src="https://links.papareact.com/fdw" alt="Prime shipping" />
          <p>FREE Next-day Delivery</p>
        </div>
      )
    );
  };

  return (
    <div className={styles.product}>
      <p className={styles.category}>{product.category}</p>
      <ProductImage />
      <h4 className={styles.title}>{product.title}</h4>
      <div className={styles.rating}>
        <Stars />
      </div>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.currency}>
        <Price />
      </div>
      <Prime />
      <button className={styles.button}>Add to Basket</button>
    </div>
  );
}

export default Product;

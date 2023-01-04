import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import styles from "../styles/Product.module.css";

function Product({ id, title, price, description, category, image, rating }) {
  const [rate] = useState(Math.round(rating));
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className={styles.product}>
      {/* CATEGORY */}
      <p className={styles.product__category}>{category}</p>
      {/* IMAGE */}
      <div className={styles.product__image}>
        <Image src={image} height={200} width={200} alt="Product" />
      </div>
      {/* TITLE */}
      <h4 className={styles.product__title}>{title}</h4>

      {/* STARS */}
      <div className={styles.product__rating}>
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon className={styles.product__rating__stars} />
          ))}
      </div>
      {/* DESCRIPTION */}
      <p className={styles.product__description}>{description}</p>
      {/* PRICE */}
      <div className={styles.product__currency}>
        <Currency quantity={price} currency="EUR" />
      </div>

      {/* RANDOM PRIME BADGE FOR SOME PRODUCTS */}
      {hasPrime && (
        <div className={styles.product__prime}>
          <img src="https://links.papareact.com/fdw" alt="Prime shipping" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
      {/* ADD TO BASKET BUTTON */}
      <button className={styles.product__button}>Add to Basket</button>
    </div>
  );
}

export default Product;

import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import styles from "../styles/Product.module.css";

function Product(props) {
  const [rate] = useState(Math.round(props.rating));
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className={styles.product}>
      {/* CATEGORY */}
      <p className={styles.product__category}>{props.category}</p>
      {/* IMAGE */}
      <div>
        <Image
          src={props.image}
          height={200}
          width={200}
          alt="Product"
          className={styles.product__image}
        />
      </div>
      {/* TITLE */}
      <h4 className={styles.product__title}>{props.title}</h4>

      {/* STARS */}
      <div className={styles.product__rating}>
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon className={styles.product__rating__stars} />
          ))}
      </div>
      {/* DESCRIPTION */}
      <p className={styles.product__description}>{props.description}</p>
      {/* PRICE */}
      <div className={styles.product__currency}>
        <Currency quantity={props.price} currency="EUR" />
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

import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import Currency from "react-currency-formatter";
import styles from "../styles/Product.module.css";

function Product(props) {
  const ProductImage = () => {
    return (
      <Image
        src={props.image}
        height={200}
        width={200}
        alt="Product"
        className={styles.product__image}
      />
    );
  };

  const Stars = () => {
    const [rate] = useState(Math.round(props.rating));
    return Array(rate)
      .fill()
      .map((_, i) => <StarIcon className={styles.product__rating__stars} />);
  };

  const Price = () => {
    return <Currency quantity={props.price} currency="EUR" />;
  };

  const Prime = () => {
    const [hasPrime] = useState(Math.random() < 0.5);
    return (
      hasPrime && (
        <div className={styles.product__prime}>
          <img src="https://links.papareact.com/fdw" alt="Prime shipping" />
          <p>FREE Next-day Delivery</p>
        </div>
      )
    );
  };

  return (
    <div className={styles.product}>
      <p className={styles.product__category}>{props.category}</p>
      <ProductImage />
      <h4 className={styles.product__title}>{props.title}</h4>
      <div className={styles.product__rating}>
        <Stars />
      </div>
      <p className={styles.product__description}>{props.description}</p>
      <div className={styles.product__currency}>
        <Price />
      </div>
      <Prime />
      <button className={styles.product__button}>Add to Basket</button>
    </div>
  );
}

export default Product;

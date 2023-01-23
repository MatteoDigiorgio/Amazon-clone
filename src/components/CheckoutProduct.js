import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import styles from "../styles/CheckoutProduct.module.css";
import Price from "./ProductAttributes/Price";
import Prime from "./ProductAttributes/Prime";
import Stars from "./ProductAttributes/Stars";

function CheckoutProduct({ product }) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(product));
  };

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

  const Buttons = () => {
    return (
      <div className={styles.buttons}>
        <button onClick={addItemToBasket}>Add to Basket</button>
        <button onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    );
  };

  return (
    <div className={styles.product}>
      <ProductImage />
      <ProductProps />
      <Buttons />
    </div>
  );
}

export default CheckoutProduct;

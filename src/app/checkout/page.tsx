"use client";
import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";
import styles from "./CheckoutProduct.module.css";
import { ProductProps } from "../../../types";
import Price from "../(productsFeed)/(attributes)/Price";
import Prime from "../(productsFeed)/(attributes)/Prime";
import Stars from "../(productsFeed)/(attributes)/Stars";

function Checkout({
  productProps,
}: {
  productProps: ProductProps;
}): ReactElement {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(productProps));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(productProps));
  };

  const ProductImage = () => {
    return (
      <img
        src={productProps.image}
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
        <p className={styles.title}>{productProps.title}</p>
        <Stars product={{ rating: productProps.rating, id: productProps.id }} />
        <p className={styles.description}>{productProps.description}</p>
        <div className={styles.price}>
          <Price price={productProps.price} />
        </div>
        <Prime hasPrime={productProps.hasPrime} />
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

export default Checkout;

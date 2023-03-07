"use client";
import React, { ReactElement, useEffect, useState } from "react";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../slices/basketSlice";
import Price from "./(attributes)/Price";
import Stars from "./(attributes)/Stars";
import Prime from "./(attributes)/Prime";
import { ProductProps } from "../../../../types";

// Component for rendering the product image
export const ProductImage = ({ product }: { product: ProductProps }) => {
  return (
    <img
      src={product?.image}
      height={200}
      width={200}
      alt={product.description}
      className={styles.image}
    />
  );
};

// Component for rendering the product attributes
export const ProductAttributes = ({ product }: { product: ProductProps }) => {
  return (
    <>
      <p className={styles.category}>{product.category}</p>
      <h4 className={styles.title}>{product.title}</h4>
      <Stars product={{ rating: product.rating, id: product.id }} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.currency}>
        <Price price={product.price} />
      </div>
      <Prime hasPrime={product.hasPrime} />
    </>
  );
};

// Component for rendering the add-to-basket button
export const Button = ({ product }: { product: ProductProps }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  return (
    <button
      aria-label="Add item to basket"
      onClick={addItemToBasket}
      className={styles.button}
    >
      Add to Basket
    </button>
  );
};

function Product({
  productProps,
}: {
  productProps: ProductProps;
}): ReactElement {
  const [hasPrime] = useState(Math.random() < 0.5);
  const [product, setProduct] = useState(productProps);

  // Update product state to include hasPrime value on mount
  useEffect(() => {
    setProduct({ ...productProps, hasPrime });
  }, []);

  return (
    <div title="Product" className={styles.product}>
      <ProductImage product={product} />
      <ProductAttributes product={product} />
      <Button product={product} />
    </div>
  );
}

export default Product;

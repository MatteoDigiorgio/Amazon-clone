import React from "react";
import Product from "./Product";
import styles from "../styles/ProductFeed.module.css";

function ProductFeed({ products }) {
  const Products = () => {
    return products.map((_, i) => (
      <Product key={products[i].id} productProps={products[i]} />
    ));
  };

  return (
    <div className={styles.productFeed}>
      <Products />
    </div>
  );
}

export default ProductFeed;

import React from "react";
import Product from "./Product";
import styles from "../styles/ProductFeed.module.css";

function ProductFeed({ products }) {
  const Products = () => {
    return products.map(
      ({ id, title, price, description, category, image, rating }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rating={rating.rate}
        />
      )
    );
  };

  return (
    <div className={styles.productFeed}>
      <Products />
    </div>
  );
}

export default ProductFeed;

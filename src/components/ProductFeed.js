import React from "react";
import Product from "./Product";
import styles from "../styles/ProductFeed.module.css";

function ProductFeed({ products }) {
  return (
    <div className={styles.productFeed}>
      {products.map(
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
      )}
    </div>
  );
}

export default ProductFeed;

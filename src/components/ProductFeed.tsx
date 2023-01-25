import React from "react";
import styles from "../styles/ProductFeed.module.css";
import Product from "./Product";

type ProductsProps = {
  id: number;
  key: number;
  category: string;
  image: string;
  title: string;
  rating: { rate: number; count: number };
  description: string;
  price: number;
  hasPrime?: boolean;
}[];

function ProductFeed(products: ProductsProps) {
  const Products = () => {
    return (
      <>
        {products.map((product, index) => (
          <Product key={product[index].id} productProps={product[index]} />
        ))}
      </>
    );
  };

  return (
    <div className={styles.productFeed}>
      <Products />
    </div>
  );
}

export default ProductFeed;

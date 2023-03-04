import React, { ReactElement } from "react";
import Product from "./Product";
import styles from "./ProductFeed.module.css";
import { ProductProps } from "../../../../types";

// A function that fetches products data from an API and returns an array of products
export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const productsProps: ProductProps[] = await res.json();
  return productsProps;
};

// A component that renders a list of products fetched from the API
async function Products() {
  const productsProps = await fetchProducts();
  return (
    <>
      {/* Renders a Product component for each product */}
      {productsProps.map((product) => (
        <>
          <Product key={product.id} productProps={product} />
        </>
      ))}
    </>
  );
}

// The main component that renders the Products component and applies styles
export default function ProductFeed(): ReactElement {
  return (
    <>
      <div className={styles.productFeed}>
        {/* @ts-expect-error Server Component */}
        <Products />
      </div>
    </>
  );
}

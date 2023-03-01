import React, { ReactElement } from "react";
import Product from "./Product";
import styles from "./ProductFeed.module.css";
import { ProductProps } from "../../../../types";

export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const productsProps: ProductProps[] = await res.json();
  return productsProps;
};

async function Products() {
  const productsProps = await fetchProducts();
  return (
    <>
      {productsProps.map((product) => (
        <>
          <Product key={product.id} productProps={product} />
        </>
      ))}
    </>
  );
}

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

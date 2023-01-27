import React, { ReactElement } from "react";
import Product from "./Product";
import styles from "../styles/ProductFeed.module.css";
import { ProductsProps } from "../../types";

function ProductFeed({
  productsProps,
}: {
  productsProps: ProductsProps;
}): ReactElement {
  const Products = () => {
    return (
      <>
        {productsProps?.map((productProps) => (
          <Product
            key={productProps?.product?.id}
            productProps={productProps?.product}
          />
        ))}
        ;
      </>
    );
  };

  return (
    <>
      <div className={styles.productFeed}>
        <Products />
      </div>
    </>
  );
}

export default ProductFeed;

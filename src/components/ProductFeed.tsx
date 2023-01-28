import React, { ReactElement } from "react";
import Product from "./Product";
import styles from "../styles/ProductFeed.module.css";
import { ProductProps } from "../../types";
function ProductFeed({
  productsProps,
}: {
  productsProps: Array<ProductProps>;
}): ReactElement {
  const Products = () => {
    return (
      <>
        {productsProps.map((product) => (
          <>
            <Product key={product.id} productProps={product} />
          </>
        ))}
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

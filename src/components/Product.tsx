import React, { ReactElement, useEffect, useState } from "react";
import styles from "../styles/Product.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Price from "./ProductAttributes/Price";
import Stars from "./ProductAttributes/Stars";
import Prime from "./ProductAttributes/Prime";

type Product = {
  id: number;
  key: number;
  category: string;
  image: string;
  title: string;
  rating: { rate: number; count: number };
  description: string;
  price: number;
  hasPrime?: boolean;
};

type Props = {
  productProps: Product;
};

function Product({ productProps }: Props): ReactElement {
  const [hasPrime] = useState(Math.random() < 0.5);

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    productProps.hasPrime = hasPrime;
    setProduct(productProps);
  }, []);

  const ProductImage = () => {
    return (
      <img
        src={product.image}
        height={200}
        width={200}
        alt="Product"
        className={styles.image}
      />
    );
  };

  const Button = () => {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
      dispatch(addToBasket(product));
    };

    return (
      <button onClick={addItemToBasket} className={styles.button}>
        Add to Basket
      </button>
    );
  };

  return (
    <div className={styles.product}>
      <p className={styles.category}>
        {product.category ? product.category : ""}
      </p>
      <ProductImage />
      <h4 className={styles.title}>{product.title ? product.title : ""}</h4>
      <div>
        <Stars product={{ rating: product.rating, id: product.id }} />
      </div>
      <p className={styles.description}>
        {product.description ? product.description : ""}
      </p>
      <div className={styles.currency}>
        <Price price={product.price} />
      </div>
      <Prime hasPrime={product.hasPrime} />
      <Button />
    </div>
  );
}

export default Product;

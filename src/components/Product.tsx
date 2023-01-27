import React, { useEffect, useState } from "react";
import styles from "../styles/Product.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Price from "./ProductAttributes/Price";
import Stars from "./ProductAttributes/Stars";
import Prime from "./ProductAttributes/Prime";
import { Product } from "../../types";

function Product({ productProps }: { productProps: Product }) {
  const [hasPrime] = useState(Math.random() < 0.5);
  const [product, setProduct] = useState({
    id: 0,
    key: 0,
    category: "",
    image: "",
    title: "",
    rating: { rate: 0, count: 0 },
    description: "",
    price: 0,
  });

  useEffect(() => {
    // productProps.hasPrime = hasPrime;
    setProduct(productProps);
  }, []);

  const ProductImage = () => {
    return (
      <img
        src={product?.image}
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
      <p className={styles.category}>{product.category}</p>
      <ProductImage />
      <h4 className={styles.title}>{product?.title}</h4>
      <div>
        <Stars product={{ rating: product?.rating, id: product?.id }} />
      </div>
      <p className={styles.description}>{product?.description}</p>
      <div className={styles.currency}>
        <Price price={product?.price} />
      </div>
      <Prime hasPrime={product?.hasPrime} />
      <Button />
    </div>
  );
}

export default Product;

"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Basket() {
  const Test = () => {
    const items = useSelector(selectItems);
    return (
      <Link href="checkout">
        <div className={styles.basket}>
          <p className={styles.counter}>{items.lenght}</p>
          <ShoppingCartIcon height={40} />
          <p>Basket</p>
        </div>
      </Link>
    );
  };

  return <Test />;
}

export default Basket;

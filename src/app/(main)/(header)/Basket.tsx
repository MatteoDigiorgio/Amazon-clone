"use client"
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectItems } from "../../../slices/basketSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <>
      <div className={styles.basket}>
        <p className={styles.counter}>{items.length}</p>
        <Link title="Checkout" passHref href="/checkout">
          <ShoppingCartIcon height={40} />
          <p>Basket</p>
        </Link>
      </div>
    </>
  );
}

function Basket() {
  return <Checkout />;
}

export default Basket;

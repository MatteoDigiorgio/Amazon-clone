"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectItems } from "../../../slices/basketSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Checkout() {
  
  return (
    <p>Basket</p>
  );
}

function Basket() {
  return (
  <div className={styles.basket}>
    <Link href="/checkout" passHref>
        <Checkout />
    </Link>
  </div>
  );
}

export default Basket;

import React from "react";
import { ReactElement } from "react";
import Banner from "../app/(productsFeed)/Banner";
import ProductFeed from "./(productsFeed)/ProductFeed";
import styles from "./Index.module.css";

export default function Home(): ReactElement {
  return (
    <>
      <div className={styles.index}>
        <main className={styles.main}>
          <Banner />
          <ProductFeed />
        </main>
      </div>
    </>
  );
}

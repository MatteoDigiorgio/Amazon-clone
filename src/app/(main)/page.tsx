import React from "react";
import { ReactElement } from "react";
import Banner from "../(main)/(productsFeed)/Banner";
import ProductFeed from "../(main)/(productsFeed)/ProductFeed";
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

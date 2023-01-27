import Head from "next/head";
import { ReactElement } from "react";
import { ProductsProps } from "../../types";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import styles from "../styles/Index.module.css";

export default function Home({
  products,
}: {
  products: ProductsProps;
}): ReactElement {
  return (
    <>
      <div className={styles.index}>
        <Head>
          <title>Amazon Clone</title>
        </Head>

        <Header />
        <main className={styles.main}>
          <Banner />

          <ProductFeed productsProps={products} />
        </main>
      </div>
    </>
  );
}

// Function that fetch data from fakestore api to populate the website with products
export async function getServerSideProps() {
  const products: ProductsProps = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());
  return {
    props: {
      products,
    },
  };
}

// module.exports = getServerSideProps;

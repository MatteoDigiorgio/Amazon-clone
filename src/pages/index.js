import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import styles from "../styles/Index.module.css";

export default function Home({ products }) {
  return (
    <div className={styles.index}>
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <Header />
      <main className={styles.main}>
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// Function that fetch data from fakestore api to populate the website with products
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}

// module.exports = getServerSideProps;

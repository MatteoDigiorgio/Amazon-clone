import React from "react";
import Banner from "./(productsFeed)/Banner";
import ProductFeed from "./(productsFeed)/page";
import Header from "../app/(header)/Header";
import ProvidersWrapper from "./ProvidersWrapper";
import styles from "./Index.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // .then((res) =>  const products: Array<ProductProps> = res);

  return (
    <html>
      <head>
        <title>Amazon Clone</title>
      </head>
      <body>
        <ProvidersWrapper>
          <Header />
          <main className={styles.main}>
            <Banner />
            <ProductFeed />
          </main>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}

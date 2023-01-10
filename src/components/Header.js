import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
  const AmazonLogo = () => {
    return (
      <div className={styles.header__topNav__amazonLogo}>
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          className={styles.header__topNav__amazonLogo__image}
        />
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <>
        <div className={styles.header__topNav__searchBar}>
          <input type="text" />
          <div className={styles.header__topNav__searchBar__searchIcon}>
            <MagnifyingGlassIcon width={20} height={20} />
          </div>
        </div>
      </>
    );
  };

  const RightSection = () => {
    return (
      <div className={styles.header__topNav__rightSection}>
        <div>
          <p>Hello Matteo Digiorgio</p>
          <p id={styles["bold"]}>Account & Lists</p>
        </div>

        <div>
          <p>Returns</p>
          <p id={styles["bold"]}>& Orders</p>
        </div>

        <div className={styles.header__topNav__rightSection__basket}>
          <p id={styles["counter"]}>0</p>
          <ShoppingCartIcon height={40} />
          <p>Basket</p>
        </div>
      </div>
    );
  };

  const BottomNav = () => {
    return (
      <>
        <p id={styles["bars"]}>
          <Bars3Icon height={24} />
        </p>
        <p>Prime Video</p>
        <p>Amazon Business</p>
        <p>Today's Deals</p>
      </>
    );
  };

  return (
    <header>
      {/* Top nav */}
      <div className={styles.header__topNav}>
        <AmazonLogo />
        <SearchBar />
        <RightSection />
      </div>

      {/* Bottom nav */}
      <div className={styles.header__bottomNav}>
        <BottomNav />
      </div>
    </header>
  );
}

export default Header;

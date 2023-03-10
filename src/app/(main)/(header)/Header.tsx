import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import AccountMenu from "./AccountMenu";
import Basket from "./Basket";

export const AmazonLogo = () => {
  return (
    <div className={styles.amazonLogo}>
      <Link title="Home" passHref href="/">
        <img
          alt="Amazon Logo"
          src="https://links.papareact.com/f90"
          className={styles.amazonImage}
        />
      </Link>
    </div>
  );
};

export const SearchBar = () => {
  return (
    <>
      <div className={styles.searchBar}>
        <input type="text" />
        <div className={styles.searchIcon}>
          <MagnifyingGlassIcon width={20} height={20} />
        </div>
      </div>
    </>
  );
};

export const Orders = () => {
  return (
    <div className={styles.orders}>
      <Link title="Orders" passHref href="/orders">
        <p>Returns</p>
        <p className={styles.bold}>& Orders</p>
      </Link>
    </div>
  );
};

export const BottomNav = () => {
  return (
    <>
      <p className={styles.bars}>
        <Bars3Icon height={24} />
        All
      </p>
      <p>Prime Video</p>
      <p>Amazon Business</p>
      <p>Today's Deals</p>
    </>
  );
};

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className={styles.header__topNav}>
        <AmazonLogo />
        <SearchBar />
        <div className={styles.rightSection}>
          <AccountMenu />
          <Orders />
          <Basket />
        </div>
      </div>
      {/* Bottom nav */}
      <div className={styles.header__bottomNav}>
        <BottomNav />
      </div>
    </header>
  );
}

export default Header;

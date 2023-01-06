import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className={styles.header__topNav}>
        <div className={styles.header__topNav__amazonLogo}>
          {/* Amazon logo */}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className={styles.header__topNav__amazonLogo__image}
          />
        </div>

        {/* Search bar */}
        <div className={styles.header__topNav__searchBar}>
          <input type="text" />
          <span>
            <MagnifyingGlassIcon width={20} height={20} />
          </span>
        </div>

        {/* Right section */}
        <div className={styles.header__topNav__rightSection}>
          {/* Account */}
          <div>
            <p>Hello Matteo Digiorgio</p>
            <span>Account & Lists</span>
          </div>

          {/* Orders */}
          <div>
            <p>Returns</p>
            <span>& Orders</span>
          </div>

          {/* Basket */}
          <div className={styles.header__topNav__rightSection__basket}>
            <span>0</span>

            <ShoppingCartIcon height={40} />
            <p>Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className={styles.header__bottomNav}>
        <span>
          <Bars3Icon height={24} />
        </span>
        <p>Prime Video</p>
        <p>Amazon Business</p>
        <p>Today's Deals</p>
      </div>
    </header>
  );
}

export default Header;

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
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* Account */}
          <div className="link">
            <p>Hello Matteo Digiorgio</p>
            <p className="navbarBold">Account & Lists</p>
          </div>

          {/* Orders */}
          <div className="link">
            <p>Returns</p>
            <p className="navbarBold">& Orders</p>
          </div>

          {/* Basket */}
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline navbarBold">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
      </div>
    </header>
  );
}

export default Header;

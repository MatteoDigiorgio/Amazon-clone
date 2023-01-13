import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const { data: session } = useSession();

  const AmazonLogo = () => {
    return (
      <div className={styles.amazonLogo}>
        <img
          alt="Amazon Logo"
          width="auto"
          height="auto"
          src="https://links.papareact.com/f90"
          className={styles.amazonImage}
        />
      </div>
    );
  };

  const SearchBar = () => {
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

  const RightSection = () => {
    const dropDownItemsData = [
      { page: "/", text: "Account" },
      { page: "/", text: "Orders" },
      { page: "/", text: "Wish list" },
      { page: "/", text: "Recommendations" },
      { page: "/", text: "Kindle Unlimited" },
      { page: "/", text: "Prime Membership" },
      { page: "/auth/signin", text: "LogIn" },
      { page: "/", text: "Exit" },
    ];

    const DropDownItem = (props) => {
      return (
        <li>
          <Link passHref href={props.item.page}>
            <p onClick={props.item.text === "Exit" ? signOut() : null}>
              {props.item.text}
            </p>
          </Link>
        </li>
      );
    };

    return (
      <div className={styles.rightSection}>
        <div className={styles.accountList}>
          <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
          <div className={styles.arrow}>
            <p id={styles["bold"]}>Account & Lists</p>
            <ChevronDownIcon height={15} />
          </div>

          <div className={styles.dropDownItems}>
            <ul>
              <h1 id={styles["bold"]}>My Account</h1>

              {/* If the user is logged in, the login option doesn't render. */}
              {/* Same for the exit option if the user is not logged in. */}
              {dropDownItemsData.map((item) =>
                (item.text === "LogIn" && session) ||
                (item.text === "Exit" && !session) ? (
                  ""
                ) : (
                  <DropDownItem key={item.text} item={item} />
                )
              )}
            </ul>
          </div>
        </div>

        <div>
          <p>Returns</p>
          <p id={styles["bold"]}>& Orders</p>
        </div>

        <div className={styles.basket}>
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
          All
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

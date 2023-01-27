import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import styles from "../styles/Header.module.css";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();

  const AmazonLogo = () => {
    return (
      <div className={styles.amazonLogo}>
        <Link passHref href="/">
          <img
            alt="Amazon Logo"
            width="auto"
            height="auto"
            src="https://links.papareact.com/f90"
            className={styles.amazonImage}
          />
        </Link>
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

  const Account = () => {
    const dropDownItemsData = [
      { page: "/", text: "Account" },
      { page: "/", text: "Orders" },
      { page: "/", text: "Wish list" },
      { page: "/", text: "Recommendations" },
      { page: "/", text: "Kindle Unlimited" },
      { page: "/", text: "Prime Membership" },
      { page: "/", text: "Browsing History" },
      { page: "/", text: "Video Purchases & Rentals" },
      { page: "/", text: "Content & Devices" },
      { page: "/", text: "Subscribe & Save Items" },
      { page: "/", text: "Amazon Credit Cards" },
      { page: "/", text: "Music Library" },
      { page: "/", text: "Customer Service" },
      { page: "/auth/signin", text: "LogIn" },
      { page: "/", text: "Exit" },
    ];

    const DropDownItem = (props) => {
      return (
        <li>
          <Link passHref href={props.item.page}>
            <p onClick={props.item.text === "Exit" ? () => signOut() : null}>
              {props.item.text}
            </p>
          </Link>
        </li>
      );
    };

    return (
      <div className={styles.accountList}>
        <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
        <div className={styles.arrow}>
          <p className={styles.bold}>Account & Lists</p>
          <ChevronDownIcon height={15} />
        </div>

        <div className={styles.dropDownItems}>
          <ul>
            <h1 className={styles.bold}>My Account</h1>

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
    );
  };

  const Orders = () => {
    return (
      <div>
        <p>Returns</p>
        <p className={styles.bold}>& Orders</p>
      </div>
    );
  };

  const Basket = () => {
    const items = useSelector(selectItems);

    return (
      <Link href="checkout">
        <div className={styles.basket}>
          <p className={styles.counter}>{items.lenght}</p>
          <ShoppingCartIcon height={40} />
          <p>Basket</p>
        </div>
      </Link>
    );
  };

  const BottomNav = () => {
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

  return (
    <header>
      {/* Top nav */}
      <div className={styles.header__topNav}>
        <AmazonLogo />
        <SearchBar />
        <div className={styles.rightSection}>
          <Account />
          <Orders />
          <Link passHref href="/checkout" legacyBehavior>
            <Basket />
          </Link>
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

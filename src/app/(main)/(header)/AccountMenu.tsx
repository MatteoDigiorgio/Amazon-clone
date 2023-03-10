"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { DropDownItemProps } from "../../../../types";

const dropDownItemsData: Array<DropDownItemProps> = [
  { page: "/", text: "Account" },
  { page: "/orders", text: "Orders" },
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

export const DropDownItem = (props: {
  key: string;
  item: DropDownItemProps;
}) => {
  return (
    <li>
      <Link title={`${props.item.text}`} passHref href={`${props.item.page}`}>
        <p onClick={props.item.text === "Exit" ? () => signOut() : void 0}>
          {props.item.text}
        </p>
      </Link>
    </li>
  );
};

function AccountMenu() {
  const { data: session } = useSession();

  return (
    <div className={styles.accountList}>
      <p>{session ? `Hello, ${session.user?.name}` : "Sign In"}</p>
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
}

export default AccountMenu;

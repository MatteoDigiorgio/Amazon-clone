import React from "react";
import Head from "next/head";
import { ReactElement } from "react";
import { ProductProps } from "../../types";
import Banner from "../app/(productsFeed)/Banner";
import Header from "../app/(header)/Header";
import ProductFeed from "./(productsFeed)/page";
import "./globals.css";

export default function Home(): ReactElement {
  return (
    <>
      <div>Ciao</div>
    </>
  );
}

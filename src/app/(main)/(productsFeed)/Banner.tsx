"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Banner.module.css";

function Banner() {
  const CarouselAds = () => {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            alt="Audible ORIGINAL advertisement"
            loading="lazy"
            src="https://links.papareact.com/gi1"
          />
        </div>
        <div>
          <img
            alt="prime video advertisement"
            loading="lazy"
            src="https://links.papareact.com/6ff"
          />
        </div>
        <div>
          <img
            alt="Amazon music advertisement limited time"
            loading="lazy"
            src="https://links.papareact.com/7ma"
          />
        </div>
      </Carousel>
    );
  };

  return (
    <div className={styles.banner}>
      <CarouselAds />
      {/* Container that overlay the carousel from gray to trasparent */}
      <div className={styles.banner__transparentGradient}></div>
    </div>
  );
}

export default Banner;

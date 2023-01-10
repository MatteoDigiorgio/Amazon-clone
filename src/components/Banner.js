import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Banner.module.css";

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
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="Audible ORIGINAL advertisement"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="prime video advertisement"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="Amazon music advertisement limited time"
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

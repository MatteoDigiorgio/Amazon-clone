import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      {/* Container that overlay the carousel from gray to trasparent */}
      {/* TODO: Implement transparent gradient carousel */}
      <div className={styles.banner__transparentGradient} />

      {/* Carousel for slideshow ads */}
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
    </div>
  );
}

export default Banner;

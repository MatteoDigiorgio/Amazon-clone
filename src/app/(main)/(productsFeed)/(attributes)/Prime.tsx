import React from "react";
import styles from "./Prime.module.css";

function Prime({ hasPrime }: { hasPrime: boolean }) {
  return (
    <>
      {/* If "hasPrime" is true, then show the Prime shipping message and image */}
      {hasPrime && (
        <div className={styles.prime}>
          <img src="https://links.papareact.com/fdw" alt="Prime shipping" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
    </>
  );
}

export default Prime;

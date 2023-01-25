import React from "react";
import styles from "../../styles/Prime.module.css";

function Prime({ hasPrime }) {
  return (
    <>
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

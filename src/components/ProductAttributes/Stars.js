import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import styles from "../../styles/Stars.module.css";

function Stars({ product }) {
  const [rate] = useState(
    Math.round(product.rating.rate ? product.rating.rate : 0)
  );
  return (
    <div className={styles.rating}>
      {Array(rate)
        .fill()
        .map((_, i) => (
          <StarIcon
            key={`Star-${product.id ? product.id : ""}-${Math.random()}`}
            className={styles.stars}
          />
        ))}
    </div>
  );
}

export default Stars;

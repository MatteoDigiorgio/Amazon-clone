import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./Stars.module.css";
import { ProductProps } from "../../../../../types";

function Stars({
  product,
}: {
  product: { rating: ProductProps["rating"]; id: ProductProps["id"] };
}) {
  const [rate] = useState(Math.round(product.rating.rate)); // Destructure and set initial state of rate from the rating property in product object
  return (
    <div className={styles.rating}>
      {Array(rate) // Create an array of length 'rate'
        .fill(rate)
        .map((_, i) => (
          <StarIcon
            key={`Star-${product.id}-${Math.random()}`} // Set unique key for each StarIcon
            className={styles.stars}
          />
        ))}
    </div>
  );
}

export default Stars;

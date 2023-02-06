import React from "react";

function Price({ price }: { price: number }) {
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  return <>{formatter.format(price)}</>;
}

export default Price;

import React from "react";

function Price({ price }: { price: number }) {
  // Create a formatter object that formats numbers as currency (euros) using the "de-DE" locale.
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  return <>{formatter.format(price)}</>;
}

export default Price;

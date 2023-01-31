import React from "react";
import Currency from "react-currency-formatter";

function Price({ price }: { price: number }) {
  return <Currency quantity={price ? price : 0} currency="EUR" />;
}

export default Price;

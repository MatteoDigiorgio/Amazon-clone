"use client";
import moment from "moment";
import React from "react";
import styles from "./Order.module.css";
import Price from "../../(main)/(productsFeed)/(attributes)/Price";
import { OrderProps } from "../../../../types";

function Order({ orderProps }: { orderProps: OrderProps }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.table_head}>
          <div>
            <p className={styles.table_header}>ORDER PLACED</p>
            <p>{moment.unix(orderProps.timestamp).format("DD MMM YYYY")}</p>
          </div>

          <div>
            <p className={styles.table_header}>TOTAL</p>
            <p>
              <Price price={orderProps.amount} /> - Next Day Delivery{" "}
              <Price price={orderProps.amountShipping} />
            </p>
          </div>

          <p className={styles.order_items_length}>
            {orderProps.items.length} items
          </p>

          <p className={styles.order_id}>
            ORDER # {orderProps.id.replace("cs_test_", "")}
          </p>
        </div>
        <div className={styles.table_body}>
          <div className={styles.images}>
            <div>
              {orderProps.images.map((image: string, i: number) => (
                <img
                  src={image}
                  alt={orderProps.items[i]["description"]}
                  title={orderProps.items[i]["description"]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;

/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Basket from "../src/app/(main)/(header)/Basket";
import { Store, AnyAction } from "@reduxjs/toolkit";
import mockData from "./_mocks";

describe("Basket component", () => {
  const mockStore = configureStore([]);
  let store: Store<any, AnyAction>;
  beforeEach(() => {
    store = mockStore({
      basket: {
        items: [mockData.Product, mockData.Product, mockData.Product],
      },
    });
  });

  it("should render Checkout component", () => {
    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );
    const checkout = screen.getByTitle("Checkout");
    expect(checkout).toBeInTheDocument();
  });

  it("should display the correct number of items in the basket", () => {
    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );
    const counter = screen.getByText("3");
    expect(counter).toBeInTheDocument();
  });
});

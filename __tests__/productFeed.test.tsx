/**
 * @jest-environment jsdom
 */

import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import { Products } from "../src/app/(main)/(productsFeed)/ProductFeed";
import { fetchProducts } from "../src/app/(main)/(productsFeed)/ProductFeed";
import { ProductProps } from "../types";
import mockData from "./_mocks";

jest.mock("../src/app/(main)/(productsFeed)/ProductFeed", () => ({
  fetchProducts: jest.fn(),
}));

let spy: jest.SpyInstance; // Define a spy variable to be used in the test suite

// Use the afterEach hook to reset and restore the spy after each test
afterEach(() => {
  jest.clearAllMocks();
  if (spy) {
    spy.mockReset();
    spy.mockRestore();
  }
});

describe("Product Feed", () => {
  describe("fetchProducts", () => {
    // Set up the mock implementation of fetchProducts
    (fetchProducts as jest.Mock).mockImplementation(() =>
      Promise.resolve(mockData.ProductsList)
    );

    // Create a test case that checks if the fetchProducts function returns an array of products
    it("should return an array of products", async () => {
      const products: ProductProps[] = await fetchProducts();
      expect(products.length).toBeGreaterThan(0);
    });
  });
});

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { Button, ProductImage } from "../src/app/(main)/(productsFeed)/Product";
import { addToBasket } from "../src/slices/basketSlice";
import mockData from "./_mocks";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Product component", () => {
  describe("Button", () => {
    it("should render the Add to Basket button", () => {
      const { getByRole } = render(<Button product={mockData.Product} />);
      const button = getByRole("button");
      expect(button).toBeTruthy();
    });

    it("dispatches addToBasket action when the button is clicked", () => {
      const dispatchMock = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(dispatchMock);
      const { getByRole } = render(<Button product={mockData.Product} />);
      const button = getByRole("button");
      fireEvent.click(button);
      expect(dispatchMock).toHaveBeenCalledWith(addToBasket(mockData.Product));
    });
  });

  describe("Product Image", () => {
    it("should render the product image", () => {
      const { getByRole } = render(<ProductImage product={mockData.Product} />);
      const image = getByRole("img");
      expect(image).toBeTruthy();
    });
  });
});

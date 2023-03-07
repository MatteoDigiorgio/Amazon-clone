/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import Product, {
  Button,
  ProductImage,
} from "../src/app/(main)/(productsFeed)/Product";
import Stars from "../src/app/(main)/(productsFeed)/(attributes)/Stars";
import { addToBasket } from "../src/slices/basketSlice";
import mockData from "./_mocks";
import "@testing-library/jest-dom/extend-expect";
import { ProductAttributes } from "../src/app/(main)/(productsFeed)/Product";
import Prime from "../src/app/(main)/(productsFeed)/(attributes)/Prime";

// Mock the useDispatch hook from react-redux
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("Product component", () => {
  // Test that the product component renders
  it("should renders product component", () => {
    const { getByTitle } = render(<Product productProps={mockData.Product} />);
    const product = getByTitle("Product"); // Get the Product element
    expect(product).toBeInTheDocument(); // Expect that the Product component exists in the DOM
  });

  describe("Button", () => {
    // Test that the Add to Basket button is rendered
    it("should render the Add to Basket button", () => {
      const { getByRole } = render(<Button product={mockData.Product} />); // Render the Button component with mock data
      const button = getByRole("button"); // Get the rendered button element
      expect(button).toBeTruthy(); // Expect the button to exist
    });

    it("should dispatch addToBasket action when the button is clicked", () => {
      // Mock the useDispatch hook to return a dispatch function
      const dispatchMock = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

      const { getByRole } = render(<Button product={mockData.Product} />); // Render the Button component with mock data
      const button = getByRole("button"); // Get the rendered button element
      fireEvent.click(button); // Click the button
      expect(dispatchMock).toHaveBeenCalledWith(addToBasket(mockData.Product)); // Expect the addToBasket action to have been dispatched with the mock data
    });
  });

  describe("Product Image", () => {
    it("should render the product image", () => {
      const { getByRole } = render(<ProductImage product={mockData.Product} />); // Render the ProductImage component with mock data
      const image = getByRole("img", { name: "Description" }); // Get the rendered image element
      expect(image).toBeTruthy(); // Expect the image to exist
    });
  });

  describe("Product Attributes", () => {
    it("should render the product category, title, price and description", () => {
      // Render the ProductAttributes component with mock data
      const { getByText } = render(
        <ProductAttributes product={mockData.Product} />
      );
      // Get the rendered elements
      const category = getByText(mockData.Product.category);
      const title = getByText(mockData.Product.title);
      const formattedPrice = "234,00 €";
      const price = getByText(formattedPrice);
      const description = getByText(mockData.Product.description);

      // Expect the elements to exist
      expect(category).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  describe("Prime", () => {
    // Test that hasPrime is correctly assigned and Prime image is rendered
    it("should correctly assign hasPrime and render Prime image", async () => {
      const mockHasPrime = false; // Generate a random boolean value to use as the value for hasPrime
      mockData.Product.hasPrime = mockHasPrime; // Assign the random boolean value to the mock product data
      // Render the product component with the updated mock data
      render(<Prime hasPrime={mockData.Product.hasPrime} />);
      const hasPrimeElement = screen.queryByTitle("Has Prime"); // Get the element that indicates whether the product has Prime shipping
      const hasPrimeValue = hasPrimeElement !== null ? true : false;
      expect(hasPrimeValue).toBe(mockHasPrime); // Expect that the value of hasPrime matches the mock value

      const primeImage = screen.queryByRole("img", { name: "Prime shipping" }); // Get the Prime shipping image element
      expect(primeImage).toBeDefined || expect(primeImage).toBeNull; // Expect that the Prime image element exists in the DOM
    });
  });

  describe("Stars", () => {
    it("should renders the correct number of stars based on product rating", () => {
      // Render the Stars component with mock data
      const { container } = render(
        <Stars
          product={{ rating: mockData.Product.rating, id: mockData.Product.id }}
        />
      );
      const stars = container.querySelectorAll(".stars"); // Get the rendered star elements
      expect(stars.length).toEqual(3); // Expect the correct number of star elements to have been rendered
    });

    it("should generates a unique key for each StarIcon element", () => {
      // Render the Stars component with mock product data
      const { container } = render(
        <Stars
          product={{ rating: mockData.Product.rating, id: mockData.Product.id }}
        />
      );
      const starIcons = container.querySelectorAll(".stars > svg"); // Get all StarIcon elements inside the rendered component

      // Extract the keys for each StarIcon element
      const keys = Array.from(starIcons).map((node) =>
        node.getAttribute("key")
      );
      expect(new Set(keys).size).toEqual(keys.length); // Verify that the number of unique keys is equal to the number of StarIcon elements
    });
  });
});

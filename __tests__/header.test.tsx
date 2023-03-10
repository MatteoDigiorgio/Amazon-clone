/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header, {
  AmazonLogo,
  SearchBar,
  Orders,
  BottomNav,
} from "../src/app/(main)/(header)/Header";

describe("Header", () => {
  // Test the AmazonLogo component
  describe("AmazonLogo", () => {
    it("should render the Amazon logo", () => {
      // Render the AmazonLogo component
      render(<AmazonLogo />);
      // Get the Amazon logo element by its alt text
      const logo = screen.getByAltText("Amazon Logo");
      // Assert that the logo element is in the document
      expect(logo).toBeInTheDocument();
    });
  });

  // Test the SearchBar component
  describe("SearchBar", () => {
    it("should render the search bar", () => {
      // Render the SearchBar component
      render(<SearchBar />);
      // Get the search bar element by its role
      const searchBar = screen.getByRole("textbox");
      // Assert that the search bar element is in the document
      expect(searchBar).toBeInTheDocument();
    });
  });

  // Test the Orders component
  describe("Orders", () => {
    it("should render the orders link", () => {
      // Render the Orders component
      render(<Orders />);
      // Get the orders link element by its text content
      const ordersLink = screen.getByText("Returns");
      // Assert that the orders link element is in the document
      expect(ordersLink).toBeInTheDocument();
    });
  });

  // Test the BottomNav component
  describe("BottomNav", () => {
    it("should render the bottom navigation links", () => {
      // Render the BottomNav component
      render(<BottomNav />);
      // Get each bottom navigation link element by its text content
      const allLink = screen.getByText("All");
      const videoLink = screen.getByText("Prime Video");
      const businessLink = screen.getByText("Amazon Business");
      const dealsLink = screen.getByText("Today's Deals");
      // Assert that each bottom navigation link element is in the document
      expect(allLink).toBeInTheDocument();
      expect(videoLink).toBeInTheDocument();
      expect(businessLink).toBeInTheDocument();
      expect(dealsLink).toBeInTheDocument();
    });
  });
});

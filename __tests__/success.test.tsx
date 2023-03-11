/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Success from "../src/app/(main)/success/page";

describe("Success", () => {
  // Test if the success message is rendered
  it("renders a success message", () => {
    render(<Success />);
    // Get the message
    const successMessage = screen.getByText(
      /Thank you, your order has been confirmed!/i
    );
    expect(successMessage).toBeInTheDocument(); // Expect that the message  exists in the DOM
  });

  // Test if the button that links to the orders page is rendered
  it("renders a button that links to the orders page", () => {
    render(<Success />);
    // Get the link
    const ordersLink = screen.getByRole("link", {
      name: /Go to my orders/i,
    });
    expect(ordersLink).toBeInTheDocument(); // Expect that the link exists in the DOM
    // Test if the link in the button points to the correct URL
    expect(ordersLink.getAttribute("href")).toEqual("/orders");
  });
});

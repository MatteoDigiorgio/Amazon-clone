/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Home from "../src/app/(main)/page";

jest.mock("../src/app/(main)/(productsFeed)/Banner", () => () => (
  <div>Mocked Banner</div>
));
jest.mock("../src/app/(main)/(productsFeed)/ProductFeed", () => () => (
  <div>Mocked ProductFeed</div>
));

describe("Home component", () => {
  it("should render banner and product feed", () => {
    render(<Home />);

    const banner = screen.getByText("Mocked Banner");
    const productFeed = screen.getByText("Mocked ProductFeed");
    expect(banner).toBeInTheDocument();
    expect(productFeed).toBeInTheDocument();
  });
});

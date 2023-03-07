/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Banner from "../src/app/(main)/(productsFeed)/Banner";
import "@testing-library/jest-dom/extend-expect";

describe("Banner component", () => {
  test("renders the carousel with three images", () => {
    const { getAllByAltText } = render(<Banner />);
    const images = getAllByAltText(/advertisement/);
    expect(images).toHaveLength(3 + 2); // The images are 3 but the infiniteLoop = true creates a duplicate of the first 2 images
  });

  test("renders the transparent gradient overlay", () => {
    const { getByTestId } = render(<Banner />);
    const gradient = getByTestId("Transparent gradient");
    expect(gradient).toBeInTheDocument();
  });
});

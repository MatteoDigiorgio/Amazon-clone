/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AccountMenu, {
  DropDownItem,
} from "../src/app/(main)/(header)/AccountMenu";
import { signOut, useSession as mockUseSession } from "next-auth/react";

// Creating a mock of the useSession hook from next-auth
const useSession = mockUseSession as jest.MockedFunction<typeof mockUseSession>;
jest.mock("next-auth/react");

// Testing the AccountMenu component
describe("AccountMenu", () => {
  // Testing the AccountMenu component when the user is not logged in
  it("should displays 'Sign In' and 'LogIn' when not logged in", () => {
    // Mocking the useSession hook to return null data and "loading" status
    useSession.mockReturnValueOnce({
      data: null,
      status: "loading",
    });
    // Rendering the AccountMenu component
    render(<AccountMenu />);
    // Checking if the "Sign In" and "LogIn" elements are in the document
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("LogIn")).toBeInTheDocument();
  });

  // Testing the AccountMenu component when the user is logged in
  it("should displays the user's name and 'Exit' when logged in", () => {
    // Mocking the useSession hook to return user data and "authenticated" status
    useSession.mockReturnValueOnce({
      data: {
        user: { name: "John Doe" },
        expires: "tomorrow",
      },
      status: "authenticated",
    });
    // Rendering the AccountMenu component
    render(<AccountMenu />);
    // Checking if the "Hello, John Doe" and "Exit" elements are in the document
    expect(screen.getByText("Hello, John Doe")).toBeInTheDocument();
    expect(screen.getByText("Exit")).toBeInTheDocument();
  });

  // Testing the dropdown menu
  it("should displays the dropdown menu when clicked", () => {
    // Mocking the useSession hook to return null data and "loading" status
    useSession.mockReturnValueOnce({
      data: null,
      status: "loading",
    });
    // Rendering the AccountMenu component
    render(<AccountMenu />);
    // Clicking on the "Account & Lists" button to open the dropdown menu
    const accountAndListsButton = screen.getByText("Account & Lists");
    accountAndListsButton.click();
    // Checking if all the items are in the dropdown menu
    expect(screen.getByText("My Account")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Orders")).toBeInTheDocument();
    expect(screen.getByText("Wish list")).toBeInTheDocument();
    expect(screen.getByText("Recommendations")).toBeInTheDocument();
    expect(screen.getByText("Kindle Unlimited")).toBeInTheDocument();
    expect(screen.getByText("Prime Membership")).toBeInTheDocument();
    expect(screen.getByText("Browsing History")).toBeInTheDocument();
    expect(screen.getByText("Video Purchases & Rentals")).toBeInTheDocument();
    expect(screen.getByText("Content & Devices")).toBeInTheDocument();
    expect(screen.getByText("Subscribe & Save Items")).toBeInTheDocument();
    expect(screen.getByText("Amazon Credit Cards")).toBeInTheDocument();
    expect(screen.getByText("Music Library")).toBeInTheDocument();
    expect(screen.getByText("Customer Service")).toBeInTheDocument();
  });

  // Testing the DropDownItem component
  describe("DropDownItem", () => {
    it("should renders item text and calls signOut function when Exit is clicked", () => {
      // Mocking the signOut function
      const item = { page: "/", text: "Exit" };
      const mockSignOut = signOut as jest.Mock;
      // Setting a resolved value for the mockSignOut function
      mockSignOut.mockResolvedValue({});
      // Rendering the DropDownItem component with mocked props
      render(<DropDownItem key={item.text} item={item} />);
      // Clicking on the Exit element
      const exit = screen.getByText("Exit");
      exit.click();
      // Checking if the signOut function was called
      expect(mockSignOut).toHaveBeenCalled();
    });
  });
});

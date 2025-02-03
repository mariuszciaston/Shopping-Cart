import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { it, expect } from "vitest";
import { describe } from "node:test";

describe("ErrorPage", () => {
  it("renders ErrorPage with correct content", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>,
    );

    const headingElement = screen.getByText("This page doesn't exist.");
    expect(headingElement).toBeInTheDocument();

    const linkElement = screen.getByText("Go back to the home page!");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

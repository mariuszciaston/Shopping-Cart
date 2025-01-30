import { render, screen } from "@testing-library/react";
import Main from "../Main";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("Main component", () => {
  it("renders children", () => {
    render(
      <Main>
        <div>Test</div>
      </Main>,
    );
    const child = screen.getByText("Test");
    expect(child).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Main>
        <p>children test</p>
      </Main>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

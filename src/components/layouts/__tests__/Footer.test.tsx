import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("Footer component", () => {
  it("renders the footer with correct text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/Mariusz Ciastoń 2025/);
    expect(footerText).toBeInTheDocument();
  });

  it("contains a link to GitHub with the correct href", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/mariuszciaston/",
    );
  });

  it("contains GitHub link containing icon", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link");
    const icon = githubLink.querySelector("i");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("fab", "fa-github", "fa-2x");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

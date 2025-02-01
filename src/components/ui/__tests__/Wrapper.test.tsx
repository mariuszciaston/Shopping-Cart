import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Wrapper from "../Wrapper";

describe("Wrapper Component", () => {
  it("renders the Wrapper component correctly", () => {
    const { getByText } = render(
      <Wrapper>
        <div>Test Child</div>
      </Wrapper>,
    );

    const childElement = getByText("Test Child");
    expect(childElement).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <Wrapper>
        <div>Test Child</div>
      </Wrapper>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

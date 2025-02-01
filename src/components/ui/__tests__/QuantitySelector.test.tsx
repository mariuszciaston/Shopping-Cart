import { render, screen, fireEvent } from "@testing-library/react";
import QuantitySelector from "../QuantitySelector";
import { describe, it, expect, vi } from "vitest";

describe("QuantitySelector", () => {
  let quantity = 1;
  const setQuantity = vi.fn((newQuantity) => {
    quantity = newQuantity;
  });

  const renderComponent = (quantity: number) => {
    return render(
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />,
    );
  };

  it("should render the QuantitySelector component correctly", () => {
    renderComponent(quantity);
    expect(screen.getByTestId("quantity-lower")).toBeInTheDocument();
    expect(screen.getByTestId("quantity-input")).toBeInTheDocument();
    expect(screen.getByTestId("quantity-boost")).toBeInTheDocument();
  });

  it("should increment the quantity when increment button is clicked", () => {
    renderComponent(quantity);
    const incrementButton = screen.getByTestId("quantity-boost");
    fireEvent.click(incrementButton);
    expect(setQuantity).toHaveBeenCalledWith(2);
  });

  it("should decrement the quantity when decrement button is clicked", () => {
    quantity = 2;
    renderComponent(quantity);
    const decrementButton = screen.getByTestId("quantity-lower");
    fireEvent.click(decrementButton);
    expect(setQuantity).toHaveBeenCalledWith(1);
  });

  it("should not decrement the quantity below 1", () => {
    renderComponent(quantity);
    const decrementButton = screen.getByTestId("quantity-lower");
    fireEvent.click(decrementButton);
    expect(setQuantity).toHaveBeenCalledWith(1);
  });

  it("should set the quantity to input value", () => {
    renderComponent(quantity);
    const input = screen.getByTestId("quantity-input");
    fireEvent.change(input, { target: { value: "5" } });
    expect(setQuantity).toHaveBeenCalledWith(5);
  });

  it("should not set the quantity above 99", () => {
    renderComponent(quantity);
    const input = screen.getByTestId("quantity-input");
    fireEvent.change(input, { target: { value: "100" } });
    expect(setQuantity).toHaveBeenCalledWith(99);
  });

  it("should not set the quantity below 1", () => {
    renderComponent(quantity);
    const input = screen.getByTestId("quantity-input");
    fireEvent.change(input, { target: { value: "0" } });
    expect(setQuantity).toHaveBeenCalledWith(1);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

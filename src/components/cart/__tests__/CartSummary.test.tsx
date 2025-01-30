import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartSummary from "../CartSummary";
import { describe, expect, it, vi } from "vitest";

describe("CartSummary component", () => {
  const productsData = [
    {
      id: 1,
      price: 10.0,
      image: "image1.jpg",
      title: "title1",
      description: "description1",
    },
    {
      id: 2,
      price: 20.0,
      image: "image2.jpg",
      title: "title2",
      description: "description2",
    },
    {
      id: 3,
      price: 0.44,
      image: "image3.jpg",
      title: "title3",
      description: "description3",
    },
  ];

  const itemsInCart = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
    { id: 3, quantity: 1 },
  ];

  it("renders CartSummary ", () => {
    const { container } = render(
      <CartSummary productsData={productsData} itemsInCart={itemsInCart} />,
    );

    expect(container).toBeInTheDocument();
  });

  it("calculates total amount", () => {
    render(
      <CartSummary productsData={productsData} itemsInCart={itemsInCart} />,
    );

    const totalAmount = screen.getByTestId("total-amount");
    expect(totalAmount).toHaveTextContent("$40.44");
  });

  it("calculates total amount without items in cart", () => {
    const productsData: [] = [];
    const itemsInCart: [] = [];

    render(
      <CartSummary productsData={productsData} itemsInCart={itemsInCart} />,
    );

    const totalAmount = screen.getByTestId("total-amount");
    expect(totalAmount).toHaveTextContent("$0");
  });

  it("shows unsuccessful alert when checkout button is clicked with an empty cart", () => {
    const productsData: [] = [];
    const itemsInCart: [] = [];

    render(
      <CartSummary productsData={productsData} itemsInCart={itemsInCart} />,
    );

    window.alert = vi.fn();

    const checkoutButton = screen.getByRole("button", { name: "Checkout" });
    fireEvent.click(checkoutButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Cart is empty. Please add items before checking out.",
    );
  });

  it("shows successful alert when checkout button is clicked with items in cart", () => {
    render(
      <CartSummary productsData={productsData} itemsInCart={itemsInCart} />,
    );

    window.alert = vi.fn();

    const checkoutButton = screen.getByRole("button", { name: "Checkout" });
    fireEvent.click(checkoutButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Congratulations! You successfully bought the products.",
    );
  });
});

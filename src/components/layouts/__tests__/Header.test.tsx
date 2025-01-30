import { render, screen } from "@testing-library/react";
import { CartContext } from "@/context/CartContext";
import Header from "../Header";
import { describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { CartItem } from "@/types/types";

describe("Header component", () => {
  const itemsInCart: CartItem[] = [];
  const setItemsInCart = vi.fn();

  it("renders whole header", () => {
    const { container } = render(
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContext.Provider>,
    );

    expect(container).toBeInTheDocument();
  });

  it("renders the Brand component with correct name and link", () => {
    render(
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContext.Provider>,
    );

    const fakeStoreLink = screen.getByRole("link", { name: /fake STORE/ });
    expect(fakeStoreLink).toHaveAttribute("href", "/");
  });

  it("renders the Navigation component with correct links", () => {
    render(
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContext.Provider>,
    );
    const homeLink = screen.getByRole("link", { name: /Home/ });
    expect(homeLink).toHaveAttribute("href", "/");

    const productsLink = screen.getByRole("link", { name: /Products/ });
    expect(productsLink).toHaveAttribute("href", "/products");

    const cartLink = screen.getByTestId("cart-link");
    expect(cartLink).toHaveAttribute("href", "/cart");
  });

  it("renders correctly with an empty cart", () => {
    render(
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContext.Provider>,
    );

    const cartItemCount = screen.queryByTestId("cart-item-count");

    if (cartItemCount) {
      expect(cartItemCount).toHaveTextContent("0");
    } else {
      expect(cartItemCount).not.toBeInTheDocument();
    }
  });

  it("renders correctly with items in the cart", () => {
    const itemsInCart = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 3 },
    ];

    render(
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContext.Provider>,
    );

    const cartItemCount = screen.getByTestId("cart-item-count");
    expect(cartItemCount).toHaveTextContent("6");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        ,
      </CartContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

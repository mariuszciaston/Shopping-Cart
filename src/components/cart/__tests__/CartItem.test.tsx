import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi, Mock } from "vitest";
import { useCartContext } from "@/context/CartContext";
import CartItem from "../CartItem";
import { Product } from "@/types/types";

vi.mock("@/context/CartContext", () => ({
  useCartContext: vi.fn(),
}));

const mockUseCartContext = useCartContext as Mock;

const product: Product = {
  id: 1,
  title: "Sample Product",
  price: 19.99,
  image: "sample-image.jpg",
  description: "description",
};

const itemsInCart = [{ id: 1, quantity: 3 }];

describe("CartItem component", () => {
  beforeEach(() => {
    mockUseCartContext.mockReturnValue({
      itemsInCart,
      setItemsInCart: vi.fn(),
    });
  });

  it("renders product information correctly", () => {
    render(
      <BrowserRouter>
        <CartItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", "sample-image.jpg");
    expect(screen.getByTestId("product-title")).toHaveTextContent(
      "Sample Product",
    );
    expect(screen.getByTestId("product-price")).toHaveTextContent("$19.99");
  });

  it("shows quantity correctly", () => {
    render(
      <BrowserRouter>
        <CartItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByTestId("quantity-input")).toHaveValue(3);
  });

  it("updates quantity correctly by value edit", () => {
    const setItemsInCart = vi.fn();
    mockUseCartContext.mockReturnValue({
      itemsInCart,
      setItemsInCart,
    });

    render(
      <BrowserRouter>
        <CartItem product={product} />
      </BrowserRouter>,
    );

    const quantityInput = screen.getByTestId("quantity-input");

    fireEvent.change(quantityInput, { target: { value: 4 } });
    expect(setItemsInCart).toHaveBeenCalledWith([{ id: 1, quantity: 4 }]);

    fireEvent.change(quantityInput, { target: { value: 5 } });
    expect(setItemsInCart).toHaveBeenCalledWith([{ id: 1, quantity: 5 }]);
  });

  it("removes item from cart when Trash icon is clicked", () => {
    const setItemsInCart = vi.fn();
    mockUseCartContext.mockReturnValue({
      itemsInCart,
      setItemsInCart,
    });

    render(
      <BrowserRouter>
        <CartItem product={product} />
      </BrowserRouter>,
    );

    const trashIcon = screen.getByTestId("remove-item");
    fireEvent.click(trashIcon);

    expect(setItemsInCart).toHaveBeenCalledWith([]);
  });

  it("displays total price correctly", () => {
    render(
      <BrowserRouter>
        <CartItem product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByTestId("sum")).toHaveTextContent("$59.97");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <CartItem product={product} />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

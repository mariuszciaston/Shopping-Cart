import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RenderSingleProduct from "../RenderSingleProduct";
import { describe, it, expect, beforeEach, Mock, vi } from "vitest";
import { useCartContext } from "@/context/CartContext";
import { Product } from "@/types/types";

vi.mock("@/context/CartContext", () => ({
  useCartContext: vi.fn(),
}));

const mockUseCartContext = useCartContext as Mock;
const mockSetItemsInCart = vi.fn();

describe("RenderSingleProduct", () => {
  const products: Product[] | null = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      image: "image1.jpg",
      description: "Description for Product 1",
    },
  ];

  beforeEach(() => {
    mockSetItemsInCart.mockClear();
    mockUseCartContext.mockReturnValue({
      itemsInCart: [],
      setItemsInCart: mockSetItemsInCart,
    });
  });

  it("should display loading message when loading is true", () => {
    render(
      <RenderSingleProduct productsData={[]} loading={true} error={null} />,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display error message when error is true", () => {
    render(
      <RenderSingleProduct
        productsData={[]}
        loading={false}
        error={"A network error was encountered"}
      />,
    );
    expect(
      screen.getByText("A network error was encountered"),
    ).toBeInTheDocument();
  });

  it("should display product when data is available", () => {
    expect(products.length).toBeGreaterThan(0);

    render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    products.forEach((product) => {
      const productImg = screen.getByAltText(product.title);
      expect(productImg).toHaveAttribute("src", product.image);
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should increase quantity when plus button is clicked", () => {
    render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    const plusButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    const quantityDisplay = screen.getByRole("spinbutton");
    expect(quantityDisplay).toHaveValue(3);
  });

  it("should decrease quantity when minus button is clicked", () => {
    render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    const plusButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    const minusButton = screen.getByRole("button", { name: "-" });
    fireEvent.click(minusButton);

    const quantityDisplay = screen.getByRole("spinbutton");
    expect(quantityDisplay).toHaveValue(2);
  });

  it("should not decrease quantity below 1", () => {
    render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    const minusButton = screen.getByRole("button", { name: "-" });
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);

    const quantityDisplay = screen.getByRole("spinbutton");
    expect(quantityDisplay).toHaveValue(1);
  });

  it("should display correct value in quantity input", () => {
    render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    const quantityDisplay = screen.getByRole("spinbutton");
    expect(quantityDisplay).toHaveValue(1);

    const plusButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(plusButton);
    expect(quantityDisplay).toHaveValue(2);

    fireEvent.change(quantityDisplay, { target: { value: "5" } });
    expect(quantityDisplay).toHaveValue(5);
  });

  it("should add item to cart with correct quantity", () => {
    render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    const plusButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    fireEvent.click(addToCartButton);

    expect(mockSetItemsInCart).toHaveBeenCalledWith([{ id: 1, quantity: 3 }]);
  });

  it("should update quantity if item already exists in cart", () => {
    mockUseCartContext.mockReturnValue({
      itemsInCart: [{ id: 1, quantity: 2 }],
      setItemsInCart: mockSetItemsInCart,
    });

    render(
      <BrowserRouter>
        <RenderSingleProduct
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    fireEvent.click(addToCartButton);

    expect(mockSetItemsInCart).toHaveBeenCalledWith([{ id: 1, quantity: 3 }]);
  });
});

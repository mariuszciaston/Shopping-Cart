import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi, Mock } from "vitest";
import { useCartContext } from "@/context/CartContext";
import { useProductsContext } from "@/context/ProductContext";
import Cart from "../Cart";

vi.mock("@/context/CartContext", () => ({
  useCartContext: vi.fn(),
}));

vi.mock("@/context/ProductContext", () => ({
  useProductsContext: vi.fn(),
}));

const mockUseCartContext = useCartContext as Mock;
const mockUseProductsContext = useProductsContext as Mock;

const mockProducts = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    image: "image1.jpg",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    image: "image2.jpg",
    description: "Description 2",
  },
];

describe("Cart page component", () => {
  beforeEach(() => {
    mockUseProductsContext.mockReturnValue({
      productsData: mockProducts,
      error: null,
      loading: false,
    });
  });

  it("renders header, main, and footer components", () => {
    mockUseCartContext.mockReturnValue({
      itemsInCart: [],
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("displays empty cart message when cart is empty", () => {
    mockUseCartContext.mockReturnValue({
      itemsInCart: [],
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );

    expect(screen.getByText("Cart is empty")).toBeInTheDocument();
  });

  it("displays loading state", () => {
    mockUseCartContext.mockReturnValue({
      itemsInCart: [{ id: 1, quantity: 1 }],
    });
    mockUseProductsContext.mockReturnValue({
      productsData: null,
      error: null,
      loading: true,
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays error message when network error occurs", () => {
    mockUseCartContext.mockReturnValue({
      itemsInCart: [{ id: 1, quantity: 1 }],
    });
    mockUseProductsContext.mockReturnValue({
      productsData: null,
      error: "A network error was encountered",
      loading: false,
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );

    expect(
      screen.getByText("A network error was encountered"),
    ).toBeInTheDocument();
  });

  it("renders cart items and summary when items exist in cart", () => {
    mockUseCartContext.mockReturnValue({
      itemsInCart: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 2 },
      ],
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByTestId("total-amount")).toHaveTextContent("$99.96");
  });

  it("matches snapshot", () => {
    mockUseCartContext.mockReturnValue({
      itemsInCart: [{ id: 1, quantity: 1 }],
    });

    const { asFragment } = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

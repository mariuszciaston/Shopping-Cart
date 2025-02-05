import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductsContext } from "@/context/ProductContext";
import Home from "@/pages/Home";
import { describe, it, expect } from "vitest";
import { Product, ProductState } from "@/types/types";
import { CartContext } from "@/context/CartContext";

const mockProductsData: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "Description for Product 1",
    image: "image1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    description: "Description for Product 2",
    image: "image2.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: 30,
    description: "Description for Product 3",
    image: "image3.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    price: 40,
    description: "Description for Product 4",
    image: "image4.jpg",
  },
];

const mockCartContent = {
  itemsInCart: [
    {
      id: 1,
      quantity: 1,
    },
  ],
  setItemsInCart: () => {},
};

const renderHome = (contextValue: ProductState | null) => {
  return render(
    <ProductsContext.Provider value={contextValue}>
      <CartContext.Provider value={mockCartContent}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </CartContext.Provider>
    </ProductsContext.Provider>,
  );
};

describe("Home Component", () => {
  it("renders header, main, and footer components", () => {
    renderHome({ productsData: [], error: null, loading: false });
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("displays loading state", () => {
    renderHome({ productsData: [], error: null, loading: true });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays error message", () => {
    renderHome({
      productsData: [],
      error: "A network error was encountered",
      loading: false,
    });
    expect(
      screen.getByText("A network error was encountered"),
    ).toBeInTheDocument();
  });

  it("renders hero section", () => {
    renderHome({ productsData: mockProductsData, error: null, loading: false });
    expect(screen.getByText("Your Ultimate Shopping Hub")).toBeInTheDocument();
  });

  it("displays featured items", () => {
    renderHome({ productsData: mockProductsData, error: null, loading: false });
    expect(screen.getByText("Featured Items")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
    expect(screen.getByText("Product 4")).toBeInTheDocument();
  });

  it("matches snapshot", (contextValue: ProductState) => {
    const { asFragment } = render(
      <ProductsContext.Provider value={contextValue}>
        <CartContext.Provider value={mockCartContent}>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </CartContext.Provider>
      </ProductsContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

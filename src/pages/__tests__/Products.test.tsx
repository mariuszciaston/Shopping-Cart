import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductsContext } from "@/context/ProductContext";
import Products from "@/pages/Products";
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
  {
    id: 5,
    title: "Product 5",
    price: 50,
    description: "Description for Product 5",
    image: "image5.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    price: 60,
    description: "Description for Product 6",
    image: "image6.jpg",
  },
  {
    id: 7,
    title: "Product 7",
    price: 70,
    description: "Description for Product 7",
    image: "image7.jpg",
  },
  {
    id: 8,
    title: "Product 8",
    price: 80,
    description: "Description for Product 8",
    image: "image8.jpg",
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
          <Products />
        </MemoryRouter>
      </CartContext.Provider>
    </ProductsContext.Provider>,
  );
};

describe("Products Component", () => {
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

  it("renders products correctly", () => {
    renderHome({ productsData: mockProductsData, error: null, loading: false });
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
    expect(screen.getByText("Product 4")).toBeInTheDocument();
    expect(screen.getByText("Product 5")).toBeInTheDocument();
    expect(screen.getByText("Product 6")).toBeInTheDocument();
    expect(screen.getByText("Product 7")).toBeInTheDocument();
    expect(screen.getByText("Product 8")).toBeInTheDocument();
  });

  it("matches snapshot", (contextValue: ProductState) => {
    const { asFragment } = render(
      <ProductsContext.Provider value={contextValue}>
        <CartContext.Provider value={mockCartContent}>
          <MemoryRouter>
            <Products />
          </MemoryRouter>
        </CartContext.Provider>
      </ProductsContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductPage from "../ProductPage";
import { ProductsContext } from "@/context/ProductContext";
import { Product, ProductState } from "@/types/types";
import { describe, it, expect } from "vitest";
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

// const mockContextValue = {
//   productsData: mockProductsData,
//   error: null,
//   loading: false,
// };

const renderHome = (contextValue: ProductState | null) => {
  return render(
    <ProductsContext.Provider value={contextValue}>
      <CartContext.Provider value={mockCartContent}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Routes>
            <Route path="/product/:name" element={<ProductPage />} />
          </Routes>
        </MemoryRouter>
      </CartContext.Provider>
    </ProductsContext.Provider>,
  );
};

describe("Products Component", () => {
  it("renders header, main, and footer components", () => {
    renderHome({ productsData: mockProductsData, error: null, loading: false });
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("shows error page for invalid product name", () => {
    const renderHome = (contextValue: ProductState | null) => {
      return render(
        <ProductsContext.Provider value={contextValue}>
          <CartContext.Provider value={mockCartContent}>
            <MemoryRouter
              initialEntries={["/product/123abc-invalid-product-name"]}
            >
              <Routes>
                <Route path="/product/:name" element={<ProductPage />} />
              </Routes>
            </MemoryRouter>
          </CartContext.Provider>
        </ProductsContext.Provider>,
      );
    };

    renderHome({ productsData: mockProductsData, error: null, loading: false });

    expect(screen.getByText("This page doesn't exist.")).toBeInTheDocument();
    expect(screen.getByText("Go back to the home page!")).toBeInTheDocument();
  });

  it("renders the correct product based on the URL parameter", () => {
    renderHome({ productsData: mockProductsData, error: null, loading: false });

    expect(screen.getByText("Product 1")).toBeInTheDocument();

    const renderHome2 = (contextValue: ProductState | null) => {
      return render(
        <ProductsContext.Provider value={contextValue}>
          <CartContext.Provider value={mockCartContent}>
            <MemoryRouter initialEntries={["/product/2"]}>
              <Routes>
                <Route path="/product/:name" element={<ProductPage />} />
              </Routes>
            </MemoryRouter>
          </CartContext.Provider>
        </ProductsContext.Provider>,
      );
    };

    renderHome2({
      productsData: mockProductsData,
      error: null,
      loading: false,
    });

    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("matches snapshot", (contextValue: ProductState) => {
    const { asFragment } = render(
      <ProductsContext.Provider value={contextValue}>
        <CartContext.Provider value={mockCartContent}>
          <MemoryRouter
            initialEntries={["/product/1"]}
          >
            <Routes>
              <Route path="/product/:name" element={<ProductPage />} />
            </Routes>
          </MemoryRouter>
        </CartContext.Provider>
      </ProductsContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

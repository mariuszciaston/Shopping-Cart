import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RenderMultipleProducts from "../RenderMultipleProducts";
import { describe, it, expect } from "vitest";

describe("RenderMultipleProducts", () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      image: "image1.jpg",
      description: "Description for Product 1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 200,
      image: "image2.jpg",
      description: "Description for Product 2",
    },
  ];

  it("should display loading message when loading is true", () => {
    render(
      <RenderMultipleProducts productsData={[]} loading={true} error={null} />,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display error message when error is true", () => {
    render(
      <RenderMultipleProducts
        productsData={[]}
        loading={false}
        error={"error message"}
      />,
    );
    expect(
      screen.getByText("A network error was encountered"),
    ).toBeInTheDocument();
  });

  it("should display products when data is available", () => {
    render(
      <BrowserRouter>
        <RenderMultipleProducts
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );

    products.forEach((product) => {
      const allProductLinks = screen.getAllByRole("link");
      const productLink = allProductLinks.find(
        (link) => link.getAttribute("href") === `/products/${product.id}`,
      );
      expect(productLink).not.toBeNull();
      expect(productLink).toHaveAttribute("href", `/products/${product.id}`);

      const productImg = screen.getByAltText(product.title);
      expect(productImg).toHaveAttribute("src", product.image);

      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <RenderMultipleProducts
          productsData={products}
          loading={false}
          error={null}
        />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

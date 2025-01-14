import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "@/components/ui/wrapper";

import { Link, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

import { useProductsContext } from "@/context/ProductContext";
import RenderSingleProduct from "@/components/RenderSingleProduct";
import { ProductTypes } from "@/types";
import { Button } from "@/components/ui/button";

function Products() {
  const { productsData, error, loading } = useProductsContext();

  const { name } = useParams();

  if (!name || Number(name) > 20 || Number(name) < 1) {
    return <ErrorPage />;
  }

  const filteredProductsData = productsData
    ? productsData.filter(
        (product: ProductTypes) => product.id === Number(name),
      )
    : [];

  return (
    <Wrapper>
      <Header />
      <Main>
        <Link to="/products" className="mr-auto bg-black font-bold text-white">
          GO BACK
        </Link>

        <br />

        <div className="font-bold">Product page {name}</div>
        <br />

        <RenderSingleProduct
          productsData={filteredProductsData}
          error={error}
          loading={loading}
        />

        <Button
          className="mx-auto bg-green-500 px-8 py-6 text-lg font-bold hover:bg-green-500"
          variant="default"
        >
          Add to cart
        </Button>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export default Products;

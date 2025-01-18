import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "@/components/ui/wrapper";

import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

import { useProductsContext } from "@/context/ProductContext";
import RenderSingleProduct from "@/components/RenderSingleProduct";
import { ProductTypes } from "@/types";

function Products() {
  const { productsData, error, loading } = useProductsContext();

  const { name } = useParams();

  if (!name || Number(name) > 20 || Number(name) < 1) {
    return <ErrorPage />;
  }

  const filteredProductData = productsData
    ? productsData.filter(
        (product: ProductTypes) => product.id === Number(name),
      )
    : [];

  return (
    <Wrapper>
      <Header />
      <Main>
        <RenderSingleProduct
          productsData={filteredProductData}
          error={error}
          loading={loading}
        />
      </Main>

      <Footer />
    </Wrapper>
  );
}

export default Products;

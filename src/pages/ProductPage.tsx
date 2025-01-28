import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import Footer from "../components/layouts/Footer";
import Wrapper from "@/components/ui/Wrapper";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { useProductsContext } from "@/context/ProductContext";
import RenderSingleProduct from "@/components/product/RenderSingleProduct";
import { Product } from "@/types/types";

const ProductPage = () => {
  const { productsData, error, loading } = useProductsContext();
  const { name } = useParams();

  const isValidName = name && Number(name) >= 1 && Number(name) <= 20;

  if (!isValidName) return <ErrorPage />;

  const filteredProductData =
    productsData?.filter(
      (product: Product) => product.id === Number(name),
    ) || [];

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
};

export default ProductPage;

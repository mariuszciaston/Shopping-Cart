import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import Footer from "../components/layouts/Footer";
import Wrapper from "@/components/ui/Wrapper";
import { useProductsContext } from "@/context/ProductContext";
import RenderMultipleProducts from "@/components/product/RenderMultipleProducts";

const Products = () => {
  const { productsData, error, loading } = useProductsContext();

  return (
    <Wrapper>
      <Header />
      <Main>
        <RenderMultipleProducts
          productsData={productsData}
          error={error}
          loading={loading}
        />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Products;

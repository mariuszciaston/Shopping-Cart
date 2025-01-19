import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "@/components/ui/wrapper";
import { useProductsContext } from "@/context/ProductContext";
import RenderMultipleProducts from "@/components/RenderMultipleProducts";

function Products() {
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

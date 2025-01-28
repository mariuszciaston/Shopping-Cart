import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import Footer from "../components/layouts/Footer";
import Wrapper from "../components/ui/Wrapper";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { useProductsContext } from "@/context/ProductContext";
import RenderMultipleProducts from "@/components/product/RenderMultipleProducts";

const Home = () => {
  const { productsData, error, loading } = useProductsContext();
  const featuredProductsData = productsData?.slice(0, 4) || [];

  return (
    <Wrapper>
      <Header />
      <Main>
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-8 rounded-md bg-white px-4 py-8 text-center shadow-md sm:px-8 sm:py-16">
            <div className="mx-auto flex max-w-[640px] flex-col gap-8">
              <h1 className="text-4xl font-bold">Your Ultimate Shopping Hub</h1>
              <p className="text-lg">
                Embark on a seamless shopping adventure with our vast array of
                products, irresistible prices, and outstanding customer care.
                Shop today and elevate your shopping experience to new heights.
              </p>
              <Button
                className="mx-auto bg-green-500 px-8 py-6 text-lg font-bold hover:bg-green-500"
                variant="default"
              >
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <h2 className="px-4 text-2xl font-bold sm:px-0">Featured Items</h2>
            <RenderMultipleProducts
              productsData={featuredProductsData}
              error={error}
              loading={loading}
            />
          </section>
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Home;

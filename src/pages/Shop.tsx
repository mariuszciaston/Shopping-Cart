import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "@/components/ui/wrapper";
import { useProductsContext } from "@/context/ProductContext";

function Shop() {
  const { productsData, error, loading } = useProductsContext();

  return (
    <Wrapper>
      <Header />
      <Main>
        {loading && <p>Loading...</p>}
        {error && <p>A network error was encountered</p>}

        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] content-start gap-8">
          {productsData &&
            productsData.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md hover:cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-square bg-white object-contain"
                />

                <h2 className="font-bold">{product.title}</h2>

                <p>${product.price}</p>
              </div>
            ))}
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Shop;

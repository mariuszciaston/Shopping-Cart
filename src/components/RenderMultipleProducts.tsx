import { ProductsContextType } from "@/types";
import { Link } from "react-router-dom";

const RenderMultipleProducts: React.FC<ProductsContextType> = ({
  productsData,
  error,
  loading,
}) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>A network error was encountered</p>}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] content-start gap-4 sm:gap-8">
        {productsData &&
          productsData.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="flex h-full flex-col gap-4 rounded-md bg-white p-4 shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-square bg-white object-contain"
                />
                <h2 className="font-bold">{product.title}</h2>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default RenderMultipleProducts;

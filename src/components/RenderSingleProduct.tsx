import { ProductsContextType } from "@/types";
// import { Link } from "react-router-dom";

const RenderProducts: React.FC<ProductsContextType> = ({
  productsData,
  error,
  loading,
}) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>A network error was encountered</p>}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] content-start gap-8">
        {productsData &&
          productsData.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="aspect-square bg-white object-contain"
              />

              <h2 className="font-bold">{product.title}</h2>

              <p>{product.description}</p>

              <p>${product.price}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default RenderProducts;

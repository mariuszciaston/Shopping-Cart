import { ProductsContextType } from "@/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const RenderProducts: React.FC<ProductsContextType> = ({
  productsData,
  error,
  loading,
}) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>A network error was encountered</p>}

      {productsData &&
        productsData.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 rounded-md bg-white p-8 shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto aspect-square w-full rounded-md border bg-white object-contain p-8"
            />
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="font-bold">{product.title}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>

              <div className="mr-auto flex gap-2">
                <Button className="text-lg" variant="outline">
                  -
                </Button>

                <Input
                  className="m-none w-[4rem] pr-0 text-center"
                  type="number"
                  min="1"
                  max="99"
                  value={1}
                ></Input>

                <Button className="text-lg" variant="outline">
                  +
                </Button>
              </div>

              <Button
                className="mr-auto bg-blue-500 px-8 py-6 text-lg font-bold hover:bg-blue-500"
                variant="default"
              >
                Add to cart
              </Button>
            </div>
          </div>
        ))}
    </>
  );
};

export default RenderProducts;

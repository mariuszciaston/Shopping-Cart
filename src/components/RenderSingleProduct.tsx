import { ProductsContextType } from "@/types";
import { Button } from "./ui/button";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { handleAddToCart } from "./handleAddToCart";

const RenderSingleProduct: React.FC<ProductsContextType> = ({
  productsData,
  error,
  loading,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { itemsInCart, setItemsInCart } = useCartContext();

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

              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

              <Button
                onClick={() =>
                  handleAddToCart(
                    product.id,
                    quantity,
                    itemsInCart,
                    setItemsInCart,
                  )
                }
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

export default RenderSingleProduct;

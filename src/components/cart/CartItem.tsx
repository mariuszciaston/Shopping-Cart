import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { Product } from "@/types/types";

function CartItem({ product }: { product: Product }) {
  const { itemsInCart, setItemsInCart } = useCartContext();

  return (
    <div className="flex flex-1 flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4 sm:min-w-[480px] sm:flex-1">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="aspect-square w-32 min-w-32 rounded-md border bg-white object-contain p-4"
          />
        </Link>

        <Link to={`/products/${product.id}`}>
          <p className="flex flex-col">
            <span className="font-bold">{product.title}</span>${product.price}
          </p>
        </Link>
      </div>

      <div className="flex flex-1 items-center gap-4">
        <QuantitySelector
          quantity={
            itemsInCart.find((item) => item.id === product.id)?.quantity ?? 0
          }
          setQuantity={(newQuantity) => {
            const updatedCart = itemsInCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: newQuantity }
                : item,
            );
            setItemsInCart(updatedCart);
          }}
        />

        <Trash2
          className="cursor-pointer hover:text-red-500"
          onClick={() => {
            const updatedCart = itemsInCart.filter(
              (item) => item.id !== product.id,
            );
            setItemsInCart(updatedCart);
          }}
        />

        <p className="flex flex-1 justify-end">
          $
          {(
            (itemsInCart.find((item) => item.id === product.id)?.quantity ??
              0) * product.price
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartItem;

import { CartItem } from "@/types";
import { Dispatch, SetStateAction } from "react";

export const handleAddToCart = (
  id: CartItem["id"],
  quantity: CartItem["quantity"],
  itemsInCart: CartItem[],
  setItemsInCart: Dispatch<SetStateAction<CartItem[]>>,
) => {
  const existingItemIndex = itemsInCart.findIndex((item) => item.id === id);

  if (existingItemIndex !== -1) {
    const updatedCart = [...itemsInCart];
    updatedCart[existingItemIndex].quantity += quantity;
    setItemsInCart(updatedCart);
  } else {
    setItemsInCart([
      ...itemsInCart,
      {
        id: id,
        quantity: quantity,
      },
    ]);
  }
};

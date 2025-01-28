import { AddToCartHandler } from "@/types/types";

export const handleAddToCart: AddToCartHandler = (
  id,
  quantity,
  itemsInCart,
  setItemsInCart,
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

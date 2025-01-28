import { UpdateCart } from "@/types/types";

export const handleAddToCart: UpdateCart = (
  id,
  quantity,
  itemsInCart,
  setItemsInCart,
) => {
  const updatedCart = itemsInCart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
  );

  if (!itemsInCart.some((item) => item.id === id)) {
    updatedCart.push({ id, quantity });
  }

  setItemsInCart(updatedCart);
};

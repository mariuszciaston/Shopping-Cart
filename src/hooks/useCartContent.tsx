import { CartItem } from "@/types/types";
import { useState } from "react";

const useCartContent = () => {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([]);
  return { itemsInCart, setItemsInCart };
};

export default useCartContent;

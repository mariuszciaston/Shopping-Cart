import { CartItem } from "@/types";
import { useState } from "react";

const useCartContent = () => {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([]);
  return { itemsInCart, setItemsInCart };
};

export default useCartContent;

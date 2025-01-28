import { CartState } from "@/types/types";
import { createContext, useContext } from "react";

export const CartContext = createContext<CartState | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

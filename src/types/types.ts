export type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

export type ProductState = {
  productsData: Product[] | null;
  error: string | null;
  loading: boolean;
};

export type QuantitySelectorProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type CartState = {
  itemsInCart: CartItem[];
  setItemsInCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export type UpdateCart = (
  id: CartItem["id"],
  quantity: CartItem["quantity"],
  itemsInCart: CartState["itemsInCart"],
  setItemsInCart: CartState["setItemsInCart"],
) => void;

export type ShoppingCart = {
  productsData: Product[] | null;
  itemsInCart: CartItem[];
};

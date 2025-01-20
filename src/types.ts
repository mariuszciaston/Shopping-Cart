export type ProductTypes = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

export type ProductsContextType = {
  productsData: ProductTypes[] | null;
  error: null;
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

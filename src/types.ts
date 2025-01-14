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

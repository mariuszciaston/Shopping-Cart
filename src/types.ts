export type ProductTypes = {
  id: number;
  image: string;
  title: string;
  price: number;
};

export type ProductsContextType = {
  productsData: ProductTypes[] | null;
  error:  null;
  loading: boolean;
};

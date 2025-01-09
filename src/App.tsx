import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import useProductsData from "@/hooks/fetchAllProducts";
import { ProductsContext } from "./context/ProductContext";

const router = createBrowserRouter(routes);

function App() {
  const productsData = useProductsData();

  return (
    <ProductsContext.Provider value={productsData}>
      <RouterProvider router={router} />
    </ProductsContext.Provider>
  );
}

export default App;

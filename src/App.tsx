import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import useProductsData from "@/hooks/useProductsData";
import { ProductsContext } from "./context/ProductContext";
import { CartContext } from "./context/CartContext";
import useCartContent from "./hooks/useCartContent";

const router = createBrowserRouter(routes);

function App() {
  const productsData = useProductsData();
  const cartContent = useCartContent();
  return (
    <ProductsContext.Provider value={productsData}>
      <CartContext.Provider value={cartContent}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;

import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:name",
    element: <ProductPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default router;

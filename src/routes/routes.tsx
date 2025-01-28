import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";

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

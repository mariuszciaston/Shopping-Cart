import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default router;

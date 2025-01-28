import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";
import { CartItem } from "@/types/types";

const Brand = () => (
  <h1 className="text-3xl font-bold">
    <Link to="/" className="rounded-md border-2 border-black">
      <span className="bg-black text-white">&nbsp;fake&nbsp;</span>
      &nbsp;STORE&nbsp;
    </Link>
  </h1>
);

const Navigation = ({ itemsInCart }: { itemsInCart: CartItem[] }) => (
  <nav className="order-0 sm:order-0 md:order-2">
    <ul className="flex items-center gap-8">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart">
          <CartIcon itemsInCart={itemsInCart} />
        </Link>
      </li>
    </ul>
  </nav>
);

const CartIcon = ({ itemsInCart }: { itemsInCart: CartItem[] }) => (
  <div className="relative">
    <ShoppingBasket className="h-8 w-8" />
    {itemsInCart.length > 0 && (
      <span className="absolute -bottom-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
        {itemsInCart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    )}
  </div>
);

const Header = () => {
  const { itemsInCart } = useCartContext();

  return (
    <header className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 p-4 sm:gap-8 sm:p-8">
      <Brand />
      <Navigation itemsInCart={itemsInCart} />
    </header>
  );
};

export default Header;

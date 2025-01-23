import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";

const Header = () => {
  const { itemsInCart } = useCartContext();

  console.log(itemsInCart);

  return (
    <header className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 p-4 sm:gap-8 sm:p-8">
      <h1 className="text-3xl font-bold">
        <Link to="/" className="rounded-md border-2 border-black">
          <span className="bg-black text-white">&nbsp;fake&nbsp;</span>
          &nbsp;STORE&nbsp;
        </Link>
      </h1>

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
              <div className="relative">
                <ShoppingBasket className="h-8 w-8" />
                {itemsInCart.length > 0 && (
                  <span className="absolute -bottom-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {itemsInCart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="order-1 flex min-w-full flex-1 items-center md:min-w-[200px] md:max-w-[300px]">
        <Input
          className="rounded-r-none transition-none hover:border hover:border-black focus-visible:ring-transparent"
          type="text"
          placeholder="Search"
        />

        <Button
          className="hover:border-1 rounded-l-none transition-none hover:border hover:border-black hover:bg-white"
          variant="outline"
        >
          <Search />
        </Button>
      </div>
    </header>
  );
};

export default Header;

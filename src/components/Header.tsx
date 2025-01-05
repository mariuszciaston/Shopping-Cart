import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-[1024px] flex-wrap items-center justify-between gap-8 p-8">
      <h1 className="text-4xl font-bold">
        <a href="#" className="rounded-sm border-2 border-black">
          <span className="bg-black text-white">&nbsp;fake&nbsp;</span>
          &nbsp;STORE&nbsp;
        </a>
      </h1>

      <nav className="order-0 sm:order-0 md:order-2">
        <ul className="flex items-center gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">
              <ShoppingBasket className="h-8 w-8" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="order-1 flex min-w-full flex-1 items-center md:min-w-[200px] md:max-w-[320px]">
        <Input
          className="rounded-r-none transition-none hover:border hover:border-black focus-visible:ring-transparent"
          type="text"
          placeholder="Search"
        />

        <Button
          className="hover:border-1 rounded-l-none transition-none hover:border hover:border-black hover:bg-white"
          variant="outline"
        >
          {" "}
          <Search />
        </Button>
      </div>
    </header>
  );
};

export default Header;

// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ShoppingBasket } from "lucide-react";

// const Header = () => {
//   return (
//     <header className="mx-auto grid w-full max-w-[1024px] grid-cols-1 items-center gap-8 p-8 sm:grid-cols-2 md:grid-cols-3">
//       <h1 className="text-4xl font-bold">
//         <a href="#" className="rounded-sm border-2 border-black">
//           <span className="bg-black text-white">&nbsp;fake&nbsp;</span>
//           &nbsp;STORE&nbsp;
//         </a>
//       </h1>

//       <div className="flex items-center">
//         <Input
//           className="rounded-r-none transition-none hover:border hover:border-black focus-visible:ring-transparent"
//           type="text"
//           placeholder="Search for products"
//         />

//         <Button
//           className="hover:border-1 rounded-l-none transition-none hover:border hover:border-black hover:bg-white"
//           variant="outline"
//         >
//           {" "}
//           <Search />
//         </Button>
//       </div>

//       <nav className="col-start-1 sm:col-start-2 md:col-start-3">
//         <ul className="flex items-center justify-end gap-8">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">Shop</a>
//           </li>
//           <li>
//             <a href="#">
//               <ShoppingBasket className="h-8 w-8" />
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

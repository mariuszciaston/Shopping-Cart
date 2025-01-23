import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "../components/ui/wrapper";
import { Button } from "@/components/ui/button";
import { useProductsContext } from "@/context/ProductContext";
import { useCartContext } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import QuantitySelector from "@/components/QuantitySelector";
import { Link } from "react-router-dom";

function Cart() {
  const { productsData, error, loading } = useProductsContext();
  const { itemsInCart } = useCartContext();

  return (
    <Wrapper>
      <Header />
      <Main>
        <div className="flex flex-col gap-8 rounded-md bg-white p-4 shadow-md sm:p-8">
          {loading && <p>Loading...</p>}
          {error && <p>A network error was encountered</p>}

          {itemsInCart.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            productsData &&
            productsData
              .filter((product) =>
                itemsInCart.some((item) => item.id === product.id),
              )
              .map((product) => (
                <div key={product.id}>
                  <div className="flex flex-1 flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:min-w-[480px] sm:flex-1">
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="aspect-square w-32 min-w-32 rounded-md border bg-white object-contain p-4"
                        />
                      </Link>

                      <Link to={`/products/${product.id}`}>
                        <p className="flex flex-col">
                          <span className="font-bold">{product.title}</span>$
                          {product.price}
                        </p>
                      </Link>
                    </div>

                    <div className="flex flex-1 items-center gap-4">
                      <QuantitySelector
                        quantity={
                          itemsInCart.find((item) => item.id === product.id)
                            ?.quantity ?? 0
                        }
                        setQuantity={(quantity: number) => {
                          console.log("New quantity:", quantity);
                        }}
                      />

                      <Trash2 />

                      <p className="flex flex-1 justify-end">
                        $
                        {(
                          (itemsInCart.find((item) => item.id === product.id)
                            ?.quantity ?? 0) * product.price
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
          )}

          <hr />

          <div className="flex justify-between">
            <div className="text-lg font-bold">Total &nbsp;</div>

            <div className="text-lg font-bold">$10.00</div>
          </div>

          <Button
            className="mx-auto bg-blue-500 px-8 py-6 text-lg font-bold hover:bg-blue-500"
            variant="default"
            onClick={() =>
              alert(`Congratulations! You successfully bought the products.`)
            }
          >
            Checkout
          </Button>
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Cart;

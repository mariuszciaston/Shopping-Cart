import { useCartContext } from "@/context/CartContext";
import { useProductsContext } from "@/context/ProductContext";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import Footer from "@/components/layouts/Footer";
import Wrapper from "@/components/ui/Wrapper";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

const Cart = () => {
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
              .map((product) => <CartItem key={product.id} product={product} />)
          )}

          <hr />

          <CartSummary productsData={productsData} itemsInCart={itemsInCart} />
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Cart;

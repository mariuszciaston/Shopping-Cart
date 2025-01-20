import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "../components/ui/wrapper";
import { Button } from "@/components/ui/button";

function Cart() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <div className="flex flex-col gap-8 rounded-md bg-white p-8 shadow-md">
          <div className="flex justify-between">
            <div>image</div>

            <div>name and price</div>

            <div>quantity selector</div>

            <div>remove</div>

            <div>sum</div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="text-lg font-bold">Total &nbsp;</div>

            <div className="text-lg">$10</div>
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

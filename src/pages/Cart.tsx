import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "../components/ui/wrapper";

function Cart() {
  return (
    <Wrapper>
      <Header />
      <Main children={"Cart page"} />
      <Footer />
    </Wrapper>
  );
}

export default Cart;

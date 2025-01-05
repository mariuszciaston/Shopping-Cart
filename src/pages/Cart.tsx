import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div className="flex h-[calc(100vh)] flex-col">
      <Header />
      <Main children={"Cart page"} />
      <Footer />
    </div>
  );
}

export default Cart;

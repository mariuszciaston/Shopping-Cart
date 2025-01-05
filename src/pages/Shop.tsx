import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "@/components/ui/wrapper";

function Shop() {
  return (
    <Wrapper>
      <Header />
      <Main children={"Shop page"} />
      <Footer />
    </Wrapper>
  );
}

export default Shop;

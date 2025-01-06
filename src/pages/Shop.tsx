import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "@/components/ui/wrapper";

function Shop() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] content-start gap-8">
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>

          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>

          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>

          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Shop;

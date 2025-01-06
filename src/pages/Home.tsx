import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "../components/ui/wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 rounded-md bg-white px-8 py-16 text-center shadow-md">
            <h1 className="text-4xl font-bold">Your Ultimate Shopping Hub </h1>
            <p className="text-lg">
              Embark on a seamless shopping adventure with our vast array of
              products, irresistible prices, and outstanding customer care. Shop
              today and elevate your shopping experience to new heights.
            </p>

            <Button
              className="mx-auto bg-green-500 px-8 py-6 text-lg font-bold hover:bg-green-500"
              variant="default"
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>

          <h2 className="text-2xl font-bold">Featured Items</h2>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] content-start gap-8">
            <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
            <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
            <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
            <div className="min-h-[300px] min-w-[200px] bg-gray-500"></div>
          </div>
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Home;

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from "../components/ui/wrapper";

function Home() {
  return (
    <Wrapper>
      <Header />
      <Main children={"Home page"} />
      <Footer />
    </Wrapper>
  );
}

export default Home;

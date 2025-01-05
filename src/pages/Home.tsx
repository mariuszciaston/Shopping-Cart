import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex h-[calc(100vh)] flex-col">
      <Header />
      <Main children={"Home page"} />
      <Footer />
    </div>
  );
}

export default Home;

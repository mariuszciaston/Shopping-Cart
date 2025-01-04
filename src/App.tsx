import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col p-8 h-[calc(100vh)] gap-8 max-w-[1024px] mx-auto bg-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

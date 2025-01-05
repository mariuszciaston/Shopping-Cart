import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex h-[calc(100vh)] flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

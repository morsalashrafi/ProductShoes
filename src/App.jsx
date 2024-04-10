import "./App.css";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

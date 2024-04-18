import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="mens" element={<ShopCategory category="men" />} />
          <Route path="womens" element={<ShopCategory category="women" />} />
          <Route path="kids" element={<ShopCategory category="kid" />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

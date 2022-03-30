import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import {
  AddToCartPage,
  LandingPage,
  LoginPage,
  ProductListing,
  SignUpPage,
  WishlistPage,
} from "./pages/index";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
        <Route path="/AddToCart" element={<AddToCartPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;

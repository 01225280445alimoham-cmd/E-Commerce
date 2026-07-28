import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Collection from "./pages/Collections";
import About from "./pages/About";
import NavBar from "./Components/NavBar";
import "./index.css";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import { ToastContainer, toast } from "react-toastify";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "80vw",
        alignSelf: "center",
        margin: "0 auto",
      }}
    >
      <NavBar />
      <ToastContainer />
      <Search />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/collections" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

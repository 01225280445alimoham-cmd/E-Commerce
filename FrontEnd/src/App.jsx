import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import Collection from "./pages/Collections";
import About from "./pages/About";
import Contant from "./pages/Contant";
import NavBar from "./assets/Components/NavBar";
import "./index.css";

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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/collections" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contant />}></Route>
      </Routes>
    </div>
  );
};

export default App;

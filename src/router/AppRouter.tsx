import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Layout/Header";

import Register from "../pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Footer from "../components/Layout/Footer";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/Product/Product";


const AppRouter: React.FC = () => {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    {!hideNavbarAndFooter && <Navbar />}
    <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
      </Routes>
    </main>
    {!hideNavbarAndFooter && <Footer />}
  </div>
  );
};

export default AppRouter;

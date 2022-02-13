import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import FrontPage from "./components/pages/front-page/FrontPage";
import AboutPage from "./components/pages/about-page/AboutPage";
import ContactPage from "./components/pages/contact-page/ContactPage";
import ShopPage from "./components/pages/shop-page/ShopPage";
import Cart from "./components/pages/cart-page/CartPage";
import Auth from "./components/pages/auth/Auth";

import actions from "./actions";

import Firebase from "./components/modules/Firebase";

import "./App.scss";

const App = ({ setUser }) => {
  useEffect(() => {
    console.log("APP USE EFFECT");
    const unsubscribe = Firebase.subscribeToAuthStateChanges(setUser);

    return () => {
      unsubscribe();
    };
  }, [setUser]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/our-offer" element={<ShopPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
};

const mapDispatchToProps = {
  setUser: actions.setUser,
};

export default connect(null, mapDispatchToProps)(App);

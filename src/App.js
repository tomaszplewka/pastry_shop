import React, { useState, useEffect } from "react";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import FrontPage from "./components/pages/front-page/FrontPage";
import AboutPage from "./components/pages/about-page/AboutPage";
import ContactPage from "./components/pages/contact-page/ContactPage";
import ShopPage from "./components/pages/shop-page/ShopPage";
import Auth from "./components/pages/auth/Auth";

import { Routes, Route, useNavigate } from "react-router-dom";

import Firebase from "./components/modules/Firebase";

import "./App.scss";

const App = () => {
  const [user, setUser] = useState({
    name: null,
    email: null,
    id: null,
  });
  const navigate = useNavigate();
  console.log("USER FROM APP: ", user);

  useEffect(() => {
    console.log("APP USE EFFECT");
    const unsubscribe = Firebase.subscribeToAuthStateChanges(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Header auth={Firebase} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/our-offer" element={<ShopPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<Auth auth={Firebase} user={user} />} />
        <Route
          path="/register"
          element={<Auth auth={Firebase} user={user} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

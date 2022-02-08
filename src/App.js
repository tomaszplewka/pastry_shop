import React, { useState, useEffect } from "react";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import FrontPage from "./components/pages/front-page/FrontPage";
import AboutPage from "./components/pages/about-page/AboutPage";
import ContactPage from "./components/pages/contact-page/ContactPage";
import ShopPage from "./components/pages/shop-page/ShopPage";
import Auth from "./components/pages/auth/Auth";

import { Routes, Route } from "react-router-dom";

import { auth } from "./components/modules/Firebase";

import "./App.scss";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });
    // window.addEventListener("beforeunload", beforeUnloadCb);
    // return () => {
    //   window.removeEventListener("beforeunload", beforeUnloadCb);
    // };
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/our-offer" element={<ShopPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AboutPage from "./components/pages/about-page/AboutPage";
import ContactPage from "./components/pages/contact-page/ContactPage";
import CategoryPreview from "./components/sections/category-preview/CategoryPreview";
import CategorySingle from "./components/sections/category-single/CategorySingle";
import ItemSingle from "./components/sections/item-single/ItemSingle";
import Cart from "./components/pages/cart-page/CartPage";
import CheckoutPage from "./components/pages/checkout-page/CheckoutPage";

import FrontPageContainer from "./components/containers/FrontPageContainer";
import ShopPageContainer from "./components/containers/ShopPageContainer";
import AuthContainer from "./components/containers/AuthContainer";

import Firebase from "./components/modules/Firebase";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("APP USE EFFECT");
    const unsubscribe = Firebase.subscribeToAuthStateChanges(dispatch);

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("APP -- FETCH DATA");
    const unsubscribe = Firebase.subscribeToDataChanges(dispatch);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPageContainer />} />
        <Route path="/our-offer" element={<ShopPageContainer />}>
          <Route path=":itemsCategory" element={<CategorySingle />}>
            <Route path=":itemName" element={<ItemSingle />} />
          </Route>
          <Route index element={<CategoryPreview />} />
        </Route>
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<AuthContainer />} />
        <Route path="/register" element={<AuthContainer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

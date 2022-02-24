import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import FrontPage from "./components/pages/front-page/FrontPage";
import AboutPage from "./components/pages/about-page/AboutPage";
import ContactPage from "./components/pages/contact-page/ContactPage";
import ShopPage from "./components/pages/shop-page/ShopPage";
import CategoryPreview from "./components/sections/category-preview/CategoryPreview";
import CategorySingle from "./components/sections/category-single/CategorySingle";
import ItemSingle from "./components/sections/item-single/ItemSingle";
import Cart from "./components/pages/cart-page/CartPage";
import CheckoutPage from "./components/pages/checkout-page/CheckoutPage";
import Auth from "./components/pages/auth/Auth";
import Loader from "./components/hoc/loader/Loader";

import actions from "./actions";

import Firebase from "./components/modules/Firebase";

import "./App.scss";

const FrontPageLoader = Loader(FrontPage);
const ShopPageLoader = Loader(ShopPage);
const AuthLoader = Loader(Auth);

const App = ({
  isFetchingUser,
  setUserStart,
  setUserSuccess,
  setUserFailure,
  isFetchingData,
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
}) => {
  useEffect(() => {
    console.log("APP USE EFFECT");
    const unsubscribe = Firebase.subscribeToAuthStateChanges(
      setUserStart,
      setUserSuccess,
      setUserFailure
    );

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("APP -- FETCH DATA");
    const unsubscribe = Firebase.subscribeToDataChanges(
      fetchDataStart,
      fetchDataSuccess,
      fetchDataFailure
    );

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("APP RENDER");

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<FrontPageLoader isLoading={isFetchingData} />}
        />
        <Route
          path="/our-offer"
          element={<ShopPageLoader isLoading={isFetchingData} />}
        >
          <Route path=":itemsCategory" element={<CategorySingle />}>
            <Route path=":itemName" element={<ItemSingle />} />
          </Route>
          <Route index element={<CategoryPreview />} />
        </Route>
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/sign-in"
          element={<AuthLoader isLoading={isFetchingUser} />}
        />
        <Route
          path="/register"
          element={<AuthLoader isLoading={isFetchingUser} />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isFetchingData: state.data.isFetching,
  isFetchingUser: state.user.isFetching,
});

const mapDispatchToProps = {
  setUserStart: actions.setUserStart,
  setUserSuccess: actions.setUserSuccess,
  setUserFailure: actions.setUserFailure,
  fetchDataStart: actions.fetchDataStart,
  fetchDataSuccess: actions.fetchDataSuccess,
  fetchDataFailure: actions.fetchDataFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

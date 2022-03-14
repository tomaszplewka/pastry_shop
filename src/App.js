import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import Spinner from "./components/spinner/Spinner";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

import Firebase from "./components/modules/Firebase";

import "./App.scss";

const FrontPageContainer = lazy(() =>
  import("./components/containers/FrontPageContainer")
);
const ShopPageContainer = lazy(() =>
  import("./components/containers/ShopPageContainer")
);
const AuthContainer = lazy(() =>
  import("./components/containers/AuthContainer")
);
const AboutPage = lazy(() => import("./components/pages/about-page/AboutPage"));
const ContactPage = lazy(() =>
  import("./components/pages/contact-page/ContactPage")
);
const CategoryPreview = lazy(() =>
  import("./components/sections/category-preview/CategoryPreview")
);
const CategorySingle = lazy(() =>
  import("./components/sections/category-single/CategorySingle")
);
const ItemSingle = lazy(() =>
  import("./components/sections/item-single/ItemSingle")
);
const Cart = lazy(() => import("./components/pages/cart-page/CartPage"));
const CheckoutPage = lazy(() =>
  import("./components/pages/checkout-page/CheckoutPage")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = Firebase.subscribeToAuthStateChanges(dispatch);

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = Firebase.subscribeToDataChanges(dispatch);

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;

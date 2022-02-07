import React, { useState, useEffect } from "react";
import HeaderSocial from "./components/header-social/HeaderSocial";
import Header from "./components/header/Header";
import CarouselCustom from "./components/carousel-custom/CarouselCustom";
import Categories from "./components/sections/categories/Categories";
import FeaturedItems from "./components/sections/featured-items/FeaturedItems";
import SocialMediaGallery from "./components/sections/social-media-gallery/SocialMediaGallery";
import DeliveryBanner from "./components/sections/delivery-banner/DeliveryBanner";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Subscription from "./components/sections/subscription/Subscription";
import Footer from "./components/sections/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

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
      <HeaderSocial />
      <Header />
      <CarouselCustom />
      <Categories />
      <FeaturedItems />
      <DeliveryBanner />
      <SocialMediaGallery />
      <Testimonials />
      <Subscription />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;

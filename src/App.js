import React from "react";
import CarouselCustom from "./components/carousel-custom/CarouselCustom";
import Categories from "./components/sections/categories/Categories";
import FeaturedItems from "./components/sections/featured-items/FeaturedItems";
import SocialMediaGallery from "./components/sections/social-media-gallery/SocialMediaGallery";
import DeliveryBanner from "./components/sections/delivery-banner/DeliveryBanner";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Subscription from "./components/sections/subscription/Subscription";
import Footer from "./components/sections/footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <>
      <CarouselCustom />
      <Categories />
      <FeaturedItems />
      <DeliveryBanner />
      <SocialMediaGallery />
      <Testimonials />
      <Subscription />
      <Footer />
    </>
  );
};

export default App;

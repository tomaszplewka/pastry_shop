import React from "react";
import CategoryList from "./components/category-list/CategoryList";
import CarouselCustom from "./components/carousel-custom/CarouselCustom";

import FeaturedItems from "./components/sections/featured-items/FeaturedItems";
import SocialMediaGallery from "./components/sections/social-media-gallery/SocialMediaGallery";
import DeliveryBanner from "./components/sections/delivery-banner/DeliveryBanner";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Subscription from "./components/sections/subscription/Subscription";

import "./App.scss";

const App = () => {
  return (
    <div className="">
      {/* <CarouselCustom /> */}
      {/* <CategoryList /> */}
      {/* <FeaturedItems /> */}
      {/* <SocialMediaGallery /> */}
      {/* <DeliveryBanner /> */}
      {/* <Testimonials /> */}
      <Subscription />
    </div>
  );
};

export default App;

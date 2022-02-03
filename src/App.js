import React from "react";
import CategoryList from "./components/category-list/CategoryList";
import CarouselCustom from "./components/carousel-custom/CarouselCustom";

import FeaturedItems from "./components/sections/featured-items/FeaturedItems";
import SocialMediaGallery from "./components/sections/social-media-gallery/SocialMediaGallery";

import Button from "react-bootstrap/Button";

import "./App.scss";

const App = () => {
  return (
    <div className="">
      {/* <CarouselCustom />
      <CategoryList /> */}
      {/* <FeaturedItems /> */}
      <SocialMediaGallery />
      {/* <Button variant="primary">Primary</Button>{" "} */}
    </div>
  );
};

export default App;

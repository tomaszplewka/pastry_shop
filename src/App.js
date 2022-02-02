import React from "react";
import CategoryList from "./components/category-list/CategoryList";
import CarouselCustom from "./components/carousel-custom/CarouselCustom";
import Slider from "./components/slider/Slider";

import Button from "react-bootstrap/Button";

import "./App.scss";

const App = () => {
  return (
    <div className="">
      <CarouselCustom />
      <CategoryList />
      <Slider />
      {/* <Button variant="primary">Primary</Button>{" "} */}
    </div>
  );
};

export default App;

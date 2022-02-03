import React from "react";
import CardItem from "../card-item/CardItem";

import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Slider.scss";

import extraLargeCroissants from "../../assets/images/croissants/xl-croissants.jpg";
import peanutButterCroissants from "../../assets/images/croissants/peanut-butter-croissants.jpg";
import plainCroissants from "../../assets/images/croissants/plain-croissants.jpg";
import chocoCroissants from "../../assets/images/croissants/chocolate-croissants.jpg";

const data = [
  {
    photo: extraLargeCroissants,
    name: "extra large croissants",
    price: 4,
    quantity: "each",
  },
  {
    photo: peanutButterCroissants,
    name: "peanut butter croissants",
    price: 5,
    quantity: "each",
  },
  {
    photo: plainCroissants,
    name: "plain croissants",
    price: 2,
    quantity: "each",
  },
  {
    photo: chocoCroissants,
    name: "chocolate croissants",
    price: 5,
    quantity: "each",
  },
];

const Slider = () => {
  const renderedSlides = data.map((slide, index) => {
    return (
      <SwiperSlide key={index}>
        <CardItem item={slide} />
      </SwiperSlide>
    );
  });
  return (
    <div className="slider--container">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        // autoplay={true}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        speed={500}
        autoHeight={true}
        onSlideChange={() => console.log("slide change")}
      >
        {renderedSlides}
      </Swiper>
    </div>
  );
};

export default Slider;

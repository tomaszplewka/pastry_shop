import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Slider.scss";

const Slider = ({ data, config, render }) => {
  const renderedSlides = data.map((slide, index) => {
    const Component = render;
    return (
      <SwiperSlide key={index}>
        <Component item={slide} />
      </SwiperSlide>
    );
  });
  return (
    <div className="slider__container">
      <Swiper modules={[...config.modules]} {...config}>
        {renderedSlides}
      </Swiper>
    </div>
  );
};

export default Slider;

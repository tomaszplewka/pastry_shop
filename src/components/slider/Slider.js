import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Slider.scss";

const Slider = ({ data, config, render, featured_item, ...otherProps }) => {
  const renderedSlides = data.map((slide, index) => {
    const Component = render;
    return (
      <SwiperSlide key={index}>
        <Component
          item={featured_item ? slide.item : slide}
          category={featured_item ? slide.category : null}
          featured_item={featured_item ?? false}
          {...otherProps}
        />
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

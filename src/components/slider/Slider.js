import React from "react";
import SectionContainer from "../section-container/SectionContainer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Slider.scss";

const Slider = () => {
  return (
    <SectionContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </SectionContainer>
  );
};

export default Slider;

import React from "react";
import Slider from "../../slider/Slider";
import SectionTitle from "../../section-title/SectionTitle";
import SectionContainer from "../../section-container/SectionContainer";
import CardItem from "../../card-item/CardItem";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { Autoplay, EffectCoverflow } from "swiper";

import extraLargeCroissants from "../../../assets/images/croissants/xl-croissants.jpg";
import peanutButterCroissants from "../../../assets/images/croissants/peanut-butter-croissants.jpg";
import plainCroissants from "../../../assets/images/croissants/plain-croissants.jpg";
import chocoCroissants from "../../../assets/images/croissants/chocolate-croissants.jpg";

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

const sliderConfig = {
  modules: [Autoplay, EffectCoverflow],
  effect: "coverflow",
  autoplay: true,
  spaceBetween: 0,
  slidesPerView: 3,
  loop: true,
  speed: 500,
  autoHeight: true,
};

const FeaturedItems = () => {
  return (
    <section className="position-relative">
      <SectionContainer customClass="py-5">
        <SectionTitle title="Featured Items" />
        <Slider data={data} config={sliderConfig} render={CardItem} />
      </SectionContainer>
      <ShapeDividerBottom color="#edffd9" />
    </section>
  );
};

export default FeaturedItems;

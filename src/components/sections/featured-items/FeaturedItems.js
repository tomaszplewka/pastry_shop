import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Slider from "../../slider/Slider";
import SectionTitle from "../../section-title/SectionTitle";
import SectionContainer from "../../section-container/SectionContainer";
import CardItem from "../../card-item/CardItem";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { selectFeaturedItems } from "../../../reducers/shop/shop-selectors";

import { Autoplay, EffectCoverflow } from "swiper";

const sliderConfig = {
  modules: [Autoplay, EffectCoverflow],
  effect: "coverflow",
  autoplay: true,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  speed: 500,
  autoHeight: true,
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
};

const FeaturedItems = ({ featuredItems }) => (
  <section className="position-relative">
    <SectionContainer customClass="py-xl-5 pt-3 pb-5">
      <SectionTitle title="Featured Items" />
      <Slider
        data={featuredItems}
        config={sliderConfig}
        render={CardItem}
        cartBtn
        featured_item
      />
    </SectionContainer>
    <ShapeDividerBottom color="#edffd9" />
  </section>
);

const mapStateToProps = createStructuredSelector({
  featuredItems: selectFeaturedItems
});

export default connect(mapStateToProps)(memo(FeaturedItems));

import React from "react";
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
  slidesPerView: 3,
  loop: true,
  speed: 500,
  autoHeight: true,
};

const FeaturedItems = ({ featuredItems }) => {
  return (
    <section className="position-relative">
      <SectionContainer customClass="py-5">
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
};

const mapStateToProps = createStructuredSelector({
  featuredItems: selectFeaturedItems,
});

export default connect(mapStateToProps)(FeaturedItems);

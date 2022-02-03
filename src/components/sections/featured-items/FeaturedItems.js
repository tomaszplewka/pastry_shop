import React from "react";
import Slider from "../../slider/Slider";
import SectionTitle from "../../section-title/SectionTitle";
import SectionContainer from "../../section-container/SectionContainer";

const FeaturedItems = () => {
  return (
    <SectionContainer customClass="py-5">
      <SectionTitle title="Featured Items" />
      <Slider />
    </SectionContainer>
  );
};

export default FeaturedItems;

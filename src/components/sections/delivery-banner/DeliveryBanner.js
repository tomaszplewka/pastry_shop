import React from "react";

import SectionTitle from "../../section-title/SectionTitle";
import SectionSubtitle from "../../section-subtitle/SectionSubtitle";
import SectionContainer from "../../section-container/SectionContainer";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import skipTheDishes from "../../../assets/images/delivery-banner/skip-the-dishes.png";
import uberEats from "../../../assets/images/delivery-banner/uber-eats.png";

import "./DeliveryBanner.scss";

const data = [
  {
    photo: skipTheDishes
  },
  {
    photo: uberEats
  }
];

const DeliveryBanner = () => {
  const renderedContent = data.map((item, index) => {
    return (
      <div
        key={index}
        className="text-center mb-3 delivery-banner__icon__container"
      >
        <img
          src={item.photo}
          alt=""
          className="my-0 mx-auto delivery-banner__icon"
        />
      </div>
    );
  });

  return (
    <section
      className="position-relative"
      style={{
        background: "#edffd9"
      }}
    >
      <SectionContainer customClass="py-xl-5 pt-3 pb-5 position-relative">
        <SectionTitle title="Serious craving? Get seriously fast delivery!" />
        <SectionSubtitle subtitle="Selected Areas Only" />
        <div className="py-xxl-5 py-xl-4 py-lg-3 d-flex justify-content-center align-items-center delivery-banner__content">
          {renderedContent}
        </div>
      </SectionContainer>
      <ShapeDividerBottom color="#fffeff" />
    </section>
  );
};

export default DeliveryBanner;

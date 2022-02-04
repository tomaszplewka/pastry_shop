import React from "react";
import SectionTitle from "../../section-title/SectionTitle";
import SectionSubtitle from "../../section-subtitle/SectionSubtitle";
import SectionContainer from "../../section-container/SectionContainer";

import skipTheDishes from "../../../assets/images/delivery-banner/skip-the-dishes.png";
import uberEats from "../../../assets/images/delivery-banner/uber-eats.png";

import "./DeliveryBanner.scss";

const data = [
  {
    photo: skipTheDishes,
  },
  {
    photo: uberEats,
  },
];

const DeliveryBanner = () => {
  const renderedContent = data.map((item, index) => {
    return (
      <div key={index} className="delivery-banner__icon__container">
        <img src={item.photo} alt="" className="delivery-banner__icon" />
      </div>
    );
  });

  return (
    <SectionContainer customClass="py-5 position-relative">
      <SectionTitle title="Serious craving? Get seriously fast delivery!" />
      <SectionSubtitle subtitle="Selected Areas Only" />
      <div className="delivery-banner__content">{renderedContent}</div>
    </SectionContainer>
  );
};

export default DeliveryBanner;

import React from "react";
import HeaderBanner from "../../sections/header-banner/HeaderBanner";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";

import background from "../../../assets/images/social-media/social1.jpg";

const ShopPage = () => {
  return (
    <>
      <HeaderBanner image={background} title="our offer" position="530px" />
      <h1>SHOP PAGE</h1>
      <Testimonials />
      <Subscription />
    </>
  );
};

export default ShopPage;

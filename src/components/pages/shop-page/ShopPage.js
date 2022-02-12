import React from "react";
import HeaderBanner from "../../sections/header-banner/HeaderBanner";
import CategoryPreview from "../../sections/category-preview/CategoryPreview";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import background from "../../../assets/images/social-media/social1.jpg";

const ShopPage = () => {
  return (
    <>
      <HeaderBanner image={background} title="our offer" position="530px" />
      <CategoryPreview />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default ShopPage;

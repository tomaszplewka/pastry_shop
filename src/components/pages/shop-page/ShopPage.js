import React from "react";
import { Outlet } from "react-router-dom";

import HeaderBanner from "../../sections/header-banner/HeaderBanner";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import background from "../../../assets/images/social-media/social1.jpg";

const ShopPage = () => (
  <>
    <HeaderBanner image={background} title="Our Offer" position="530px" />
    <Outlet />
    <Testimonials />
    <Subscription />
    <ScrollToTop />
  </>
);

export default ShopPage;

import React from "react";

import Checkout from "../../sections/checkout/Checkout";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import "./CheckoutPage.scss";

const CheckoutPage = () => (
  <>
    <Checkout />
    <Testimonials />
    <Subscription />
    <ScrollToTop />
  </>
);

export default CheckoutPage;

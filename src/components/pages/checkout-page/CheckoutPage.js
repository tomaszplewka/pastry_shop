import React from "react";

import CheckoutForm from "../../sections/checkout-form/CheckoutForm";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import "./CheckoutPage.scss";

const CheckoutPage = () => {
  return (
    <>
      <CheckoutForm />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default CheckoutPage;

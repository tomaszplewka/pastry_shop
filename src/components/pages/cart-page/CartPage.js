import React from "react";

import CartList from "../../sections/cart-list/CartList";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import "./CartPage.scss";

const CartPage = () => {
  return (
    <>
      <CartList />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default CartPage;

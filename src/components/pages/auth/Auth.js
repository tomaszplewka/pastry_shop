import React from "react";
import SignIn from "../../sign-in/SignIn";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

const Auth = () => {
  return (
    <>
      <SignIn />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default Auth;

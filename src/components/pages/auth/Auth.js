import React from "react";
import SignIn from "../../sign-in/SignIn";
import Register from "../../register/Register";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

const Auth = () => {
  return (
    <>
      <Register />
      <SignIn />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default Auth;

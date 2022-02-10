import React from "react";
import HeaderBanner from "../../sections/header-banner/HeaderBanner";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";

import background from "../../../assets/images/carousel5.jpg";

const ContactPage = () => {
  return (
    <>
      <HeaderBanner image={background} title="contact us" position="530px" />
      <h1>CONTACT PAGE</h1>
      TUTAJ FORMULARZ KONTAKTOWY Z JAKIMS TEKSTEM
      <Testimonials />
      <Subscription />
    </>
  );
};

export default ContactPage;

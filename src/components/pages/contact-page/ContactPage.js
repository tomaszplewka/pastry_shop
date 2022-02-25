import React from "react";

import HeaderBanner from "../../sections/header-banner/HeaderBanner";
import ContactForm from "../../sections/contact-form/ContactForm";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import background from "../../../assets/images/carousel2.jpg";

const ContactPage = () => {
  return (
    <>
      <HeaderBanner image={background} title="contact us" position="530px" />
      <ContactForm />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;

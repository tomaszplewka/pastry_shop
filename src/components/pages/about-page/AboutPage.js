import React from "react";
import HeaderBanner from "../../sections/header-banner/HeaderBanner";
import TextSectionExample from "../../sections/text-section-example/TextSectionExample";
import SocialMediaGallery from "../../sections/social-media-gallery/SocialMediaGallery";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import background from "../../../assets/images/carousel4.jpg";

const AboutPage = () => {
  return (
    <>
      <HeaderBanner image={background} title="about us" position="530px" />
      <TextSectionExample />
      <SocialMediaGallery />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default AboutPage;

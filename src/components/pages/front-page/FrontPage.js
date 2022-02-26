import React from "react";

import CarouselCustom from "../../carousel-custom/CarouselCustom";
import Categories from "../../sections/categories/Categories";
import FeaturedItems from "../../sections/featured-items/FeaturedItems";
import DeliveryBanner from "../../sections/delivery-banner/DeliveryBanner";
import SocialMediaGallery from "../../sections/social-media-gallery/SocialMediaGallery";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

const FrontPage = () => {
  return (
    <>
      <CarouselCustom />
      <Categories />
      <FeaturedItems />
      <DeliveryBanner />
      <SocialMediaGallery />
      <Testimonials />
      <Subscription />
      <ScrollToTop />
    </>
  );
};

export default FrontPage;

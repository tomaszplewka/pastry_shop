import React from "react";

import SectionTitle from "../../section-title/SectionTitle";
import SectionContainer from "../../section-container/SectionContainer";
import Slider from "../../slider/Slider";
import CardTestimonial from "../../card-testimonial/CardTestimonial";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { Autoplay, EffectCoverflow } from "swiper";

const data = [
  {
    rating: 5,
    review:
      "My goodness the cookies I ordered for my parents were deemed to be sensational.  Huge cookies delivered on time for the holiday season and they have enjoyed every one.  ",
    reviewer: "John Doe",
    occupation: "Lawyer"
  },
  {
    rating: 4.5,
    review:
      "I use the sweet flour bake shop quite often for birthdays and thank you gifts 🎁 etc …. Always top notch and delicious and fabulous delivery service.  I would highly recommend them always",
    reviewer: "Abigail Johnson",
    occupation: "UI/UX Designer"
  },
  {
    rating: 5,
    review: "The goodies are..hehehe were delicious.  Lovely presentation.",
    reviewer: "Bart Simpson",
    occupation: "Student"
  },
  {
    rating: 5,
    review:
      "My goodness the cookies I ordered for my parents were deemed to be sensational.  Huge cookies delivered on time for the holiday season and they have enjoyed every one.  ",
    reviewer: "Magnus Eriksen",
    occupation: "Plumber"
  }
];

const sliderConfig = {
  modules: [Autoplay, EffectCoverflow],
  effect: "coverflow",
  autoplay: true,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  speed: 500,
  autoHeight: true,
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
};

const Testimonials = () => (
  <section
    className="position-relative"
    style={{
      background: "#eaf2ef"
    }}
  >
    <SectionContainer customClass="py-xl-5 py-3">
      <SectionTitle title="We care about our clients" />
      <Slider data={data} config={sliderConfig} render={CardTestimonial} />
    </SectionContainer>
    <ShapeDividerBottom color="#fffeff" />
  </section>
);

export default Testimonials;

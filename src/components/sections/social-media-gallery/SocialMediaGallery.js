import React from "react";

import GalleryList from "../../gallery-list/GalleryList";
import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

const SocialMediaGallery = () => (
  <section className="position-relative">
    <SectionContainer customClass="py-xl-5 pt-3 pb-5">
      <SectionTitle title="Follow Us On Social Media" />
      <GalleryList />
    </SectionContainer>
    <ShapeDividerBottom color="#eaf2ef" />
  </section>
);

export default SocialMediaGallery;

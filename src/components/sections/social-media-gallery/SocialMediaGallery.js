import React from "react";
import GalleryList from "../../gallery-list/GalleryList";
import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";

const SocialMediaGallery = () => {
  return (
    <SectionContainer customClass="py-5">
      <SectionTitle title="Follow Us On Social Media" />
      <GalleryList />
    </SectionContainer>
  );
};

export default SocialMediaGallery;

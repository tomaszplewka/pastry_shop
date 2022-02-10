import React from "react";
import SectionContainer from "../../section-container/SectionContainer";
import FloatingCookie from "../../floating-cookie/FloatingCookie";

import Fade from "react-reveal/Fade";

import "./HeaderBanner.scss";

const HeaderBanner = ({ image, title, position }) => {
  return (
    <section
      className="header-banner__section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <SectionContainer customClass="h-100 position-relative">
        <div className="header-banner__content">
          <Fade bottom>
            <h1>{title}</h1>
          </Fade>
        </div>
        <FloatingCookie position={position} />
      </SectionContainer>
    </section>
  );
};

export default HeaderBanner;

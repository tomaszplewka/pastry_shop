import React from "react";

import SectionContainer from "../../section-container/SectionContainer";
import FloatingCookie from "../../floating-cookie/FloatingCookie";

import Fade from "react-reveal/Fade";

import "./HeaderBanner.scss";

const HeaderBanner = ({ image, title, position }) => (
  <section
    className="position-relative header-banner__section"
    style={{ backgroundImage: `url(${image})`, zIndex: "1" }}
  >
    <SectionContainer customClass="h-100 position-relative">
      <div className="position-absolute text-center d-inline-flex justify-content-center flex-column header-banner__content">
        <Fade bottom>
          <h1>{title}</h1>
        </Fade>
      </div>
      <FloatingCookie position={position} />
    </SectionContainer>
  </section>
);

export default HeaderBanner;

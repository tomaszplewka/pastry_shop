import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";

import SectionContainer from "../../section-container/SectionContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import { scrollUtility } from "../../utilities/scroll-utility";

import "./Footer.scss";

const Footer = () => {
  const handleNavLinkClick = useCallback(() => scrollUtility(), []);

  return (
    <footer className="text-center footer__container">
      <SectionContainer>
        <div className="w-100 d-flex justify-content-center align-items-center mt-3 footer__items__container">
          <NavLink
            className="text-uppercase text-center position-relative"
            onClick={handleNavLinkClick}
            to="/our-offer"
          >
            offer
          </NavLink>
          <NavLink
            className="text-uppercase text-center position-relative"
            onClick={handleNavLinkClick}
            to="/about-us"
          >
            about us
          </NavLink>
          <NavLink
            className="text-uppercase text-center position-relative"
            onClick={handleNavLinkClick}
            to="/contact"
          >
            contact
          </NavLink>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center mt-3 footer__items__container">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <hr className="w-75 my-xxl-5 my-sm-4 my-2 mx-auto" />
        <div className="w-100 d-flex justify-content-center align-items-center mt-3 footer__items__container">
          <h4 className="fw-bolder text-uppercase">Visit Us</h4>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center mt-3 footer__items__container">
          <p>
            +1 403 477 9000 | pastry.shop@ps.com | 2502 John Laurie Blvd.
            Calgary, NW, Canada
          </p>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center mt-3 footer__items__container">
          <p>
            Pick-up by appointment only at our Kitchen. | Mon-Thu. 8-5:00, Fri.
            8-4:30, Sat. 9-4:30, Sun. 10-5:00{" "}
          </p>
        </div>
        <hr className="w-75 my-xxl-5 my-sm-4 my-2 mx-auto" />
        <div className="w-100 d-flex justify-content-center align-items-center mt-3 footer__items__container">
          <p>Copyright © Tomasz Plewka</p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;

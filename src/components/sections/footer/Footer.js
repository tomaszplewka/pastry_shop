import React from "react";
import SectionContainer from "../../section-container/SectionContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer__container">
      <SectionContainer>
        <div className="footer__items__container">
          <a href="#">offer</a>
          <a href="#">about us</a>
          <a href="#">contact</a>
        </div>
        <div className="footer__items__container">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <hr />
        <div className="footer__items__container">
          <h4>Visit Us</h4>
        </div>
        <div className="footer__items__container">
          <p>
            +1 403 477 9000 | pastry.shop@ps.com | 2502 John Laurie Blvd.
            Calgary, NW, Canada
          </p>
        </div>
        <div className="footer__items__container">
          <p>
            Pick-up by appointment only at our Kitchen. | Mon-Thu. 8-5:00, Fri.
            8-4:30, Sat. 9-4:30, Sun. 10-5:00{" "}
          </p>
        </div>
        <hr />
        <div className="footer__items__container">
          <p>Copyright © Tomasz Plewka</p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;

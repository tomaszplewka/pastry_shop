import React from "react";
import SectionContainer from "../section-container/SectionContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./HeaderSocial.scss";

library.add(faPhone, faEnvelope);

const HeaderSocial = () => {
  return (
    <div className="header-social__container">
      <SectionContainer>
        <ul>
          <li>
            <a href="tel:+1 403 477 9000">
              <FontAwesomeIcon icon={["fas", "phone"]} />
              <span>+1 403 477 9000</span>
            </a>
          </li>
          <li>
            <a href="mailto:pastry.shop@ps.com">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
              <span>pastry.shop@ps.com</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
              <span>facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>instagram</span>
            </a>
          </li>
        </ul>
      </SectionContainer>
    </div>
  );
};

export default HeaderSocial;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./FloatingCookie.scss";

library.add(faCookieBite);

const FloatingCookie = ({ position }) => (
  <div
    className="position-absolute text-center floating-cookie__container"
    style={{
      top: position
    }}
  >
    <FontAwesomeIcon icon={["fas", "cookie-bite"]} />
  </div>
);

export default FloatingCookie;

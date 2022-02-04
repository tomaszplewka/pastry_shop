import React from "react";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import "./GalleryItem.scss";

const GalleryItem = ({ tilt, photo, margin }) => {
  const renderedItem = (
    <div
      className="gallery-item__container"
      style={
        margin === "right" ? { marginRight: "auto" } : { marginLeft: "auto" }
      }
    >
      <img src={photo} alt="" className={`gallery-item__img ${tilt}`} />
      <div className={`gallery-item__img-overlay ${tilt}`}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );

  return (
    <div>
      {margin === "right" ? (
        <Fade right>{renderedItem}</Fade>
      ) : (
        <Fade left>{renderedItem}</Fade>
      )}
    </div>
  );
};

export default GalleryItem;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import "./GalleryItem.scss";

const GalleryItem = ({ tilt, photo }) => {
  return (
    <div
      className="gallery-item__container"
      style={
        tilt === "right" ? { marginRight: "auto" } : { marginLeft: "auto" }
      }
    >
      <img src={photo} alt="" className={`gallery-item__img ${tilt}`} />
      <div className={`gallery-item__img-overlay ${tilt}`}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
};

export default GalleryItem;

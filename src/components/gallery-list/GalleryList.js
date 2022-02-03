import React from "react";
import GalleryItem from "../gallery-item/GalleryItem";

import "./GalleryList.scss";

import Social1 from "../../assets/images/social-media/social1.jpg";
import Social2 from "../../assets/images/social-media/social2.jpg";
import Social3 from "../../assets/images/social-media/social3.jpg";
import Social4 from "../../assets/images/social-media/social4.jpg";

const data = [
  {
    tilt: "left",
    photo: Social2,
  },
  {
    tilt: "right",
    photo: Social1,
  },
  {
    tilt: "right",
    photo: Social3,
  },
  {
    tilt: "left",
    photo: Social4,
  },
];

const GalleryList = () => {
  const renderedItems = data.map((item, index) => {
    return <GalleryItem key={index} tilt={item.tilt} photo={item.photo} />;
  });
  return <div className="gallery-list__container">{renderedItems}</div>;
};

export default GalleryList;

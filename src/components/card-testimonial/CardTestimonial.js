import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./CardTestimonial.scss";

library.add(faQuoteRight, faStar);

const CardTestimonial = ({ item }) => {
  const renderedRating = Array.apply(null, {
    length: Math.ceil(item.rating),
  }).map((element, index) => (
    <span key={index} className="card-testimonial__rating">
      <span
        className={
          Math.ceil(item.rating) !== Math.floor(item.rating) &&
          index === Math.ceil(item.rating) - 1
            ? "half"
            : ""
        }
      >
        <FontAwesomeIcon icon={["fas", "star"]} inverse />
      </span>
    </span>
  ));

  return (
    <div className="card-testimonial__container">
      <div className="card-testimonial__rating__container">
        <span className="card-testimonial__reviewer">{item.reviewer}</span>
        {renderedRating}
      </div>
      <div className="card-testimonial__occupation__container">
        <p className="card-testimonial__occupation">{item.occupation}</p>
      </div>
      <div className="card-testimonial__review__container">
        <FontAwesomeIcon icon={["fas", "quote-right"]} />
        <p className="card-testimonial__review">{item.review}</p>
        <FontAwesomeIcon icon={["fas", "quote-right"]} />
      </div>
    </div>
  );
};

export default CardTestimonial;

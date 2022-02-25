import React from "react";

import Carousel from "react-bootstrap/Carousel";

import Fade from "react-reveal/Fade";

import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";

import "./CarouselCustom.scss";

const CarouselCustom = () => {
  return (
    <Carousel fade controls={false} className="carousel__container">
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="First slide" />
        <Carousel.Caption bsPrefix="carousel-caption-custom">
          <Fade bottom cascade>
            <h1>Valentine's Day Is Coming!</h1>
            <h5>Send Your Valentine a Cookie Surprise!</h5>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="Second slide" />
        <Carousel.Caption bsPrefix="carousel-caption-custom right">
          <Fade bottom cascade>
            <h1>Visit Us</h1>
            <h5>Enjoy Our Selection Of Cookies</h5>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Third slide" />
        <Carousel.Caption bsPrefix="carousel-caption-custom">
          <Fade bottom cascade>
            <h1>Come With Your Family</h1>
            <h5>Enjoy Freshly Baked Goods And Pastry Items</h5>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCustom;

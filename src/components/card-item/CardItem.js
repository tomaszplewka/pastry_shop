import React from "react";
import Btn from "../Btn/Btn";

import "./CardItem.scss";

const CardItem = ({ item, addToCard }) => {
  const { name, price, image, quantity, id, availability } = item;
  return (
    <div className={`card-item ${addToCard ? "extend" : ""}`}>
      <div className="card-item__img__container">
        <div
          className="card-item__img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <div className="card-item__body">
        <span className="name">{name}</span>
        <span className="price">{`$${price} / ${quantity}`}</span>
        {addToCard ? (
          <Btn invert fullwidth>
            add to cart
          </Btn>
        ) : null}
      </div>
    </div>
  );
};

export default CardItem;

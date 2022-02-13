import React from "react";
import { connect } from "react-redux";

import Btn from "../Btn/Btn";

import actions from "../../actions";

import "./CardItem.scss";

const CardItem = ({ item, cartBtn, addToCart }) => {
  const { name, price, image, price_per, id, availability } = item;
  return (
    <div className={`card-item ${cartBtn ? "extend" : ""}`}>
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
        <span className="price">{`$${price} / ${price_per}`}</span>
        {cartBtn ? (
          <Btn onClick={() => addToCart(item)} invert fullwidth>
            add to cart
          </Btn>
        ) : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: actions.addToCart,
};

export default connect(null, mapDispatchToProps)(CardItem);

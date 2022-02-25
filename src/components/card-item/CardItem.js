import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Btn from "../Btn/Btn";

import actions from "../../actions";

import { scrollUtility } from "../utilities/scroll-utility";

import "./CardItem.scss";

const CardItem = ({ item, cartBtn, addToCart, featured_item, category }) => {
  const navigate = useNavigate();
  const params = useParams();

  const { name, price, image, price_per, availability } = item;

  const handleItemClick = () => {
    navigate(
      featured_item
        ? `/our-offer/${category}/${name.split(" ").join("-")}`
        : params.itemsCategory
        ? `/our-offer/${params.itemsCategory}/${name.split(" ").join("-")}`
        : `/our-offer/${category}/${name.split(" ").join("-")}`
    );
    scrollUtility();
  };

  return (
    <div className={`card-item ${cartBtn ? "extend" : ""}`}>
      <div className="card-item__img__container">
        <div
          className="card-item__img"
          style={{
            backgroundImage: `url(${image})`,
          }}
          onClick={() => handleItemClick()}
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

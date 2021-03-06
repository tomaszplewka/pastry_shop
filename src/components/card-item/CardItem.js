import React, { useCallback, memo } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Btn from "../Btn/Btn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import actions from "../../actions";

import { scrollUtility } from "../utilities/scroll-utility";

import "./CardItem.scss";

library.add(faBan);

const CardItem = ({ item, cartBtn, addToCart, featured_item, category }) => {
  const navigate = useNavigate();
  const params = useParams();

  const { name, price, image, price_per, availability } = item;

  const handleItemClick = useCallback(() => {
    navigate(
      featured_item
        ? `/our-offer/${category}/${name.split(" ").join("-")}`
        : params.itemsCategory
        ? `/our-offer/${params.itemsCategory}/${name.split(" ").join("-")}`
        : `/our-offer/${category}/${name.split(" ").join("-")}`
    );
    scrollUtility();
  }, [category, featured_item, name, navigate, params.itemsCategory]);

  return (
    <div
      className={`d-flex justify-content-start align-items-center flex-column position-relative card-item ${
        cartBtn ? "extend" : ""
      } ${availability === "available" ? "" : "dimmed"}`}
    >
      <div className="position-absolute overflow-hidden w-100 h-100 card-item__img__container">
        <div
          className="position-absolute w-100 h-100 card-item__img"
          style={{
            backgroundImage: `url(${image})`
          }}
          onClick={handleItemClick}
        ></div>
      </div>
      <div className="position-relative d-flex justify-content-center align-items-center flex-column card-item__body">
        <span className="text-center name">{name}</span>
        <span className="price">{`$${price} / ${price_per}`}</span>
        {cartBtn ? (
          availability === "available" ? (
            <Btn onClick={() => addToCart(item)} invert fullwidth>
              add to cart
            </Btn>
          ) : (
            <Btn onClick={() => addToCart(item)} invert fullwidth disabled>
              add to cart
            </Btn>
          )
        ) : null}
        {availability === "available" ? null : (
          <FontAwesomeIcon icon={["fas", "ban"]} />
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: actions.addToCart
};

export default connect(null, mapDispatchToProps)(memo(CardItem));

import React, { memo } from "react";
import { connect } from "react-redux";

import actions from "../../actions";

import "./CartItem.scss";

const CartItem = ({ item, removeItem, addToCart, decreaseItemQty }) => {
  const { image, name, price, quantity } = item;

  return (
    <div className="d-flex align-items-center cart-item__container">
      <div className="d-flex justify-content-center cart-item__item">
        <div className="d-flex justify-content-between align-items-center flex-xl-row flex-column w-100">
          <img src={image} alt="" />
          <span className="fw-bold text-uppercase text-center">{name}</span>
        </div>
      </div>
      <div className="d-flex justify-content-evenly align-items-center flex-lg-row flex-column-reverse cart-item__qty">
        <button
          className="decrement"
          name="decrement"
          onClick={() => decreaseItemQty(item)}
        ></button>
        <span>{quantity}</span>
        <button
          className="increment"
          name="increment"
          onClick={() => addToCart(item)}
        ></button>
      </div>
      <div className="text-center cart-item__price">
        <span>${price}</span>
      </div>
      <div className="text-center cart-item__total">
        <span>${quantity * price}</span>
      </div>
      <div className="text-center cart-item__remove">
        <span onClick={() => removeItem(item)}>&#215;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeItem: actions.removeFromCartDirectly,
  addToCart: actions.addToCart,
  decreaseItemQty: actions.decreaseItemQty
};

export default connect(null, mapDispatchToProps)(memo(CartItem));

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import actions from "../../actions";

import "./CartItem.scss";

const CartItem = ({ item, removeItem, addToCart, decreaseItemQty }) => {
  const { image, name, price, quantity } = item;

  return (
    <div className="cart-item__container">
      <div className="cart-item__item">
        <div>
          <img src={image} alt="" />
          <span>{name}</span>
        </div>
      </div>
      <div className="cart-item__qty">
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
      <div className="cart-item__price">
        <span>${price}</span>
      </div>
      <div className="cart-item__total">
        <span>${quantity * price}</span>
      </div>
      <div className="cart-item__remove">
        <span onClick={() => removeItem(item)}>&#215;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeItem: actions.removeFromCartDirectly,
  addToCart: actions.addToCart,
  decreaseItemQty: actions.decreaseItemQty,
};

export default connect(null, mapDispatchToProps)(CartItem);

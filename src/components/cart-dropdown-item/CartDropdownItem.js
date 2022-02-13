import React from "react";

import "./CartDropdownItem.scss";

const CartDropdownItem = ({ item }) => {
  const { name, price, quantity, image } = item;

  return (
    <div className="cart-item__container">
      <div className="cart-item__image__container">
        <img className="cart-item__image" src={image} alt="" />
      </div>
      <div className="cart-item__content">
        <h6 className="cart-item__title">{name}</h6>
        <div className="cart-item__content__details">
          <span className="cart-item__quantity">
            <span>Qty:&nbsp;</span>
            {quantity}
          </span>
          <span className="cart-item__total">
            <span>Tot:&nbsp;</span>${quantity * price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartDropdownItem;

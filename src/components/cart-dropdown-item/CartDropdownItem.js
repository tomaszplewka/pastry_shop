import React from "react";

import "./CartDropdownItem.scss";

const CartDropdownItem = ({ item }) => {
  const { name, price, quantity, image } = item;

  return (
    <div className="d-flex justify-content-between align-items-center cart-dropdown-item__container">
      <div className="cart-dropdown-item__image__container">
        <img className="cart-dropdown-item__image" src={image} alt="" />
      </div>
      <div className="cart-dropdown-item__content">
        <h6 className="fw-bolder text-uppercase cart-dropdown-item__title">
          {name}
        </h6>
        <div className="d-flex flex-column align-items-start cart-dropdown-item__content__details">
          <span className="cart-dropdown-item__quantity">
            <span>Qty:&nbsp;</span>
            {quantity}
          </span>
          <span className="cart-dropdown-item__total">
            <span>Tot:&nbsp;</span>${quantity * price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartDropdownItem;

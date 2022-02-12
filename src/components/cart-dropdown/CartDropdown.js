import React from "react";

import Btn from "../Btn/Btn";

import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items__container"></div>
      <Btn fullwidth invert>
        checkout
      </Btn>
    </div>
  );
};

export default CartDropdown;

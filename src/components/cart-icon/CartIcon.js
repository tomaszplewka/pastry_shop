import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import actions from "../../actions";

import "./CartIcon.scss";

library.add(faShoppingCart);

const CartIcon = ({ toggleCart }) => {
  return (
    <span className="cart-icon__container" onClick={toggleCart}>
      <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
      <span className="cart-icon__quantity">10</span>
    </span>
  );
};

const mapDispatchToProps = {
  toggleCart: actions.toggleCart,
};

export default connect(null, mapDispatchToProps)(CartIcon);

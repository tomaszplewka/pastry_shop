import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import actions from "../../actions";
import { selectCartItemsQuantity } from "../../reducers/cart/cart-selectors";

import "./CartIcon.scss";

library.add(faShoppingCart);

const CartIcon = ({ toggleCart, cartQuantity }) => {
  return (
    <span
      className="position-relative cart-icon__container"
      onClick={toggleCart}
    >
      <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
      {cartQuantity ? (
        <span className="position-absolute d-inline-flex justify-content-center align-items-center fw-bold cart-icon__quantity">
          {cartQuantity}
        </span>
      ) : null}
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    cartQuantity: selectCartItemsQuantity(state),
  };
};

const mapDispatchToProps = {
  toggleCart: actions.toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

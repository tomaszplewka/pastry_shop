import React from "react";
import { connect } from "react-redux";

import Btn from "../Btn/Btn";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from "../../reducers/cart/cart-selectors";

import "./CartDropdown.scss";

const CartDropdown = ({ items }) => {
  const renderedItems = items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items__container">
        {renderedItems.length ? (
          renderedItems
        ) : (
          <span className="cart-dropdown__notification">
            your cart is empty
          </span>
        )}
      </div>
      {renderedItems.length ? (
        <Btn fullwidth invert>
          checkout
        </Btn>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);

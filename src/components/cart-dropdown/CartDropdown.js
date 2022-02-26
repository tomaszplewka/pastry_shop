import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Btn from "../Btn/Btn";
import CartDropdownItem from "../cart-dropdown-item/CartDropdownItem";

import { selectCartItems } from "../../reducers/cart/cart-selectors";

import actions from "../../actions";
import { scrollUtility } from "../utilities/scroll-utility";

import "./CartDropdown.scss";

const CartDropdown = ({ items, dispatch }) => {
  const navigate = useNavigate();

  const renderedItems = items.map((item) => {
    return <CartDropdownItem key={item.id} item={item} />;
  });

  const handleBtnClick = (e) => {
    scrollUtility();
    navigate("/cart");
    dispatch(actions.toggleCart());
  };

  return (
    <div className="position-absolute d-flex flex-column cart-dropdown__container">
      <div className="cart-dropdown__items__container">
        {renderedItems.length ? (
          renderedItems
        ) : (
          <span className="position-absolute fw-bold text-uppercase d-inline-flex justify-content-center align-items-center cart-dropdown__notification">
            your cart is empty
          </span>
        )}
      </div>
      {renderedItems.length ? (
        <Btn onClick={handleBtnClick} fullwidth invert>
          review cart
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

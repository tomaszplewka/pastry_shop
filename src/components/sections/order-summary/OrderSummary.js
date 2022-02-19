import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../../reducers/cart/cart-selectors";

import "./OrderSummary.scss";

const OrderSummary = ({ cart }) => {
  console.log(cart);
  const renderedItems = cart.map((item, index) => {
    return (
      <div key={index}>
        <div>
          <span>{item.name}</span>
          <span>{item.quantity}</span>
        </div>
        <div>
          <span>{item.quantity * item.price}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="mb-5 order-summary__container">
      <h2 className="order-summary__title">order summary</h2>
      <div className="order-summary__content">
        {renderedItems}
        <div className="order-summary__content__shipping">shipping costs</div>
        <div className="order-summary__content__total">total goes here</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: selectCartItems(state),
});

export default connect(mapStateToProps)(OrderSummary);

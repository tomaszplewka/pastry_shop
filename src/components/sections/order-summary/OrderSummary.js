import React, { useMemo } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../../reducers/cart/cart-selectors";

import "./OrderSummary.scss";

const OrderSummary = ({ cart, getTotal, methodShipping }) => {
  const renderedItems = useMemo(
    () =>
      cart.map((item, index) => (
        <div key={index} className="order-summary__content__item">
          <div>
            <span className="order-summary__content__item__name">
              {item.name}
            </span>
            <span className="order-summary__content__item__qty">
              {item.quantity}
            </span>
          </div>
          <div>
            <span className="order-summary__content__item__price">
              ${item.quantity * item.price}
            </span>
          </div>
        </div>
      )),
    [cart]
  );

  return (
    <div className="m-auto mb-5 p-4 overflow-hidden position-sticky order-summary__container">
      <h2 className="text-uppercase fw-bolder text-center order-summary__title">
        order summary
      </h2>
      <div className="order-summary__content">
        {renderedItems}
        <div className="order-summary__content__shipping">
          <span>Shipping cost:</span>
          <span>{methodShipping ? `$${methodShipping}` : "not specified"}</span>
        </div>
        <div className="order-summary__content__total">
          <span>Total:</span>
          <span>
            ${methodShipping ? getTotal + parseFloat(methodShipping) : getTotal}
          </span>
        </div>
      </div>
    </div>
  );
};

const selector = formValueSelector("checkout-form");

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
  getTotal: selectCartItemsTotal,
  methodShipping: (state) => selector(state, "method_shipping")
});

export default connect(mapStateToProps)(OrderSummary);

import React from "react";
import { Field } from "redux-form";

import "./ShippingMethods.scss";

const ShippingMethods = ({ isError }) => {
  return (
    <div className="checkout-form__method--shipping">
      <h2 className="ms-0 fw-bolder text-uppercase form__title">
        shipping methods
      </h2>
      <label>
        <Field
          name="method_shipping"
          component="input"
          type="radio"
          value="10"
        />
        <div className="d-flex justify-content-between align-items-center checkout-form__method--shipping__container">
          <span className="fw-bold text-uppercase checkout-form__method--shipping__name">
            Fast Courier
          </span>
          <span className="checkout-form__method--shipping__price">$10</span>
        </div>
      </label>
      <label>
        <Field
          name="method_shipping"
          component="input"
          type="radio"
          value="0"
        />
        <div className="d-flex justify-content-between align-items-center checkout-form__method--shipping__container">
          <span className="fw-bold text-uppercase checkout-form__method--shipping__name">
            self-pickup
          </span>
          <span className="checkout-form__method--shipping__price">free</span>
        </div>
      </label>
      <div className="w-100 text-center form-input__error">
        {isError && <span className="fw-bold">"Choose shipping method.</span>}
      </div>
    </div>
  );
};

export default ShippingMethods;

import React from "react";
import { Field } from "redux-form";

import "./PaymentMethods.scss";

const PaymentMethods = ({ isError }) => (
  <div className="checkout-form__method--payment">
    <h2 className="ms-0 fw-bolder text-uppercase form__title">
      payment methods
    </h2>
    <label>
      <Field
        name="method_payment"
        component="input"
        type="radio"
        value="stripe"
      />
      <div className="checkout-form__method--payment__container">
        <span className="checkout-form__method--payment__nname">Stripe</span>
      </div>
    </label>
    <label>
      <Field
        name="method_payment"
        component="input"
        type="radio"
        value="bank_transfer"
      />
      <div className="d-flex justify-content-between align-items-center checkout-form__method--payment__container">
        <span className="fw-bold text-uppercase checkout-form__method--payment__nname">
          Bank transfer
        </span>
      </div>
    </label>
    <div className="w-100 text-center form-input__error">
      {isError === undefined && (
        <span className="fw-bold d-block pt-4">Choose payment method.</span>
      )}
    </div>
  </div>
);

export default PaymentMethods;

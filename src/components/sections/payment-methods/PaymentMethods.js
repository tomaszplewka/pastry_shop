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
        value="e-transfer"
        required
      />
      <div className="checkout-form__method--payment__container">
        <span className="fw-bold text-uppercase d-block text-center checkout-form__method--payment__name">
          e-Transfer
        </span>
      </div>
    </label>
    <label>
      <Field
        name="method_payment"
        component="input"
        type="radio"
        value="bank_transfer"
        required
      />
      <div className="d-flex justify-content-between align-items-center checkout-form__method--payment__container">
        <span className="fw-bold text-uppercase d-block text-center checkout-form__method--payment__name">
          Bank transfer
        </span>
      </div>
    </label>
    <div className="w-100 text-center form-input__error">
      {isError === undefined && (
        <span className="fw-bold d-block pt-lg-4 pt-2">
          Choose payment method.
        </span>
      )}
    </div>
  </div>
);

export default PaymentMethods;

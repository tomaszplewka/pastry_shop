import React from "react";
import { Field } from "redux-form";

import FormInput from "../../form-input/FormInput";

import { renderField } from "../../utilities/redux-form";

import "./ShippingFields.scss";

const ShippingFields = () => (
  <div className="checkout-form__form--shipping">
    <h2 className="ms-0 fw-bolder text-uppercase form__title">
      shipping address
    </h2>
    <Field
      name="address_shipping"
      type="text"
      label="address"
      placeholder="Address"
      component={renderField}
      torender={FormInput}
    />
    <Field
      name="zip_shipping"
      type="text"
      label="zip code"
      placeholder="Zip Code"
      component={renderField}
      torender={FormInput}
    />
    <Field
      name="city_shipping"
      type="text"
      label="city"
      placeholder="City"
      component={renderField}
      torender={FormInput}
    />
  </div>
);

export default ShippingFields;

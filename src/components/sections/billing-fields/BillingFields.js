import React from "react";
import { Field } from "redux-form";

import FormInput from "../../form-input/FormInput";

import { renderField } from "../../utilities/redux-form";

import "./BillingFields.scss";

const BillingForm = () => (
  <>
    <h2 className="ms-0 fw-bolder text-uppercase form__title">
      billing address
    </h2>
    <Field
      name="full_name"
      type="text"
      label="full name"
      placeholder="Full Name"
      component={renderField}
      torender={FormInput}
    />
    <Field
      name="email"
      type="email"
      label="email"
      placeholder="E-mail"
      component={renderField}
      torender={FormInput}
    />
    <Field
      name="phone"
      type="text"
      label="phone"
      placeholder="Phone"
      component={renderField}
      torender={FormInput}
    />
    <Field
      name="address"
      type="text"
      label="address"
      placeholder="Address"
      component={renderField}
      torender={FormInput}
    />
    <Field
      name="zip"
      type="text"
      label="zip code"
      placeholder="Zip Code"
      component={renderField}
      torender={FormInput}
    />
    <Field
      name="city"
      type="text"
      label="city"
      placeholder="City"
      component={renderField}
      torender={FormInput}
    />
  </>
);

export default BillingForm;

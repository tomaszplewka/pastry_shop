import React from "react";

import "./FormInput.scss";

const FormInput = ({
  onChange,
  inline,
  label,
  invert,
  fullwidth,
  hide,
  ...otherProps
}) => (
  <div
    className={`d-flex justify-content-between align-items-center flex-sm-row flex-column form-input__container  ${
      inline && fullwidth ? "text-start alternate-margin" : ""
    }`}
    style={
      inline ? { width: "50%", display: "inline-block" } : { width: "100%" }
    }
  >
    {hide ? null : (
      <label
        className="d-inline-block w-50 text-uppercase fw-bold"
        htmlFor={otherProps.name}
      >
        {label}
      </label>
    )}
    <input
      className={`${invert ? "invert" : ""}`}
      onChange={onChange}
      style={
        fullwidth
          ? inline
            ? { width: "95%", margin: "0rem 0rem 0.75rem 0rem" }
            : { width: "100%", margin: "0rem 0rem 0.75rem" }
          : { width: "50%", margin: "0rem 0rem 0.5rem" }
      }
      id={otherProps.name}
      {...otherProps}
    />
  </div>
);

export default FormInput;

import React from "react";

import "./FormTextarea.scss";

const FormTextarea = ({
  onChange,
  hide,
  label,
  invert,
  fullwidth,
  inline,
  ...otherProps
}) => (
  <div className="form-textarea__container">
    {hide ? null : (
      <label
        className="fw-bold w-50 text-uppercase"
        style={{ display: "inline-block" }}
        htmlFor={otherProps.id}
      >
        {label}
      </label>
    )}
    <textarea
      className={invert ? "invert" : ""}
      onChange={onChange}
      style={
        !fullwidth
          ? { width: "50%", margin: "0rem 0rem 0.5rem" }
          : { width: "100%", margin: "0rem 0rem 0.75rem" }
      }
      {...otherProps}
    ></textarea>
  </div>
);

export default FormTextarea;

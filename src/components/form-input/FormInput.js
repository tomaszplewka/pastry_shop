import React from "react";

import "./FormInput.scss";

const FormInput = ({ onChange, label, invert, ...otherProps }) => {
  const { inline, hide } = otherProps;
  return (
    <div
      className="form-input__container"
      style={inline ? { width: "50%" } : { width: "100%" }}
    >
      <label
        htmlFor={otherProps.id}
        style={hide ? { display: "none" } : { display: "inline" }}
      >
        {label}
      </label>
      <input
        className={`${invert && "invert"}`}
        onChange={onChange}
        style={
          inline
            ? { width: "100%", margin: "0rem 0rem 0.5rem" }
            : { width: "50%", margin: "0rem 0rem 0.75rem" }
        }
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;

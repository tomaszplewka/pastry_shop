import React from "react";

import { Link } from "react-router-dom";

import "./Form.scss";

const Form = ({ children, title, subtitle, urlSlug }) => {
  return (
    <div className="mb-5 form__container">
      <h2 className="form__title">{title}</h2>
      <p className="form__subtitle">
        {subtitle[0]}&nbsp;<Link to={`/${urlSlug}`}>{subtitle[1]}</Link>
      </p>
      <form className="form">{children}</form>
    </div>
  );
};

export default Form;

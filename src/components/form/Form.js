import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import actions from "../../actions";

import "./Form.scss";

const Form = ({
  children,
  title,
  subtitle,
  urlSlug,
  setIsRegisterActive,
  handleSubmit,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    urlSlug === "register"
      ? setIsRegisterActive(true)
      : setIsRegisterActive(false);
    navigate(`/${urlSlug}`);
  };

  return (
    <div className="mb-5 position-relative m-auto overflow-hidden form__container">
      {title ? (
        <h2 className="text-center fw-bolder text-uppercase form__title">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="d-flex justify-content-center align-items-center form__subtitle">
          {subtitle[0]}&nbsp;
          <span className="text-decoration-underline" onClick={handleClick}>
            {subtitle[1]}
          </span>
        </p>
      ) : null}
      {handleSubmit ? (
        <form onSubmit={handleSubmit} className="form">
          {children}
        </form>
      ) : (
        <form className="form">{children}</form>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  setIsRegisterActive: actions.setIsRegisterActive,
};

export default connect(null, mapDispatchToProps)(Form);

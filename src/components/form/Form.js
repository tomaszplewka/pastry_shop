import React from "react";

import { useNavigate } from "react-router-dom";

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
    <div className="mb-5 form__container">
      <h2 className="form__title">{title}</h2>
      {subtitle ? (
        <p className="form__subtitle">
          {subtitle[0]}&nbsp;<span onClick={handleClick}>{subtitle[1]}</span>
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

export default Form;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import Firebase from "../modules/Firebase";

import actions from "../../actions";

import "./Register.scss";

const Register = ({
  handleSubmit,
  submitting,
  setUserStart,
  setUserFailure,
}) => {
  const navigate = useNavigate();

  const handleRegisterSubmit = ({ email, password }) => {
    console.log("REGISTER CLICKED");

    Firebase.registerUserWithEmailAndPassword(
      {
        email,
        password,
      },
      navigate,
      setUserStart,
      setUserFailure
    );
  };

  return (
    <section
      className="py-5 position-relative register__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer customClass="mt-3 py-5">
        <Form
          title="Register"
          subtitle={["Do you already have an account?", "Sign in here"]}
          urlSlug="sign-in"
          handleSubmit={handleSubmit(handleRegisterSubmit)}
        >
          <Field
            name="username"
            type="text"
            label="username"
            placeholder="Username"
            component={renderField}
          />
          <Field
            name="email"
            type="email"
            label="email"
            placeholder="E-mail"
            component={renderField}
          />
          <Field
            name="password"
            type="password"
            label="password"
            placeholder="Password"
            component={renderField}
          />
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            component={renderField}
          />
          <Btn type="submit" disabled={submitting} fullwidth invert>
            Register
          </Btn>
        </Form>
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "This field is required.";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "This field is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Provide valid email address.";
  }

  if (!values.password) {
    errors.password = "Provide password.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password.";
  }

  if (values.password !== values.confirmPassword) {
    errors.password = "Passwords do not match.";
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

const renderField = ({
  input,
  name,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <>
    <FormInput
      type={type}
      name={name}
      required
      label={label}
      placeholder={placeholder}
      invert
      {...input}
    />
    <div className="form-input__error">
      {touched && error && <span>{error}</span>}
    </div>
  </>
);

const mapDispatchToProps = {
  setUserStart: actions.setUserStart,
  setUserFailure: actions.setUserFailure,
};

export default reduxForm({
  form: "register-form",
  validate,
})(connect(null, mapDispatchToProps)(Register));

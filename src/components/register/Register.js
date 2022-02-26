import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";

import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import Firebase from "../modules/Firebase";

import { validate, renderField } from "../utilities/redux-form";

import "./Register.scss";

const Register = ({ handleSubmit, submitting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegisterSubmit = ({ email, password }) => {
    console.log("REGISTER CLICKED");
    Firebase.registerUserWithEmailAndPassword(
      {
        email,
        password,
      },
      navigate,
      dispatch
    );
  };

  return (
    <section
      className="py-5 mt-5 position-relative register__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer customClass="mt-5 py-5">
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
            name="password"
            type="password"
            label="password"
            placeholder="Password"
            component={renderField}
            torender={FormInput}
          />
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            component={renderField}
            torender={FormInput}
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

export default reduxForm({
  form: "register-form",
  validate,
})(Register);

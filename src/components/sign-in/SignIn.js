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

import "./SignIn.scss";

const SignIn = ({ handleSubmit, submitting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = (values) => {
    console.log(values);
    console.log("SIGN IN CLICKED");
    Firebase.logInEmailAndPassword(values, navigate, dispatch);
  };

  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    console.log("SIGN IN WITH GOOGLE CLICKED");
    Firebase.logInGoogle(navigate, dispatch);
  };

  return (
    <section
      className="py-5 mt-5 position-relative sign-in__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer customClass="mt-5 py-5">
        <Form
          title="Sign In"
          subtitle={["First visit?", "Register here"]}
          urlSlug="register"
          handleSubmit={handleSubmit(handleSignIn)}
        >
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
          <div className="d-flex flex-column mb-0">
            <Btn type="submit" disabled={submitting} fullwidth invert>
              Sign In
            </Btn>
            <Btn onClick={handleSignInWithGoogle} fullwidth invert>
              Sign In With Google
            </Btn>
          </div>
        </Form>
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default reduxForm({
  form: "sign-in-form",
  validate,
})(SignIn);

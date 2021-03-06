import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import { selectUserFetchingError } from "../../reducers/user/user-selectors";

import actions from "../../actions";

import Firebase from "../modules/Firebase";

import { validate, renderField } from "../utilities/redux-form";

const Register = ({ handleSubmit, submitting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => selectUserFetchingError(state));

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(actions.setUserFailure());
      }, 5000);
    }
  }, [dispatch, error]);

  const handleRegisterSubmit = useCallback(
    ({ email, password }) => {
      Firebase.registerUserWithEmailAndPassword(
        {
          email,
          password
        },
        navigate,
        dispatch
      );
    },
    [dispatch, navigate]
  );

  return (
    <section
      className="py-lg-5 py-2 mt-5 position-relative register__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)"
      }}
    >
      <SectionContainer customClass="mt-5 py-lg-5 py-4">
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
          {error ? (
            <div className="w-100 my-4 text-center form-input__error">
              <span className="fw-bold text-uppercase">
                server error:&nbsp;
                {error
                  .slice(error.indexOf("/") + 1, -2)
                  .split("-")
                  .join(" ")}
              </span>
            </div>
          ) : null}
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
  validate
})(Register);

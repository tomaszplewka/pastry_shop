import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import Firebase from "../modules/Firebase";

import { selectUserFetchingError } from "../../reducers/user/user-selectors";

import actions from "../../actions";

import { validate, renderField } from "../utilities/redux-form";

import "./SignIn.scss";

const SignIn = ({ handleSubmit, submitting }) => {
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

  const handleSignIn = useCallback(
    (values) => {
      Firebase.logInEmailAndPassword(values, navigate, dispatch);
    },
    [dispatch, navigate]
  );

  const handleSignInWithGoogle = useCallback(
    (e) => {
      e.preventDefault();
      Firebase.logInGoogle(navigate, dispatch);
    },
    [dispatch, navigate]
  );

  return (
    <section
      className="py-5 mt-5 position-relative sign-in__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)"
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
            name="password_sign_in"
            type="password"
            label="password"
            placeholder="Password"
            component={renderField}
            torender={FormInput}
          />
          {error ? (
            <div className="w-100 mt-5 mb-3 text-center form-input__error">
              <span className="fw-bold text-uppercase">
                server error:&nbsp;
                {error
                  .slice(error.indexOf("/") + 1, -2)
                  .split("-")
                  .join(" ")}
              </span>
            </div>
          ) : null}
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
  validate
})(SignIn);

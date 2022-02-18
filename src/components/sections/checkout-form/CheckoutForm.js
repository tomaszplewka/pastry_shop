import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate, Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Btn from "../../Btn/Btn";
import Form from "../../form/Form";
import FormInput from "../../form-input/FormInput";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { scrollUtility } from "../../utilities/scroll-utility";

import { selectUser } from "../../../reducers/user/user-selectors";
import { selectCartItems } from "../../../reducers/cart/cart-selectors";

import "./CheckoutForm.scss";

const CheckoutForm = ({ user, cart, handleSubmit, submitting }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    switch (e.target.id) {
      case "login":
        navigate("/sign-in");
        scrollUtility();
        break;
      case "register":
        navigate("/register");
        scrollUtility();
        break;
      default:
        break;
    }
  };

  return (
    <>
      {cart.length ? (
        <section
          className="pb-5 position-relative checkout-form__section"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
          }}
        >
          <SectionContainer>
            <SectionTitle title="Your checkout" />
            <div className="checkout-form__content__container">
              <div className="checkout-form__content">
                {user.id ? null : (
                  <div className="checkout-form__notice">
                    <p>
                      You are currently ordering as a guest.
                      <br />
                      To login click{" "}
                      <span id="login" onClick={handleClick}>
                        here
                      </span>
                      .<br />
                      To register with us click{" "}
                      <span id="register" onClick={handleClick}>
                        here
                      </span>
                    </p>
                  </div>
                )}
                <div className="checkout-form__form--billing">
                  <Form
                    title="Billing Address"
                    // handleSubmit={handleSubmit(handleSignIn)}
                  >
                    <Field
                      name="full_name"
                      type="text"
                      label="full name"
                      placeholder="Full Name"
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
                      name="phone"
                      type="text"
                      label="phone"
                      placeholder="Phone"
                      component={renderField}
                    />
                    <Field
                      name="address"
                      type="text"
                      label="address"
                      placeholder="Address"
                      component={renderField}
                    />
                    <Field
                      name="zip"
                      type="text"
                      label="zip code"
                      placeholder="Zip Code"
                      component={renderField}
                    />
                    <Field
                      name="city"
                      type="text"
                      label="city"
                      placeholder="City"
                      component={renderField}
                    />
                    <span className="checkout-form__form__checkbox-shipping">
                      <label htmlFor="consent" className="">
                        <input
                          type="checkbox"
                          name="consent"
                          id="consent"
                          className=""
                          value="1"
                        />
                        <span>
                          "I have read the Shop Policy as well as the Privacy
                          Policy and Cookies, and I accept the Shop Policy and
                          the Privacy Policy and Cookies." *
                        </span>
                      </label>
                    </span>
                  </Form>
                </div>
              </div>
              <div className="checkout-form__sidebar"></div>
            </div>
          </SectionContainer>
          <ShapeDividerBottom color="#eaf2ef" />
        </section>
      ) : (
        <Navigate to="/cart" />
      )}
    </>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "This field is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Provide valid email address.";
  }
  if (!values.password) {
    errors.password = "Provide password.";
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

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  cart: selectCartItems,
});

export default reduxForm({
  form: "checkout-form",
  validate,
})(connect(mapStateToProps)(CheckoutForm));

import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { useNavigate, Navigate } from "react-router-dom";
import { Field, reduxForm, formValueSelector } from "redux-form";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Btn from "../../Btn/Btn";
import FormTextarea from "../../form-textarea/FormTextarea";
import Form from "../../form/Form";
import FormInput from "../../form-input/FormInput";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";
import OrderSummary from "../order-summary/OrderSummary";

import { scrollUtility } from "../../utilities/scroll-utility";

import { selectUser } from "../../../reducers/user/user-selectors";
import { selectCartItems } from "../../../reducers/cart/cart-selectors";

import "./CheckoutForm.scss";

const CheckoutForm = ({
  user,
  cart,
  handleSubmit,
  submitting,
  consent,
  methodPayment,
}) => {
  console.log("CONSENT: ", consent);
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
                    <span className="checkout-form__form__checkbox">
                      <label htmlFor="consent" className="">
                        <Field
                          name="consent"
                          component="input"
                          type="checkbox"
                          id="consent"
                          className=""
                          value="1"
                          required
                        />
                        <span>
                          {/* "I have read the Shop Policy as well as the Privacy
                          Policy and Cookies, and I accept the Shop Policy and
                          the Privacy Policy and Cookies." * */}
                          Ship to a different address
                        </span>
                      </label>
                    </span>
                    {consent ? (
                      <div className="checkout-form__form--shipping">
                        <h2 className="form__title">shipping address</h2>
                        <Field
                          name="address_shipping"
                          type="text"
                          label="address"
                          placeholder="Address"
                          component={renderField}
                        />
                        <Field
                          name="zip_shipping"
                          type="text"
                          label="zip code"
                          placeholder="Zip Code"
                          component={renderField}
                        />
                        <Field
                          name="city_shipping"
                          type="text"
                          label="city"
                          placeholder="City"
                          component={renderField}
                        />
                      </div>
                    ) : null}
                    <div className="checkout-form__method--shipping">
                      <h2 className="form__title">shipping method</h2>
                      <label>
                        <Field
                          name="method_shipping"
                          component="input"
                          type="radio"
                          value="10"
                        />
                        <div className="checkout-form__method--shipping__container">
                          <span className="checkout-form__method--shipping__nname">
                            Fast Courier
                          </span>
                          <span className="checkout-form__method--shipping__price">
                            $10
                          </span>
                        </div>
                      </label>
                      <label>
                        <Field
                          name="method_shipping"
                          component="input"
                          type="radio"
                          value="0"
                        />
                        <div className="checkout-form__method--shipping__container">
                          <span className="checkout-form__method--shipping__nname">
                            self-pickup
                          </span>
                          <span className="checkout-form__method--shipping__price">
                            free
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="checkout-form__method--payment">
                      <h2 className="form__title">payment method</h2>
                      <label>
                        <Field
                          name="method_payment"
                          component="input"
                          type="radio"
                          value="stripe"
                        />
                        <div className="checkout-form__method--payment__container">
                          <span className="checkout-form__method--payment__nname">
                            Stripe
                          </span>
                        </div>
                      </label>
                      <label>
                        <Field
                          name="method_payment"
                          component="input"
                          type="radio"
                          value="bank_transfer"
                        />
                        <div className="checkout-form__method--payment__container">
                          <span className="checkout-form__method--payment__nname">
                            Bank transfer
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="checkout-form__additional-comments">
                      <h2 className="form__title">additional comments</h2>
                      <Field
                        name="additional_comments"
                        component={FormTextarea}
                        required
                        placeholder="Additional comments"
                        hide
                        invert
                        fullwidth
                      />
                    </div>
                    <span className="checkout-form__form__checkbox">
                      <label htmlFor="consent_consent" className="">
                        <Field
                          name="consent_consent"
                          component="input"
                          type="checkbox"
                          id="consent_consent"
                          className=""
                          value="1"
                          required
                        />
                        <span>
                          "I have read the Shop Policy as well as the Privacy
                          Policy and Cookies, and I accept the Shop Policy and
                          the Privacy Policy and Cookies." *
                        </span>
                      </label>
                    </span>
                    <span className="checkout-form__form__checkbox">
                      <label htmlFor="consent_email" className="">
                        <Field
                          name="consent_email"
                          component="input"
                          type="checkbox"
                          id="consent_email"
                          className=""
                          value="1"
                        />
                        <span>
                          "I agree to receive from Pastry Shop based in Kelowna,
                          commercial information regarding Pastry Shop and its
                          partners to the e-mail address provided by me. "
                          (optional)
                        </span>
                      </label>
                    </span>
                    <div className="mt-5 pt-3">
                      {methodPayment === "stripe" ? (
                        <Btn type="submit" fullwidth invert>
                          Order & Pay with Stripe
                        </Btn>
                      ) : (
                        <Btn type="submit" fullwidth invert>
                          Order & Pay
                        </Btn>
                      )}
                    </div>
                  </Form>
                </div>
              </div>
              <div className="checkout-form__sidebar">
                <OrderSummary />
              </div>
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
  console.log(values);
  const errors = {};

  if (!values.email) {
    errors.email = "This field is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Provide valid email address.";
  }

  if (!values.password) {
    errors.password = "Provide password.";
  }

  if (!values.consent) {
    errors.consent = "chuj";
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

const selector = formValueSelector("checkout-form");

const mapStateToProps = (state) => ({
  user: selectUser(state),
  cart: selectCartItems(state),
  consent: selector(state, "consent"),
  methodPayment: selector(state, "method_payment"),
});

const formWrapped = reduxForm({
  form: "checkout-form",
  validate,
})(CheckoutForm);

export default connect(mapStateToProps)(formWrapped);

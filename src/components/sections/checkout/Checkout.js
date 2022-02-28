import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { useNavigate, Navigate } from "react-router-dom";
import { Field, reduxForm, formValueSelector } from "redux-form";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Btn from "../../Btn/Btn";
import StripeBtn from "../../stripe-btn/StripeBtn";
import FormTextarea from "../../form-textarea/FormTextarea";
import Form from "../../form/Form";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";
import OrderSummary from "../order-summary/OrderSummary";
import BillingFields from "../billing-fields/BillingFields";
import ShippingFields from "../shipping-fields/ShippingFields";
import ShippingMethods from "../shipping-methods/ShippingMethods";
import PaymentMethods from "../payment-methods/PaymentMethods";

import { scrollUtility } from "../../utilities/scroll-utility";

import { validate } from "../../utilities/redux-form";

import { selectUser } from "../../../reducers/user/user-selectors";
import { selectCartItems } from "../../../reducers/cart/cart-selectors";

import "./Checkout.scss";

const CheckoutForm = ({
  user,
  cart,
  handleSubmit,
  submitting,
  differentAddress,
  methodShipping,
  methodPayment,
}) => {
  const navigate = useNavigate();

  if (!cart.length) {
    return <Navigate to="/cart" />;
  }

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

  const renderedFormNotice = user.id ? null : (
    <div className="checkout-form__notice">
      <p>
        You are currently ordering as a guest.
        <br />
        To login click{" "}
        <span
          className="text-decoration-underline fw-bold"
          id="login"
          onClick={handleClick}
        >
          here
        </span>
        .<br />
        To register with us click{" "}
        <span
          className="text-decoration-underline fw-bold"
          id="register"
          onClick={handleClick}
        >
          here
        </span>
      </p>
    </div>
  );

  const renderedShippingFields = differentAddress ? <ShippingFields /> : null;

  return (
    <>
      <section
        className="pb-5 mt-5 position-relative checkout-form__section"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
        }}
      >
        <SectionContainer customClass="my-5">
          <SectionTitle title="Your checkout" />
          <div className="d-flex checkout-form__content__container">
            <div className="checkout-form__content">
              {renderedFormNotice}
              <div className="checkout-form__form">
                <Form
                // handleSubmit={handleSubmit(handleSignIn)}
                >
                  <BillingFields />
                  <span className="d-block checkout-form__form__checkbox">
                    <label
                      htmlFor="differentAddress"
                      className="position-relative"
                    >
                      <Field
                        name="differentAddress"
                        component="input"
                        type="checkbox"
                        id="differentAddress"
                      />
                      <span>Ship to a different address</span>
                    </label>
                  </span>
                  {renderedShippingFields}
                  <ShippingMethods isError={!!methodShipping} />
                  <PaymentMethods isError={!!methodPayment} />
                  <div className="checkout-form__additional-comments">
                    <h2 className="ms-0 fw-bolder text-uppercase form__title">
                      additional comments
                    </h2>
                    <Field
                      name="additional_comments"
                      component={FormTextarea}
                      placeholder="Additional comments"
                      hide
                      invert
                      fullwidth
                    />
                  </div>
                  <span className="d-block checkout-form__form__checkbox">
                    <label htmlFor="consent" className="position-relative">
                      <Field
                        name="consent"
                        component="input"
                        type="checkbox"
                        id="consent"
                        required
                      />
                      <span>
                        "I have read the Shop Policy as well as the Privacy
                        Policy and Cookies, and I accept the Shop Policy and the
                        Privacy Policy and Cookies." *
                      </span>
                    </label>
                  </span>
                  <span className="d-block checkout-form__form__checkbox">
                    <label
                      htmlFor="consent_email"
                      className="position-relative"
                    >
                      <Field
                        name="consent_email"
                        component="input"
                        type="checkbox"
                        id="consent_email"
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
                      <StripeBtn />
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
    </>
  );
};

const selector = formValueSelector("checkout-form");

const mapStateToProps = (state) => ({
  user: selectUser(state),
  cart: selectCartItems(state),
  differentAddress: selector(state, "differentAddress"),
  methodShipping: selector(state, "method_shipping"),
  methodPayment: selector(state, "method_payment"),
});

const formWrapped = reduxForm({
  form: "checkout-form",
  validate,
})(CheckoutForm);

export default connect(mapStateToProps)(formWrapped);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Btn from "../../Btn/Btn";
import CartItem from "../../cart-item/CartItem";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { scrollUtility } from "../../utilities/scroll-utility";

import { selectUser } from "../../../reducers/user/user-selectors";

import "./CheckoutForm.scss";

const CheckoutForm = () => {
  return (
    <section
      className="pb-5 position-relative checkout-form__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer>
        <SectionTitle title="Your checkout" />
        <div className="checkout-form__form__container">
          <div className="checkout-form__form"></div>
          <div className="checkout-form__sidebar"></div>
        </div>
      </SectionContainer>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(CheckoutForm);

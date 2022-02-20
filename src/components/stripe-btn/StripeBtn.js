import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Btn from "../Btn/Btn";

import { PUBLISHABLE_KEY } from "../modules/Stripe";

import "./StripeBtn.scss";

const StripeBtn = ({ total }) => {
  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  const amount = 3000;

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={PUBLISHABLE_KEY}
      name="Pastry Shop"
      amount={amount}
      ComponentClass="div"
    >
      <Btn type="submit" fullwidth invert>
        Order & Pay with Stripe
      </Btn>
    </StripeCheckout>
  );
};

export default StripeBtn;

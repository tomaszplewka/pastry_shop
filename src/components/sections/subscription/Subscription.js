import React, { useCallback, useState } from "react";
import { Field, reduxForm } from "redux-form";

import SectionTitle from "../../section-title/SectionTitle";
import SectionSubtitle from "../../section-subtitle/SectionSubtitle";
import SectionContainer from "../../section-container/SectionContainer";
import FormInput from "../../form-input/FormInput";
import Btn from "../../Btn/Btn";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { validate, renderField } from "../../utilities/redux-form";

import "./Subscription.scss";

const Subscription = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsSubscribed(true);
    // setTimeout(() => {
    //   setIsSubscribed(false);
    // }, 3000);
  }, []);

  return (
    <section className="position-relative">
      <SectionContainer customClass="py-5">
        <SectionTitle title="Sweet Deals & 10% Off" />
        <SectionSubtitle subtitle="Subscribe to Receive Sweet Deals and Treats!" />
        {isSubscribed ? (
          <div className="mt-3 mb-5 pb-5 text-center">
            <h4>Thank you for subscribing to our newsletter!</h4>
          </div>
        ) : (
          <div className="pb-5 my-0 mx-auto subscription__container">
            <form
              className="w-100 d-flex flex-column justify-content-between align-items-center subscription__form"
              onSubmit={handleSubmit}
            >
              <div className="w-100 d-flex flex-column mt-2 subscription__input__container">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  hide={true}
                  fullwidth={true}
                  invert={false}
                  component={renderField}
                  torender={FormInput}
                />
              </div>
              <Btn type="submit" fullwidth={true}>
                Subscribe
              </Btn>
            </form>
          </div>
        )}
      </SectionContainer>
      <ShapeDividerBottom color="#1e212b" />
    </section>
  );
};

export default reduxForm({
  form: "subscription-form",
  validate
})(Subscription);

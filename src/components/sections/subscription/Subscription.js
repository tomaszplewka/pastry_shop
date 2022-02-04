import React from "react";
import SectionTitle from "../../section-title/SectionTitle";
import SectionSubtitle from "../../section-subtitle/SectionSubtitle";
import SectionContainer from "../../section-container/SectionContainer";
import FormInput from "../../form-input/FormInput";

import "./Subscription.scss";

const Subscription = () => {
  return (
    <SectionContainer customClass="py-5">
      <SectionTitle title="Sweet Deals & 10% Off" />
      <SectionSubtitle subtitle="Subscribe to Receive Sweet Deals and Treats!" />
      <div className="subscription__container">
        <form className="subscription__form">
          <div className="subscription__input__container">
            <FormInput
              type="text"
              id="username"
              name="username"
              // value={username} required
              // onChange={handleChange}
              hide={1}
              inline={1}
              placeholder="Username"
            />
            <FormInput
              type="email"
              id="email"
              name="email"
              // value={email} required
              // onChange={handleChange}
              hide={1}
              inline={1}
              placeholder="Email"
            />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Subscription;

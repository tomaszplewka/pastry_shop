import React from "react";
import SectionTitle from "../../section-title/SectionTitle";
import SectionSubtitle from "../../section-subtitle/SectionSubtitle";
import SectionContainer from "../../section-container/SectionContainer";
import FormInput from "../../form-input/FormInput";
import Btn from "../../Btn/Btn";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import "./Subscription.scss";

const Subscription = () => {
  return (
    <section className="position-relative">
      <SectionContainer customClass="py-5">
        <SectionTitle title="Sweet Deals & 10% Off" />
        <SectionSubtitle subtitle="Subscribe to Receive Sweet Deals and Treats!" />
        <div className="pb-5 subscription__container">
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
            <Btn type="submit" fullwidth={true}>
              Subscribe
            </Btn>
          </form>
        </div>
      </SectionContainer>
      <ShapeDividerBottom color="#1e212b" />
    </section>
  );
};

export default Subscription;

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
        <div className="pb-5 my-0 mx-auto subscription__container">
          <form className="w-100 d-flex flex-column justify-content-between align-items-center subscription__form">
            <div className="w-100 d-flex mt-2 subscription__input__container">
              <FormInput
                type="email"
                id="email"
                name="email"
                // value={email} required
                // onChange={handleChange}
                placeholder="Email"
                hide
                fullwidth
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

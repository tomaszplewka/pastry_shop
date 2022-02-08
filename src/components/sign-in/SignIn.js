import React from "react";
import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import { Link } from "react-router-dom";

import "./SignIn.scss";

const SignIn = () => {
  return (
    <section
      className="py-5 position-relative sign-in__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer customClass="mt-3 py-5">
        <div className="mb-5 sign-in__container">
          <h2 className="sign-in__title">Sign In</h2>
          <p>
            First visit?&nbsp;<Link to="/register">Register here</Link>
          </p>
          <form className="sign-in__form">
            <FormInput
              type="email"
              id="email"
              name="email"
              // value={email}
              required
              // onChange={handleChange}
              label="email"
              placeholder="E-mail"
              invert
            />
            <FormInput
              type="password"
              id="password"
              name="password"
              // value={password}
              required
              // onChange={handleChange}
              label="password"
              placeholder="Password"
              invert
            />
            <Btn type="submit" fullwidth invert>
              Sign In
            </Btn>
            {/* <Btn type="button" fullWidth onClick={googleSignInStart}>
          Sign In With Google
        </Btn> */}
          </form>
        </div>
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default SignIn;

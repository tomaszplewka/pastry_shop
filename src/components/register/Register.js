import React from "react";
import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import { Link } from "react-router-dom";

import "./Register.scss";

const Register = () => {
  return (
    <section
      className="py-5 position-relative register__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer customClass="mt-3 py-5">
        <Form
          title="Register"
          subtitle={["Do you already have an account?", "Sign in here"]}
          urlSlug="sign-in"
        >
          <FormInput
            type="text"
            id="Username"
            name="Username"
            // value={displayName}
            required
            // onChange={handleChange}
            label="Username"
            placeholder="Username"
            invert
          />
          <FormInput
            type="email"
            id="email"
            name="email"
            // value={email}
            required
            // onChange={handleChange}
            label="email"
            placeholder="Email"
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
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            // value={confirmPassword}
            required
            // onChange={handleChange}
            label="confirm Password"
            placeholder="Confirm Password"
            invert
          />
          <Btn type="submit" fullwidth invert>
            Register
          </Btn>
          {/* <Btn type="button" fullWidth onClick={googleSignInStart}>
          Sign In With Google
        </Btn> */}
        </Form>
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default Register;

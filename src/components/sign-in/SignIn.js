import React from "react";
import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import { useNavigate } from "react-router-dom";

import "./SignIn.scss";

const SignIn = ({ auth, setIsRegisterActive }) => {
  const navigate = useNavigate();

  const handleSignInClick = (e) => {
    e.preventDefault();
    console.log("SIGN IN CLICKED");

    auth.logInGoogle(navigate);
  };

  return (
    <section
      className="py-5 position-relative sign-in__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer customClass="mt-3 py-5">
        <Form
          title="Sign In"
          subtitle={["First visit?", "Register here"]}
          urlSlug="register"
          setIsRegisterActive={setIsRegisterActive}
        >
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
          <Btn
            onClick={(e) => handleSignInClick(e)}
            type="submit"
            fullwidth
            invert
          >
            Sign In
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

export default SignIn;

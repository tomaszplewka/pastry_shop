import React, { useState } from "react";
import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import { useNavigate } from "react-router-dom";

import "./SignIn.scss";

const SignIn = ({ auth, setIsRegisterActive }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("SIGN IN CLICKED");
    auth.logInEmailAndPassword(
      {
        email,
        password,
      },
      navigate
    );
  };

  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    console.log("SIGN IN WITH GOOGLE CLICKED");
    auth.logInGoogle(navigate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
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
          handleSubmit={handleSignIn}
        >
          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            label="email"
            placeholder="E-mail"
            invert
          />
          <FormInput
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
            label="password"
            placeholder="Password"
            invert
          />
          <div className="d-flex flex-column mb-0">
            <Btn type="submit" fullwidth invert>
              Sign In
            </Btn>
            <Btn onClick={handleSignInWithGoogle} fullwidth invert>
              Sign In With Google
            </Btn>
          </div>
        </Form>
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default SignIn;

import React, { useState } from "react";
import SectionContainer from "../section-container/SectionContainer";
import ShapeDividerBottom from "../shape-divider-bottom/ShapeDividerBottom";
import Form from "../form/Form";
import FormInput from "../form-input/FormInput";
import Btn from "../Btn/Btn";

import { useNavigate } from "react-router-dom";

import "./Register.scss";

const Register = ({ auth, setIsRegisterActive }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("REGISTER CLICKED");

    auth.registerUserWithEmailAndPassword(
      {
        email,
        password,
      },
      navigate
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

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
          handleSubmit={handleRegisterSubmit}
          setIsRegisterActive={setIsRegisterActive}
        >
          <FormInput
            type="text"
            id="username"
            name="username"
            value={username}
            required
            onChange={handleChange}
            label="Username"
            placeholder="Username"
            invert
          />
          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            label="email"
            placeholder="Email"
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
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={handleChange}
            label="confirm Password"
            placeholder="Confirm Password"
            invert
          />
          <Btn type="submit" fullwidth invert>
            Register
          </Btn>
        </Form>
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default Register;

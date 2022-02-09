import React, { useState } from "react";
import SignIn from "../../sign-in/SignIn";
import Register from "../../register/Register";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";
import { Navigate } from "react-router-dom";

const Auth = ({ auth, user }) => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  return (
    <>
      {user.id ? (
        <Navigate to="/" />
      ) : (
        <>
          {isRegisterActive ? (
            <Register auth={auth} setIsRegisterActive={setIsRegisterActive} />
          ) : (
            <SignIn auth={auth} setIsRegisterActive={setIsRegisterActive} />
          )}
          <Testimonials />
          <Subscription />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

export default Auth;

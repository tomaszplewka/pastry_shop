import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignIn from "../../sign-in/SignIn";
import Register from "../../register/Register";
import Testimonials from "../../sections/testimonials/Testimonials";
import Subscription from "../../sections/subscription/Subscription";
import ScrollToTop from "../../scroll-to-top/ScrollToTop";

import {
  selectUser,
  selectIsRegisterActive,
} from "../../../reducers/user/user-selectors";

const Auth = ({ user, isRegisterActive }) => {
  const location = useLocation();

  return (
    <>
      {user.id ? (
        <Navigate to="/" />
      ) : (
        <>
          {isRegisterActive || location.pathname === "/register" ? (
            <Register />
          ) : (
            <SignIn />
          )}
          <Testimonials />
          <Subscription />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  isRegisterActive: selectIsRegisterActive,
});

export default connect(mapStateToProps)(Auth);

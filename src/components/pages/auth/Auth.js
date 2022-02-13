import React, { useState } from "react";
import { Navigate } from "react-router-dom";
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
  return (
    <>
      {user.id ? (
        <Navigate to="/" />
      ) : (
        <>
          {isRegisterActive ? <Register /> : <SignIn />}
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

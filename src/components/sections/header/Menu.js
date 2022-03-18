import React, { useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectIsCartOpen } from "../../../reducers/cart/cart-selectors";
import { selectUser } from "../../../reducers/user/user-selectors";
import actions from "../../../actions";

import Firebase from "../../modules/Firebase";

import { scrollUtility } from "../../utilities/scroll-utility";

import "./Menu.scss";

const MenuDesktop = ({
  user,
  isCartOpen,
  setIsRegisterActive,
  toggleCart,
  onMobileNavLinkClick
}) => {
  const dispatch = useDispatch();

  const handleNavLinkClick = useCallback(() => {
    scrollUtility();
    if (isCartOpen) {
      toggleCart();
    }
    if (document.body.classList.contains("overflow-hidden")) {
      onMobileNavLinkClick();
    }
  }, [isCartOpen, toggleCart, onMobileNavLinkClick]);

  const handleSignOutClick = useCallback(() => {
    scrollUtility();
    Firebase.logOut(dispatch);
    handleNavLinkClick();
  }, [dispatch, handleNavLinkClick]);

  const handleSignInClick = useCallback(() => {
    scrollUtility();
    setIsRegisterActive(false);
    handleNavLinkClick();
  }, [setIsRegisterActive, handleNavLinkClick]);

  return (
    <>
      <NavLink
        className="d-inline-block border-0 position-relative my-0 mx-lg-3 mx-2 py-0 px-2"
        onClick={handleNavLinkClick}
        to="/our-offer"
      >
        <span className="d-inline-block text-uppercase">our offer</span>
      </NavLink>
      <NavLink
        className="d-inline-block border-0 position-relative my-0 mx-lg-3 mx-2 py-0 px-2"
        onClick={handleNavLinkClick}
        to="about-us"
      >
        <span className="d-inline-block text-uppercase">about us</span>
      </NavLink>
      <NavLink
        className="d-inline-block border-0 position-relative my-0 mx-lg-3 mx-2 py-0 px-2"
        onClick={handleNavLinkClick}
        to="contact"
      >
        <span className="d-inline-block text-uppercase">contact</span>
      </NavLink>
      {user.id ? (
        <div
          className="d-inline-block border-0 position-relative my-0 mx-lg-3 mx-2 py-0 px-2"
          onClick={(e) => handleSignOutClick(e)}
        >
          <span className="d-inline-block text-uppercase">sign out</span>
        </div>
      ) : (
        <NavLink
          className="d-inline-block border-0 position-relative my-0 mx-lg-3 mx-2 py-0 px-2"
          onClick={handleSignInClick}
          to="sign-in"
        >
          <span className="d-inline-block text-uppercase">sign in</span>
        </NavLink>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  isCartOpen: selectIsCartOpen
});

const mapDispatchToProps = {
  setIsRegisterActive: actions.setIsRegisterActive,
  toggleCart: actions.toggleCart
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuDesktop);

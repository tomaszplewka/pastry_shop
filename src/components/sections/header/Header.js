import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import SectionContainer from "../../section-container/SectionContainer";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import Firebase from "../../modules/Firebase";

import logo from "../../../assets/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import actions from "../../../actions";
import { selectIsCartOpen } from "../../../reducers/cart/cart-selectors";
import { selectUser } from "../../../reducers/user/user-selectors";
import { scrollUtility } from "../../utilities/scroll-utility";

import "./Header.scss";
import "./HeaderSocial.scss";

library.add(faShoppingCart, faPhone, faEnvelope);

const Header = ({ user, isCartOpen, setIsRegisterActive, toggleCart }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const className = "shrink";
    const scrollTrigger = 20;
    const target = ref.current;

    const onScrollChange = () => {
      if (window.scrollY >= scrollTrigger) {
        target.classList.add(className);
      } else {
        target.classList.remove(className);
      }
    };

    window.addEventListener("scroll", onScrollChange);

    return () => {
      window.removeEventListener("beforeunload", onScrollChange);
    };
  }, []);

  const handleSignOutClick = (e) => {
    scrollUtility();
    Firebase.logOut(dispatch);
    handleNavLinkClick();
  };

  const handleSignInClick = (e) => {
    scrollUtility();
    setIsRegisterActive(false);
    handleNavLinkClick();
  };

  const handleNavLinkClick = () => {
    scrollUtility();
    if (isCartOpen) {
      toggleCart();
    }
  };

  return (
    <>
      <section className="position-fixed header-social__container">
        <SectionContainer>
          <ul className="d-flex justify-content-center align-items-center m-0 p-0 list-unstyled">
            <li className="d-inline-flex justify-content-center align-items-center m-0">
              <a
                className="text-decoration-none d-flex justify-content-center align-items-center"
                href="tel:+1 403 477 9000"
              >
                <FontAwesomeIcon icon={["fas", "phone"]} />
                <span>+1 403 477 9000</span>
              </a>
            </li>
            <li className="d-inline-flex justify-content-center align-items-center m-0">
              <a
                className="text-decoration-none d-flex justify-content-center align-items-center"
                href="mailto:pastry.shop@ps.com"
              >
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <span>pastry.shop@ps.com</span>
              </a>
            </li>
            <li className="d-inline-flex justify-content-center align-items-center m-0">
              <a
                className="text-decoration-none d-flex justify-content-center align-items-center"
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span>facebook</span>
              </a>
            </li>
            <li className="d-inline-flex justify-content-center align-items-center m-0">
              <a
                className="text-decoration-none d-flex justify-content-center align-items-center"
                href="https://www.instagram.com"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span>instagram</span>
              </a>
            </li>
          </ul>
        </SectionContainer>
      </section>
      <header
        ref={ref}
        className="position-fixed d-flex justify-content-center align-items-center header__container"
      >
        <SectionContainer customClass="d-flex justify-content-between align-items-center position-relative">
          <div className="position-relative header__logo__container">
            <NavLink onClick={handleNavLinkClick} to="/">
              <img
                className="position-absolute header__logo"
                src={logo}
                alt=""
              />
            </NavLink>
          </div>
          <nav className="d-flex justify-content-evenly align-items-center header__menu__container">
            <NavLink
              className="d-inline-block border-0 position-relative my-0 mx-3 py-0 px-2"
              onClick={handleNavLinkClick}
              to="/our-offer"
            >
              <span className="d-inline-block text-uppercase">our offer</span>
            </NavLink>
            <NavLink
              className="d-inline-block border-0 position-relative my-0 mx-3 py-0 px-2"
              onClick={handleNavLinkClick}
              to="about-us"
            >
              <span className="d-inline-block text-uppercase">about us</span>
            </NavLink>
            <NavLink
              className="d-inline-block border-0 position-relative my-0 mx-3 py-0 px-2"
              onClick={handleNavLinkClick}
              to="contact"
            >
              <span className="d-inline-block text-uppercase">contact</span>
            </NavLink>
            {user.id ? (
              <div
                className="d-inline-block border-0 position-relative my-0 mx-3 py-0 px-2"
                onClick={(e) => handleSignOutClick(e)}
              >
                <span className="d-inline-block text-uppercase">sign out</span>
              </div>
            ) : (
              <NavLink
                className="d-inline-block border-0 position-relative my-0 mx-3 py-0 px-2"
                onClick={handleSignInClick}
                to="sign-in"
              >
                <span className="d-inline-block text-uppercase">sign in</span>
              </NavLink>
            )}
            <CartIcon />
          </nav>
          {isCartOpen ? <CartDropdown /> : null}
        </SectionContainer>
      </header>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  isCartOpen: selectIsCartOpen,
});

const mapDispatchToProps = {
  setIsRegisterActive: actions.setIsRegisterActive,
  toggleCart: actions.toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

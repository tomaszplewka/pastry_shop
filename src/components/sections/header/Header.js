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
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import actions from "../../../actions";
import { selectIsCartOpen } from "../../../reducers/cart/cart-selectors";
import { selectUser } from "../../../reducers/user/user-selectors";
import { scrollUtility } from "../../utilities/scroll-utility";

import "./Header.scss";
import "./HeaderSocial.scss";

library.add(faShoppingCart, faSearch, faPhone, faEnvelope);

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
      <section className="header-social__container">
        <SectionContainer>
          <ul>
            <li>
              <a href="tel:+1 403 477 9000">
                <FontAwesomeIcon icon={["fas", "phone"]} />
                <span>+1 403 477 9000</span>
              </a>
            </li>
            <li>
              <a href="mailto:pastry.shop@ps.com">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <span>pastry.shop@ps.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span>facebook</span>
              </a>
            </li>
            <li>
              <a
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
      <header ref={ref} className="header__container">
        <SectionContainer customClass="d-flex justify-content-between align-items-center position-relative">
          <div className="header__logo__container">
            <NavLink onClick={handleNavLinkClick} to="/">
              <img className="header__logo" src={logo} alt="" />
            </NavLink>
          </div>
          <nav className="header__menu__container">
            <NavLink onClick={handleNavLinkClick} to="/our-offer">
              <span>our offer</span>
            </NavLink>
            <NavLink onClick={handleNavLinkClick} to="about-us">
              <span>about us</span>
            </NavLink>
            <NavLink onClick={handleNavLinkClick} to="contact">
              <span>contact</span>
            </NavLink>
            {user.id ? (
              <div onClick={(e) => handleSignOutClick(e)}>
                <span>sign out</span>
              </div>
            ) : (
              <NavLink onClick={handleSignInClick} to="sign-in">
                <span>sign in</span>
              </NavLink>
            )}
            <CartIcon />
            {/* <FontAwesomeIcon icon={["fas", "search"]} /> */}
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

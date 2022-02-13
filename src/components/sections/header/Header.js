import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

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

import "./Header.scss";
import "./HeaderSocial.scss";

library.add(faShoppingCart, faSearch, faPhone, faEnvelope);

const Header = ({ user, isCartOpen, setIsRegisterActive }) => {
  const ref = useRef();

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
    Firebase.logOut();
  };

  const handleSignInClick = (e) => {
    setIsRegisterActive(false);
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
            <NavLink to="/">
              <img className="header__logo" src={logo} alt="" />
            </NavLink>
          </div>
          <nav className="header__menu__container">
            <NavLink to="/our-offer">
              <span>our offer</span>
            </NavLink>
            <NavLink to="about-us">
              <span>about us</span>
            </NavLink>
            <NavLink to="contact">
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isCartOpen: state.cart.isCartOpen,
  };
};

const mapDispatchToProps = {
  setIsRegisterActive: actions.setIsRegisterActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

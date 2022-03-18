import React, { useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SectionContainer from "../../section-container/SectionContainer";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import Menu from "./Menu";

import logo from "../../../assets/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import actions from "../../../actions";
import { selectIsCartOpen } from "../../../reducers/cart/cart-selectors";
import { selectUser } from "../../../reducers/user/user-selectors";
import { scrollUtility } from "../../utilities/scroll-utility";

import "./Header.scss";
import "./HeaderSocial.scss";

library.add(faShoppingCart, faPhone, faEnvelope);

const Header = ({ isCartOpen, toggleCart }) => {
  const ref = useRef();
  const menu = useRef();
  const burger = useRef();

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

  const handleNavLinkClick = useCallback(() => {
    scrollUtility();
    if (isCartOpen) {
      toggleCart();
    }
  }, [isCartOpen, toggleCart]);

  const handleMobileMenuClick = () => {
    menu.current.classList.toggle("open");
    burger.current.classList.toggle("open");
    document.body.classList.toggle("overflow-hidden");
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
        className="position-fixed d-flex justify-content-center align-items-center position-relative header__container"
      >
        <SectionContainer customClass="d-flex justify-content-between align-items-center">
          <div className="position-relative header__logo__container">
            <NavLink onClick={handleNavLinkClick} to="/">
              <img
                className="position-absolute header__logo"
                src={logo}
                alt=""
              />
            </NavLink>
          </div>
          <div className="d-flex justify-content-evenly align-items-center header__menu__container">
            <nav ref={menu}>
              <Menu onMobileNavLinkClick={handleMobileMenuClick} />
            </nav>
            <CartIcon />
          </div>
          <div
            ref={burger}
            className="header__menu--mobile-burger"
            onClick={handleMobileMenuClick}
          >
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {isCartOpen ? <CartDropdown /> : null}
        </SectionContainer>
      </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

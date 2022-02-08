import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionContainer from "../../section-container/SectionContainer";

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

import "./Header.scss";
import "./HeaderSocial.scss";

library.add(faShoppingCart, faSearch, faPhone, faEnvelope);

const Header = () => {
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
        <SectionContainer customClass="d-flex justify-content-between align-items-center">
          <div className="header__logo__container">
            <Link to="/">
              <img className="header__logo" src={logo} alt="" />
            </Link>
          </div>
          <nav className="header__menu__container">
            <Link to="/our-offer">
              <span>our offer</span>
            </Link>
            <Link to="about-us">
              <span>about us</span>
            </Link>
            <Link to="contact">
              <span>contact</span>
            </Link>
            <Link to="sign-in">
              <span>sign in</span>
            </Link>
            <Link to="sign-out">
              <span>sign out</span>
            </Link>
            {/* <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
          <FontAwesomeIcon icon={["fas", "search"]} /> */}
          </nav>
        </SectionContainer>
      </header>
    </>
  );
};

export default Header;
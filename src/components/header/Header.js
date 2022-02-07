import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionContainer from "../section-container/SectionContainer";

import logo from "../../assets/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./Header.scss";

library.add(faShoppingCart, faSearch);

const Header = () => {
  useEffect(() => {
    const className = "shrink";
    const scrollTrigger = 60;

    const onScrollChange = () => {
      if (window.scrollY >= scrollTrigger) {
        document.querySelector("header").classList.add(className);
      } else {
        document.querySelector("header").classList.remove(className);
      }
    };

    window.addEventListener("scroll", onScrollChange);

    return () => {
      window.removeEventListener("beforeunload", onScrollChange);
    };
  }, []);

  return (
    <header className="header__container">
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
  );
};

export default Header;

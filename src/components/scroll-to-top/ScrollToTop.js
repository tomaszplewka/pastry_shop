import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./ScrollToTop.scss";

library.add(faChevronUp);

const ScrollToTop = () => {
  useEffect(() => {
    const className = "show";
    const scrollTrigger = 60;

    const onScrollChange = () => {
      if (window.scrollY >= scrollTrigger) {
        document.querySelector(".scroll-to-top").classList.add(className);
      } else {
        document.querySelector(".scroll-to-top").classList.remove(className);
      }
    };

    window.addEventListener("scroll", onScrollChange);

    return () => {
      window.removeEventListener("beforeunload", onScrollChange);
    };
  }, []);

  const onBtnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top" onClick={onBtnClick}>
      <FontAwesomeIcon icon={["fas", "chevron-up"]} />
    </div>
  );
};

export default ScrollToTop;

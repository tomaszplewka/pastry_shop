import React, { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./ScrollToTop.scss";

library.add(faChevronUp);

const ScrollToTop = () => {
  const ref = useRef();

  useEffect(() => {
    const className = "show";
    const scrollTrigger = 60;
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

  const onBtnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={ref} className="scroll-to-top" onClick={onBtnClick}>
      <FontAwesomeIcon icon={["fas", "chevron-up"]} />
    </div>
  );
};

export default ScrollToTop;

import React from "react";

import "./SectionContainer.scss";

const Container = ({ children, customClass }) => {
  return <section className={`container ${customClass}`}>{children}</section>;
};

export default Container;

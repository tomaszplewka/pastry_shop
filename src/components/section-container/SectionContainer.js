import React from "react";

import "./SectionContainer.scss";

const Container = ({ children, customClass }) => (
  <section className={`container ${customClass || ""}`}>{children}</section>
);

export default Container;

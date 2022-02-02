import React from "react";

import "./SectionContainer.scss";

const Container = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default Container;

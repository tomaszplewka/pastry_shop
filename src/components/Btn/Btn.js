import React from "react";

import "./Btn.scss";

const Btn = ({ children, fullwidth, invert, ...otherProps }) => (
  <button
    className={`btn ${invert && "invert"}`}
    {...otherProps}
    style={fullwidth ? { width: "100%" } : { width: "50%" }}
  >
    <span className="btn__overlay">{children}</span>
  </button>
);

export default Btn;

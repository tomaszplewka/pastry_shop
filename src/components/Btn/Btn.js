import React from "react";

import "./Btn.scss";

const Btn = ({ children, fullwidth, ...otherProps }) => {
  return (
    <button
      className="btn"
      {...otherProps}
      style={fullwidth ? { width: "100%" } : { width: "50%" }}
    >
      <span className="btn__overlay">{children}</span>
    </button>
  );
};

export default Btn;

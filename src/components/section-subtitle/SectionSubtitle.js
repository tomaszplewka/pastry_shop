import React from "react";

import "./SectionSubtitle.scss";

const SectionSubtitle = ({ subtitle }) => (
  <p className="py-xxl-5 py-xl-3 py-2 text-center m-1 section__subtitle">
    {subtitle}
  </p>
);

export default SectionSubtitle;

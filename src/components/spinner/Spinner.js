import React from "react";

import "./Spinner.scss";

const Spinner = () => (
  <section className="position-absolute vw-100 vh-100 spinner__section">
    <div className="position-absolute vw-100 vh-100 d-flex justify-content-center align-items-center spinner__wrapper">
      <div>
        <div className="position-relative spinner"></div>
      </div>
    </div>
  </section>
);

export default Spinner;

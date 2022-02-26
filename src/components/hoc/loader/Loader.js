import React from "react";

import "./Loader.scss";

const Loader =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <section className="position-absolute vw-100 vh-100 loader__section">
        <div className="position-absolute w-100 h-100 d-flex justify-conten-center align-items-center loader__wrapper">
          <div>
            <div className="position-relative loader"></div>
          </div>
        </div>
      </section>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default Loader;

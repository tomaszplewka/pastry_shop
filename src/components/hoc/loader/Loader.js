import React from "react";

import Spinner from "../../spinner/Spinner";

const Loader =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default Loader;

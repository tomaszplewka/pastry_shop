import React, { Component } from "react";

import "./ErrorBoundary.scss";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary__wrapper">
          <div></div>
          <h1>A Dog Ate This Page</h1>
          <p>
            Your dog is cute but honestly a menace. Where are my shoes? Where is
            my graduation certificate? Where is the chocolate cake I baked for
            my Aunt’s birthday? And why did you take your dog to the vet on that
            same Thursday?!
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

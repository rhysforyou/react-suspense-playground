import React from "react";
import styles from "./RouterErrorBoundary.css";

export default class RouterErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  handleGoBack = e => {
    e.preventDefault();
    window.history.back();
  };

  handleRefresh = e => {
    e.preventDefault();
    window.location.reload(true);
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.container}>
          <h1>🍐 Something's Gone Pear Shaped</h1>
          <p>
            Something went wrong loading this page, you can{" "}
            <a href="#" onClick={this.handleGoBack}>
              go back
            </a>{" "}
            or try{" "}
            <a href="#" onClick={this.handleRefresh}>
              refreshing the page
            </a>
            .
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

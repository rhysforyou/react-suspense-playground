import React from 'react';
import PropTypes from 'prop-types';
import styles from './RouterErrorBoundary.css';

export default class RouterErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.children
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
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
          <h1>
            <span role="img" aria-label="pear">
              🍐
            </span>{' '}
            Something&apos;s Gone Pear Shaped
          </h1>
          <p>
            Something went wrong loading this page, you can{' '}
            <button onClick={this.handleGoBack}>go back</button> or try{' '}
            <button onClick={this.handleRefresh}>refreshing the page</button>.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

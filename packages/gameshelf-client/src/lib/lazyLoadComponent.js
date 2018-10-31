import React from "react";
import Spinner from "../components/Spinner";

export default function lazyLoadComponent(moduleLoader) {
  return class LazyLoadComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
        component: null
      };
    }

    componentWillMount() {
      moduleLoader().then(component => {
        this.setState({ component, loading: false });
      });
    }

    render() {
      if (this.state.loading) {
        return <Spinner />;
      } else {
        return <this.state.component {...this.props} />;
      }
    }
  };
}

import React from "react";

export default class Img extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const image = new Image();
    image.src = this.props.src;
    image.onload = () => {
      this.setState({ loading: false });
    };
  }

  render() {
    const { fallback, ...props } = this.props;
    if (this.state.loading) {
      return fallback;
    } else {
      return <img {...props} />;
    }
  }
}

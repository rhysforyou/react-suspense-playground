import React from "react";
import Spinner from "./Spinner";
import { fetchComment } from "../lib/api";

import styles from "./Comment.css";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null,
      loading: true
    };
  }

  componentDidMount() {
    fetchComment(this.props.commentId).then(comment => {
      this.setState({
        comment,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className={styles.container}>
        <h3 className={styles.author}>{this.state.comment.author}</h3>
        <p className={styles.text}>{this.state.comment.text}</p>
      </div>
    );
  }
}

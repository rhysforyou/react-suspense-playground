import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { fetchComment } from "../lib/api";

const Container = styled.div`
  padding: 1rem;
  background: #eaf9f9;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
`;

const Author = styled.h3`
  margin: 0;
`;

const Text = styled.p`
  margin-bottom: 0;
`;

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null,
      loading: true
    };
  }

  componentWillMount() {
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
      <Container>
        <Author>{this.state.comment.author}</Author>
        <Text>{this.state.comment.text}</Text>
      </Container>
    );
  }
}

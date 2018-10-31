import React from "react";
import styled from "styled-components";
import Img from "./Img";
import Spinner from "./Spinner";
import Comment from "./Comment";
import { fetchGameDetails } from "../lib/api";

const Container = styled.div`
  max-width: 48rem;
  padding: 3rem 1rem 1rem;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BoxArtWrapper = styled.div`
  flex-shrink: 0;
  width: 12rem;
  margin-right: 2rem;
`;

const BoxArt = styled(Img)`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.25rem;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const BoxArtPlaceholder = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.25rem;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  filter: blur(5px);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  margin: 0;
  padding: 0;
`;

const Developer = styled.span`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Platform = styled.span`
  background: paleturquoise;
  color: #006c6d;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Description = styled.span`
  font-size: 1rem;
  line-height: 1.3rem;
`;

const Comments = styled.div``;

export default class GameDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null,
      loading: true
    };
  }

  componentWillMount() {
    fetchGameDetails(this.props.gameId).then(game => {
      this.setState({
        game,
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
        <Header>
          <BoxArtWrapper>
            <BoxArt
              {...this.state.game.boxArt[0]}
              fallback={<BoxArtPlaceholder {...this.state.game.boxArt[5]} />}
            />
          </BoxArtWrapper>
          <Details>
            <Title>{this.state.game.title}</Title>
            <Developer>{this.state.game.developer}</Developer>
            <Platform>{this.state.game.platform.toUpperCase()}</Platform>
            <Description>{this.state.game.description}</Description>
          </Details>
        </Header>
        <Comments>
          <h2>Comments</h2>
          {this.state.game.comments.map(commentId => (
            <Comment key={commentId} commentId={commentId} />
          ))}
        </Comments>
      </Container>
    );
  }
}

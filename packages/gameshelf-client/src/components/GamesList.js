import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { fetchGames } from "../lib/api";
import Img from "./Img";
import Spinner from "./Spinner";

const Container = styled.div`
  max-width: 48rem;
  padding: 1rem 0;
  box-sizing: border-box;
  margin: auto;
`;

const Row = styled(Link)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.15s ease-out;
  border-radius: 0.25rem;
  box-sizing: border-box;
  border: 0px solid transparent;

  &:hover {
    background: #e8f7f7;
  }

  &:focus {
    outline: none;
    border: 2px solid darkturquoise;
    padding: calc(1rem - 2px);
  }

  &:active {
    background-color: paleturquoise;
    transition: none;
  }
`;

const BoxArtWrapper = styled.div`
  flex-shrink: 0;
  width: 6rem;
  margin-right: 1rem;
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

const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

const Developer = styled.span`
  color: #666;
  margin-bottom: 1rem;
`;

const Platform = styled.span`
  background: paleturquoise;
  color: #006c6d;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export default class GamesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      games: []
    };
  }

  componentWillMount() {
    fetchGames().then(games => {
      this.setState({ games, loading: false });
    });
  }

  render() {
    return (
      <Container>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.games.map(game => (
            <Row to={`/games/${game.id}`} key={game.id}>
              <BoxArtWrapper>
                <BoxArt
                  {...game.boxArt[0]}
                  fallback={<BoxArtPlaceholder {...game.boxArt[5]} />}
                />
              </BoxArtWrapper>
              <Details>
                <Title>{game.title}</Title>
                <Developer>{game.developer}</Developer>
                <Platform>{game.platform.toUpperCase()}</Platform>
              </Details>
            </Row>
          ))
        )}
      </Container>
    );
  }
}

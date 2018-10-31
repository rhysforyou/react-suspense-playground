import React from "react";
import { Link } from "@reach/router";
import { fetchGames } from "../lib/api";
import Img from "./Img";
import Spinner from "./Spinner";

import styles from "./GamesList.css";

export default class GamesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      games: []
    };
  }

  componentDidMount() {
    fetchGames().then(games => {
      this.setState({ games, loading: false });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.games.map(game => (
            <Link className={styles.row} to={`/games/${game.id}`} key={game.id}>
              <div className={styles.boxArtWrapper}>
                <Img
                  {...game.boxArt[0]}
                  className={styles.boxArt}
                  fallback={
                    <img
                      className={styles.boxArtPlaceholder}
                      {...game.boxArt[5]}
                    />
                  }
                />
              </div>
              <div className={styles.details}>
                <h2 className={styles.title}>{game.title}</h2>
                <span className={styles.develpoer}>{game.developer}</span>
                <span className={styles.platform}>
                  {game.platform.toUpperCase()}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    );
  }
}

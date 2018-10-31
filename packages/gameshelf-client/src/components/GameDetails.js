import React from "react";
import Img from "./Img";
import Spinner from "./Spinner";
import Comment from "./Comment";
import { fetchGameDetails } from "../lib/api";

import styles from "./GameDetails.css";

export default class GameDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null,
      loading: true
    };
  }

  componentDidMount() {
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
      <div className={styles.container}>
        <header className={styles.header}>
          <dib className={styles.boxArtWrapper}>
            <Img
              {...this.state.game.boxArt[0]}
              className={styles.boxArt}
              fallback={
                <img
                  className={styles.boxArtPlaceholder}
                  {...this.state.game.boxArt[5]}
                />
              }
            />
          </dib>
          <div className={styles.details}>
            <h2 className={styles.title}>{this.state.game.title}</h2>
            <span className={styles.developer}>
              {this.state.game.developer}
            </span>
            <span className={styles.platform}>
              {this.state.game.platform.toUpperCase()}
            </span>
            <span className={styles.description}>
              {this.state.game.description}
            </span>
          </div>
        </header>
        <div className={styles.comments}>
          <h2>Comments</h2>
          {this.state.game.comments.map(commentId => (
            <Comment key={commentId} commentId={commentId} />
          ))}
        </div>
      </div>
    );
  }
}

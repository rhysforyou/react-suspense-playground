import React from "react";
import { unstable_createResource } from "react-cache";
import Img from "./Img";
import Spinner from "./Spinner";
import Comment from "./Comment";
import { fetchGameDetails } from "../lib/api";

import styles from "./GameDetails.css";

const Games = unstable_createResource(gameId => fetchGameDetails(gameId));

export default function GameDetails({ gameId }) {
  const game = Games.read(gameId);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.boxArtWrapper}>
          <React.Suspense
            fallback={
              <img className={styles.boxArtPlaceholder} {...game.boxArt[5]} />
            }
          >
            <Img {...game.boxArt[0]} className={styles.boxArt} />
          </React.Suspense>
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{game.title}</h2>
          <span className={styles.developer}>{game.developer}</span>
          <span className={styles.platform}>{game.platform.toUpperCase()}</span>
          <span className={styles.description}>{game.description}</span>
        </div>
      </header>
      <div className={styles.comments}>
        <h2>Comments</h2>
        <React.Suspense>
          {game.comments.map(commentId => (
            <Comment key={commentId} commentId={commentId} />
          ))}
        </React.Suspense>
      </div>
    </div>
  );
}

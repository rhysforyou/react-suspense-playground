import React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { Link } from '@reach/router';
import { fetchGames } from '../lib/api';
import Img from './Img';

import styles from './GamesList.css';

const Games = createResource(() => fetchGames());

export default function GamesList() {
  const games = Games.read();
  return (
    <div className={styles.container}>
      <h1>Your Games</h1>
      {games.map(game => (
        <Link className={styles.row} to={`/games/${game.id}`} key={game.id}>
          <div className={styles.boxArtWrapper}>
            <React.Suspense
              fallback={
                <img
                  className={styles.boxArtPlaceholder}
                  {...game.boxArt[5]}
                  alt={game.title}
                />
              }>
              <Img
                {...game.boxArt[0]}
                className={styles.boxArt}
                alt={game.title}
              />
            </React.Suspense>
          </div>
          <div className={styles.details}>
            <h2 className={styles.title}>{game.title}</h2>
            <span className={styles.develpoer}>{game.developer}</span>
            <span className={styles.platform}>
              {game.platform.toUpperCase()}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

import React from "react";
import { Link } from "@reach/router";

import styles from "./Header.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/">
        <h1 className={styles.title}>🎮 Gameshelf</h1>
      </Link>
    </nav>
  );
}

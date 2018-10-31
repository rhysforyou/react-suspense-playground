import React from "react";
import { unstable_createResource } from "react-cache";
import Spinner from "./Spinner";
import { fetchComment } from "../lib/api";

import styles from "./Comment.css";

const Comments = unstable_createResource(commentId => fetchComment(commentId));

export default function Comment({ commentId }) {
  const comment = Comments.read(commentId);
  return (
    <div className={styles.container}>
      <h3 className={styles.author}>{comment.author}</h3>
      <p className={styles.text}>{comment.text}</p>
    </div>
  );
}

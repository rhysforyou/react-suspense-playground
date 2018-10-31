import React from 'react';
import PropTypes from 'prop-types';
import { unstable_createResource as createResource } from 'react-cache';
import { fetchComment } from '../lib/api';

import styles from './Comment.css';

const Comments = createResource(commentId => fetchComment(commentId));

export default function Comment({ commentId }) {
  const comment = Comments.read(commentId);
  return (
    <div className={styles.container}>
      <h3 className={styles.author}>{comment.author}</h3>
      <p className={styles.text}>{comment.text}</p>
    </div>
  );
}

Comment.propTypes = {
  commentId: PropTypes.string.isRequired
};

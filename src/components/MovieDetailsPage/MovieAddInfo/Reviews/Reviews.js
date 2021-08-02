import React from 'react';
import PropTypes from 'prop-types';

import styles from './Reviews.module.scss';

export default function Reviews({ reviews }) {
  return (
    <ul className={styles.Review}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.ReviewItem}>
          <h2 className={styles.Name}>Author: {author}</h2>
          <p className={styles.Content}>{content}</p>
        </li>
      ))}
    </ul>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

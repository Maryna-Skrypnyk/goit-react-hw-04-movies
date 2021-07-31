import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieListItem.module.scss';

export default function MoviesListItem({ title }) {
  // const titleMovie = !{title} ? {original_title} : {title};
  return <li className={styles.MovieListItem}>{title}</li>;
}

// MoviesListItem.defaultProps = {
//   title: "",
//   // original_title: "",
// };

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  // onClickImage: PropTypes.func.isRequired,
};

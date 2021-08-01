import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import styles from './MovieListItem.module.scss';

export default function MoviesListItem({ id, title, original_title }) {
  const { url } = useRouteMatch();
  const titleMovie = title === '' || !title ? original_title : title;

  return (
    <li className={styles.MovieListItem}>
      <Link to={`${url}/${id}`}>{titleMovie}</Link>
    </li>
  );
}

MoviesListItem.defaultProps = {
  title: '',
  original_title: '',
};

MoviesListItem.propTypes = {
  title: PropTypes.string,
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
  // onClickImage: PropTypes.func.isRequired,
};

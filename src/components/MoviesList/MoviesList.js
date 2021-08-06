import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from '../MovieListItem/MovieListItem';
import styles from './MoviesList.module.scss';

export default function MoviesList({ movies }) {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(({ id, original_title, title }) => (
        <MoviesListItem
          key={id}
          id={id}
          title={title}
          original_title={original_title}
        />
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

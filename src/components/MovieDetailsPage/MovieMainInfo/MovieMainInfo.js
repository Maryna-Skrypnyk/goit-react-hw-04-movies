import PropTypes from 'prop-types';

import noImage from '../../../images/noImg.jpg';

import styles from './MovieMainInfo.module.scss';

export default function MovieMainInfo({ movie }) {
  const titleMovie =
    movie.title === '' || !movie.title ? movie.original_title : movie.title;
  return (
    <>
      <div className={styles.MovieMainInfo}>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : noImage
            }
            alt={titleMovie}
            className={styles.ImageURL}
          />
        </div>
        <div className={styles.MovieContent}>
          <h2 className={styles.MovieTitle}>
            {titleMovie}
            {movie.release_date && (
              <span> ({movie.release_date.slice(0, 4)})</span>
            )}
          </h2>
          <p className={styles.MovieScore}>
            User Score: {movie.popularity.toFixed(2)}%
          </p>

          {movie.overview && (
            <>
              <h3 className={styles.MovieTitleName}>Overview</h3>
              <p className={styles.MovieOverview}>{movie.overview}</p>
            </>
          )}

          {movie.genres.length > 0 && (
            <>
              <h3 className={styles.MovieTitleName}>Genres</h3>
              <ul className={styles.MovieGenreList}>
                {movie.genres.map(genre => (
                  <li key={genre.id} className={styles.MovieGenreItem}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <hr className={styles.Line} />
    </>
  );
}

MovieMainInfo.defaultProps = {
  title: '',
  original_title: '',
  poster_path: noImage,
  overview: '',
  genres: [],
  popularity: 0,
  release_date: 'no release date',
};

MovieMainInfo.propTypes = {
  title: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  popularity: PropTypes.number,
};

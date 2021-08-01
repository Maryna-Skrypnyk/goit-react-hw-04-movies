import PropTypes from 'prop-types';

import styles from './MovieMainInfo.module.scss';

export default function MovieMainInfo({
  overview,
  poster_path,
  title,
  original_title,
  release_date,
  genres,
  vote_average,
}) {
  const titleMovie = title === '' || !title ? original_title : title;
  return (
    <div className={styles.MovieMainInfo}>
      <div>
        <img src={poster_path} alt={titleMovie} className={styles.ImageURL} />
      </div>
      <div className={styles.MovieContent}>
        <h2 className={styles.MovieTitle}>
          {titleMovie} ({release_date})
        </h2>
        <p className={styles.MovieScore}>User Score: {vote_average}%</p>
        <h3 className={styles.MovieTitleName}>Overview</h3>
        <p className={styles.MovieOverview}>{overview}</p>
        <h3 className={styles.MovieTitleName}>Genres</h3>
        <ul className={styles.MovieGenreList}>
          {genres.map(genre => (
            <li key={genre.id} className={styles.MovieGenreItem}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieMainInfo.defaultProps = {
  title: '',
  original_title: '',
  poster_path: 'no poster',
  overview: '',
};

MovieMainInfo.propTypes = {
  title: PropTypes.string,
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  vote_average: PropTypes.number.isRequired,
  // onClickImage: PropTypes.func.isRequired,
};

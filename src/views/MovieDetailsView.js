import { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import moviesAPI from '../api/movies-api';

import MovieMainInfo from '../components/MovieDetailsPage/MovieMainInfo';
import MovieAddInfo from '../components/MovieDetailsPage/MovieAddInfo';
import ButtonIcon from '../components/ButtonIcon';
import { HiArrowLeft } from 'react-icons/hi';
import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';

import styles from '../components/MovieDetailsPage/MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();

  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    moviesAPI
      .fetchMovieById(movieId)
      .then(movie => {
        setMovie(movie);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError('Whoops, something went wrong. Enter your request again');
        setLoading(false);
      });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {error && <Error errorContent={error} />}
      {loading && <LoaderSpinner />}
      <ButtonIcon onClick={onGoBack} aria-label="Go back">
        <HiArrowLeft />
        <span className={styles.IconBtn}>Go back</span>
      </ButtonIcon>

      {movie && (
        <>
          <MovieMainInfo movie={movie} />
          <MovieAddInfo />
        </>
      )}
    </>
  );
}

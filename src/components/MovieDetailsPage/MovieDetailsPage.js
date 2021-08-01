import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../api/movies-api';

import PageHeading from '../PageHeading';
import MovieMainInfo from '../MovieMainInfo';
import MovieAddInfo from '../MovieAddInfo';
import ButtonIcon from '../ButtonIcon';
import { HiArrowLeft } from 'react-icons/hi';
import noImage from '../../images/noImg.jpg';
import LoaderSpinner from '../LoaderSpinner';
import Error from '../Error';

import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!movie) {
    //   return;
    // }

    setLoading(true);
    moviesAPI
      .fetchMovieById(movieId)
      .then(
        ({
          overview,
          poster_path,
          title,
          original_title,
          release_date,
          genres,
          vote_average,
        }) => {
          setMovie({
            overview,
            poster_path: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `${noImage}`,
            title,
            original_title,
            release_date,
            genres,
            vote_average,
          });
          setLoading(false);
        },
      )
      .catch(error => {
        console.log(error);
        setError('Whoops, something went wrong. Enter your request again');
        setLoading(false);
      });
  }, [movieId]);

  // useEffect(() => {
  //   moviesAPI.fetchMovieById(movieId).then(setMovie);
  // }, [movieId]);

  const onClickBack = () => {
    console.log('back');
  };

  console.log(movie);

  return (
    <>
      {error && <Error errorContent={error} />}
      {loading && <LoaderSpinner />}
      <ButtonIcon onClick={onClickBack} aria-label="Go back">
        <HiArrowLeft />
        <span className={styles.IconBtn}>Go back</span>
      </ButtonIcon>

      {movie && (
        <MovieMainInfo
          //   id={movieId}
          overview={movie.overview}
          poster_path={movie.poster_path}
          title={movie.title}
          original_title={movie.original_title}
          release_date={movie.release_date.slice(0, 4)}
          genres={movie.genres}
          vote_average={movie.vote_average}
        />
      )}

      {movie && <MovieAddInfo />}
    </>
  );
}

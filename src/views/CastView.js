import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import moviesAPI from '../api/movies-api';

import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';
import CastList from '../components/MovieDetailsPage/MovieAddInfo/Cast/CastList';

export default function CastView() {
  const { movieId } = useParams();

  const [actors, setActors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    moviesAPI
      .fetchCastMovie(movieId)
      .then(cast => {
        if (cast.length === 0) {
          setError('We don`t have any cast for this movie.');
        }
        setActors(cast);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError('Whoops, something went wrong. Enter your request again');
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {error && <Error errorContent={error} />}
      {loading && <LoaderSpinner />}

      {actors && <CastList actors={actors} />}
    </>
  );
}

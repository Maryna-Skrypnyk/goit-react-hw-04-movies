import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import moviesAPI from '../api/movies-api';

import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';
import Reviews from '../components/MovieDetailsPage/MovieAddInfo/Reviews';

export default function ReviewsView() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    moviesAPI
      .fetchReviewMovie(movieId)
      .then(reviews => {
        if (reviews.length === 0) {
          setError('We don`t have any reviews for this movie.');
        }
        setReviews(reviews);
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

      {reviews && <Reviews reviews={reviews} />}
    </>
  );
}

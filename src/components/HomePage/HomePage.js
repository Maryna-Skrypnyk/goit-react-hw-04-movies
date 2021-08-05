import React, { useState, useEffect } from 'react';
import moviesAPI from '../../api/movies-api';
import MoviesList from '../MoviesList';
import Button from '../Button';
import LoaderSpinner from '../LoaderSpinner';
import Error from '../Error';
import { animateScroll as scroll } from 'react-scroll';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [moviesPageList, setMoviesPageList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setLoading(true);
        const moviesPageList = await moviesAPI.fetchTrendingMovies(page);

        setMoviesPageList(moviesPageList);
        setMovies(prevMovies => [...prevMovies, ...moviesPageList]);
        setLoading(false);

        if (moviesPageList.length === 0) {
          setError(`There are no trend movies`);
        }
      } catch (error) {
        setError('Whoops, something went wrong. Enter your request again');
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesList();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    scroll.scrollToBottom();
  };

  return (
    <>
      {error && <Error errorContent={error} />}

      {loading && <LoaderSpinner />}

      {movies.length > 0 && !error && <MoviesList movies={movies} />}

      {moviesPageList.length > 19 && !loading && !error && (
        <Button contentBtn="Load More" onLoadMore={loadMore} />
      )}
      {moviesPageList.length < 20 &&
        moviesPageList.length > 0 &&
        !loading &&
        !error && <Button disabled contentBtn="End" />}
    </>
  );
}

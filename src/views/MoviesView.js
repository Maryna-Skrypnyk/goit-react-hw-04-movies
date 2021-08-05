import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import moviesAPI from '../api/movies-api';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import Button from '../components/Button';
import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';

import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [moviesPageList, setMoviesPageList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const movieQuery = new URLSearchParams(location.search).get('movie');
    setSearchQuery(movieQuery);
  }, [location.search]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchMoviesList = async () => {
      try {
        setLoading(true);
        const moviesPageList = await moviesAPI.fetchSearchMovies(
          searchQuery,
          page,
        );
        setMoviesPageList(moviesPageList);
        setMovies(prevMovies => [...prevMovies, ...moviesPageList]);
        setLoading(false);

        if (moviesPageList.length === 0) {
          setError(`There are no movies on your request "${searchQuery}"`);
        }
      } catch (error) {
        setError('Whoops, something went wrong. Enter your request again');
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesList();
  }, [searchQuery, page]);

  const handleSearchQuerySubmit = searchQuery => {
    setSearchQuery(searchQuery);
    updateStates();

    history.push({ ...location, search: `movie=${searchQuery}` });
  };

  const updateStates = () => {
    setMovies([]);
    setPage(1);
    setError(null);
    setMoviesPageList([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    scroll.scrollToBottom();
  };

  return (
    <>
      <Searchbar handleSubmit={handleSearchQuerySubmit} />

      {error && <Error errorContent={error} />}

      {loading && <LoaderSpinner />}

      {movies.length > 0 && !error && <MoviesList movies={movies} />}

      {moviesPageList.length > 19 && !loading && !error && (
        <Button contentBtn="Load More" onLoadMore={loadMore} />
      )}
      {moviesPageList.length < 19 &&
        moviesPageList.length > 0 &&
        !loading &&
        !error && <Button disabled contentBtn="End" />}

      <ToastContainer autoClose={3000} />
    </>
  );
}

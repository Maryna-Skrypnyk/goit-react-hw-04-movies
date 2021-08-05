import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd0babcf2df0d52b515db9698a0e458bb',
  language: 'en-US',
};

const fetchSearchMovies = async (searchQuery, page) => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: { query: searchQuery, page },
    });
    return data.results;
  } catch (error) {
    return [];
  }
};

const fetchTrendingMovies = async page => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: { page },
    });
    return data.results;
  } catch (error) {
    return [];
  }
};

const fetchMovieById = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    return null;
  }
};

const fetchCastMovie = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);
    return data.cast;
  } catch (error) {
    return null;
  }
};

const fetchReviewMovie = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);
    return data.results;
  } catch (error) {
    return null;
  }
};

const moviesAPI = {
  fetchSearchMovies,
  fetchTrendingMovies,
  fetchMovieById,
  fetchCastMovie,
  fetchReviewMovie,
};

export default moviesAPI;

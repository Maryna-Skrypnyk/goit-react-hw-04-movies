import axios from 'axios';

axios.defaults.baseURL = 'https://developers.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'd0babcf2df0d52b515db9698a0e458bb',
  language: 'en-US',
};

const fetchSearchMovies = async (searchQuery, page) => {
  try {
    const config = {
      url: 'search/movie',
      params: {
        query: searchQuery,
        page,
      },
    };
    const { results } = await axios(config, searchQuery, page);
    console.log(results);
    return results;
  } catch (error) {
    return null;
  }
};

const fetchTrendingMovies = async page => {
  try {
    const config = {
      url: 'trending/movie/day',
      params: {
        page,
      },
    };
    const { results } = await axios(config, page);
    return results;
  } catch (error) {
    return null;
  }
};

const fetchMovieById = async movie_id => {
  try {
    const config = {
      url: `movie/${movie_id}`,
    };
    const { results } = await axios(config, movie_id);
    return results;
  } catch (error) {
    return null;
  }
};

const fetchActorMovie = async movie_id => {
  try {
    const config = {
      url: `movie/${movie_id}/credits`,
    };
    const { results } = await axios(config, movie_id);
    return results.cast;
  } catch (error) {
    return null;
  }
};

const fetchReviewMovie = async movie_id => {
  try {
    const config = {
      url: `movie/${movie_id}/reviews`,
    };
    const { results } = await axios(config, movie_id);
    return results.results;
  } catch (error) {
    return null;
  }
};

const moviesAPI = {
  fetchSearchMovies,
  fetchTrendingMovies,
  fetchMovieById,
  fetchActorMovie,
  fetchReviewMovie,
};

export default moviesAPI;

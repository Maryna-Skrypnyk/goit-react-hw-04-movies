// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = 'd0babcf2df0d52b515db9698a0e458bb';

// const fetchSearchMovies = async (searchQuery, page) => {
//   const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`;

//   try {
//     return await fetch(urlSearchMovies)
//       .then(response => response.json())
//       .then(({ results }) => {
//         // console.log(results);
//         return results;
//       });
//   } catch (error) {
//     return [];
//   }
// };

// const fetchTrendingMovies = async page => {
//   const urlTrendingMovies = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;
//   try {
//     return await fetch(urlTrendingMovies)
//       .then(response => response.json())
//       .then(({ results }) => {
//         // console.log(results);
//         return results;
//       });
//   } catch (error) {
//     return [];
//   }
// };

// const fetchMovieById = async movie_id => {
//   const urlMovieById = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
//   try {
//     return await fetch(urlMovieById)
//       .then(response => response.json())
//       .then(result => {
//         // console.log(result);
//         return result;
//       });
//   } catch (error) {
//     return null;
//   }
// };

// const fetchCastMovie = async movie_id => {
//   const urlCastMovie = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
//   try {
//     return await fetch(urlCastMovie)
//       .then(response => response.json())
//       .then(result => {
//         // console.log(result.cast);
//         return result.cast;
//       });
//   } catch (error) {
//     return null;
//   }
// };

// const fetchReviewMovie = async movie_id => {
//   const urlReviewMovie = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

//   try {
//     return await fetch(urlReviewMovie)
//       .then(response => response.json())
//       .then(result => {
//         // console.log(result.results);
//         return result.results;
//       });
//   } catch (error) {
//     return null;
//   }
// };

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0babcf2df0d52b515db9698a0e458bb';

const fetchSearchMovies = async (searchQuery, page) => {
  const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`;

  try {
    const { data } = await axios.get(urlSearchMovies);
    // console.log(data.results);
    return data.results;
  } catch (error) {
    return [];
  }
};

const fetchTrendingMovies = async page => {
  const urlTrendingMovies = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;

  try {
    const { data } = await axios.get(urlTrendingMovies);
    // console.log(data.results);
    return data.results;
  } catch (error) {
    return [];
  }
};

const fetchMovieById = async movie_id => {
  const urlMovieById = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
  try {
    const { data } = await axios.get(urlMovieById);
    // console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};

const fetchCastMovie = async movie_id => {
  const urlCastMovie = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
  try {
    const { data } = await axios.get(urlCastMovie);
    console.log(data.cast);
    return data.cast;
  } catch (error) {
    return null;
  }
};

const fetchReviewMovie = async movie_id => {
  const urlReviewMovie = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const { data } = await axios.get(urlReviewMovie);
    // console.log(data.results);
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

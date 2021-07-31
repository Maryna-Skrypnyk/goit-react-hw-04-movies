// import axios from 'axios';

// axios.defaults.baseURL = 'https://developers.themoviedb.org/3/';
// axios.defaults.params = {
//   key: 'd0babcf2df0d52b515db9698a0e458bb',
//   language: 'en-US',
//   // image_type: 'photo',
//   // orientation: 'horizontal',
//   // per_page: 12,
// };

// const fetchMovies = async (searchQuery, page) => {
//   try {
//     const { results } = await axios.get(
//       `https://developers.themoviedb.org/3//search/movie?api_key=d0babcf2df0d52b515db9698a0e458bb&language=en-US&page=${page}&query=${searchQuery}`,
//       {
//         params: {
//           query: searchQuery,
//           page,
//           // movie_id: id,
//         },
//       },
//     );
//     console.log(results);
//     return results;
//   } catch (error) {
//     return [];
//   }
// };

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0babcf2df0d52b515db9698a0e458bb';

const fetchSearchMovies = async (searchQuery, page) => {
  const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`;

  try {
    return await fetch(urlSearchMovies)
      .then(response => response.json())
      .then(({ results }) => {
        console.log(results);
        return results;
      });
  } catch (error) {
    return [];
  }
};

const fetchTrendingMovies = async page => {
  const urlTrendingMovies = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;

  try {
    return await fetch(urlTrendingMovies)
      .then(response => response.json())
      .then(({ results }) => {
        console.log(results);
        return results;
      });
  } catch (error) {
    return [];
  }
};

const moviesAPI = {
  fetchSearchMovies,
  fetchTrendingMovies,
};

export default moviesAPI;

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PageHeading from '../components/PageHeading';

// import moviesAPI from '../api/movies-api';

// import MovieMainInfo from '../components/MovieMainInfo';
// import MovieAddInfo from '../components/MovieAddInfo';
// import ButtonIcon from '../components/ButtonIcon';
// import { HiOutlineX } from 'react-icons/hi';
// import LoaderSpinner from '../components/LoaderSpinner';
// import Error from '../components/Error';

// export default function MovieDetailsView() {
//   const { movieId } = useParams();

//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     moviesAPI
//       .fetchMovieById(movieId)
//       .then(
//         ({
//           overview,
//           poster_path,
//           title,
//           original_title,
//           release_date,
//           genres,
//           vote_average,
//         }) => {
//           setMovie({
//             overview,
//             src: poster_path
//               ? `https://image.tmdb.org/t/p/w500/${poster_path}`
//               : 'no image',
//             title,
//             original_title,
//             release_date,
//             genres,
//             vote_average,
//           });
//           setLoading(false);
//         },
//       )
//       .catch(error => {
//         console.log(error);
//         setError('Whoops, something went wrong. Enter your request again');
//         setLoading(false);
//       });
//   }, [movieId]);

//   // useEffect(() => {
//   //   moviesAPI.fetchMovieById(movieId).then(setMovie);
//   // }, [movieId]);

//   const onClickBack = () => {
//     console.log('back');
//   };

//   console.log(movie);

//   return (
//     <>
//       <PageHeading text={`Movie ${movieId}`} />
//       {error && <Error errorContent={error} />}
//       {loading && <LoaderSpinner />}
//       <ButtonIcon onClick={onClickBack} aria-label="Go back">
//         <HiOutlineX />
//         Go back
//       </ButtonIcon>

//       {/* <div>
//         <img src={movie.poster_path} alt={movie.title} />
//         <h2>
//           {movie.title} ({movie.release_date})
//         </h2>
//         <p>User Score: {movie.vote_average}%</p>
//         <h3>Overview</h3>
//         <p>{movie.overview}</p>
//         <h3>Genres</h3>
//         <ul>
//           {movie.genres.map(genre => (
//             <li key={genre.id}>{genre.name}</li>
//           ))}
//         </ul>
//       </div> */}

//       {!error && (
//         <MovieMainInfo
//           //   id={movieId}
//           overview={movie.overview}
//           poster_path={movie.poster_path}
//           title={movie.title}
//           original_title={movie.original_title}
//           release_date={movie.release_date.slice(0, 4)}
//           genres={movie.genres}
//           vote_average={movie.vote_average}
//         />
//       )}
//       {!error && <MovieAddInfo />}
//     </>
//   );
// }

import MovieDetailsPage from '../components/MovieDetailsPage';

export default function MovieDetailsView() {
  return (
    <>
      <MovieDetailsPage />
    </>
  );
}

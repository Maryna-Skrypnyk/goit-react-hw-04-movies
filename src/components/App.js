import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import AppBar from './AppBar';
import LoaderSpinner from './LoaderSpinner';
import BackTopScroll from './BackTopScroll';

const HomeView = lazy(() =>
  import('../views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('../views/MoviesView.js' /* webpackChunkName: "movies-view" */),
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);
const MovieDetailsView = lazy(() =>
  import(
    '../views/MovieDetailsView.js' /* webpackChunkName: "movie-details-view" */
  ),
);

export default function App() {
  return (
    <>
      <AppBar />
      <Layout>
        <BackTopScroll />
        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsView />
            </Route>

            <Route path="/movies">
              <MoviesView />
            </Route>

            <Route>
              <NotFoundView />
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

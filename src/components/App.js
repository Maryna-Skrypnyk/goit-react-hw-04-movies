import { useEffect } from 'react';
// import imagesAPI from '../api/images-api';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Layout from './Layout';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import NotFoundView from '../views/NotFoundView';
import MovieDetailsView from '../views/MovieDetailsView';

export default function App() {
  // let history = useHistory();

  // useEffect(() => {
  //   history.push('/');
  // }, [history]);

  return (
    <>
      <AppBar />
      <Layout>
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

          {/* <Route>
          <HomeView />
        </Route> */}

          <Route>
            <NotFoundView />
            {/* <Redirect to="/" /> */}
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

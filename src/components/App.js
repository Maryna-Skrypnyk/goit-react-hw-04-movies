// import React, { useState, useEffect } from 'react';
// import imagesAPI from '../api/images-api';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import NotFoundView from '../views/NotFoundView';
import MovieDetailsView from '../views/MovieDetailsView';

export default function App() {
  return (
    <>
      <AppBar />
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          {/* <Route>
          <HomeView />
        </Route> */}

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

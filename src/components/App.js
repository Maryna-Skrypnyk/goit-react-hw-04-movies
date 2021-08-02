// import React, { useState, useEffect } from 'react';
// import imagesAPI from '../api/images-api';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import NotFoundView from '../views/NotFoundView';
import MovieDetailsView from '../views/MovieDetailsView';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Layout>
      <AppBar />
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

      {/* <ToastContainer autoClose={3000} /> */}
    </Layout>
  );
}

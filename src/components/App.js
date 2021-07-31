// import React, { useState, useEffect } from 'react';
// import imagesAPI from '../api/images-api';
import { SwitchCase, Route } from 'react-router-dom';
import Layout from './Layout';
import AppBar from './AppBar';
import HomeView from '../views/HomeViews';
import MoviesView from '../views/MoviesViews';

// import { animateScroll as scroll } from 'react-scroll';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import styles from './App.module.scss';

export default function App() {
  return (
    <Layout>
      <AppBar />
      <Route path="/" exact>
        <HomeView />
      </Route>

      <Route path="/movies" exact>
        <MoviesView />
      </Route>

      {/* <ToastContainer autoClose={3000} /> */}
    </Layout>
  );
}

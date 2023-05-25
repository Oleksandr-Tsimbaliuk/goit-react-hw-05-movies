import HomePage from 'pages/HomePage';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="details" element={<MovieDetails />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

export default App;

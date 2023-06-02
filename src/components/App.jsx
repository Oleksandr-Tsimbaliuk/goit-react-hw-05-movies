// import HomePage from 'pages/HomePage';
// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;

// {
/* <Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="details" element={<MovieDetails />} />
  <Route path="movies" element={<Movies />} />
</Route> */
// }

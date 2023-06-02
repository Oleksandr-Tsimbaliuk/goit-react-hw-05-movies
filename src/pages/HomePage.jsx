import React, { useEffect, useState } from 'react';
import { getDataMovies } from '../services/api';
import MovieGallery from 'components/MovieGallery/MovieGallery';

function HomePage() {
  const [tradingMovies, setTradingMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getDataMovies('trending/movie/day');
        console.log(results);
        setTradingMovies([...results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <MovieGallery
        movies={tradingMovies}
        title="Trending movies"
      ></MovieGallery>
    </>
  );
}

export default HomePage;

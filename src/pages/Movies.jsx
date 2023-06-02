import Searchbar from 'components/Seacrhbar/Searchbar';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovieBySearch } from 'services/api';

function Movies() {
  const [moviesData, setMoviesData] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [Movies, setMovies] = useState([]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    // setCurrentPage(1);
    // setMovies([]);
  };

  useEffect(() => {
    const fetchMovieBySearch = async searchQuery => {
      try {
        const data = await getMovieBySearch(searchQuery);
        setMoviesData(data);
        console.log(data);
      } catch (error) {}
    };
    fetchMovieBySearch(searchQuery);
  }, [searchQuery]);
  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>

      {moviesData && (
        <ul>
          {moviesData.results.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;

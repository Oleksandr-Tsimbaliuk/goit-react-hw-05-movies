import Searchbar from 'components/Seacrhbar/Searchbar';
import React, { useState, useEffect } from 'react';

function Movies() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [Movies, setMovies] = useState([]);

  const handleFormSubmit = query => {
    setQuery(query);
    setCurrentPage(1);
    setMovies([]);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
    </>
  );
}

export default Movies;

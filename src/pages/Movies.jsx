import MovieGallery from 'components/MovieGallery/MovieGallery';
import Searchbar from 'components/Seacrhbar/Searchbar';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'services/api';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesData, setMoviesData] = useState('');
  const [query, setQuery] = useState('');
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      setSearchParams({});
      alert('Please, enter search value');
      return;
    }
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchMovieBySearch = async () => {
      try {
        const data = await getMovieBySearch(searchQuery);
        setMoviesData(data);
      } catch (error) {}
    };
    fetchMovieBySearch();
  }, [searchQuery]);

  return (
    <div>
      <Searchbar
        updateQueryString={updateQueryString}
        onSubmit={handleSubmit}
        searchQuery={query}
      ></Searchbar>

      {moviesData && (
        // <ul>
        //   {moviesData.results.map(({ id, title }) => (
        //     <li key={id}>
        //       <Link to={`${id}`} state={{ from: location }}>
        //         {title}
        //       </Link>
        //     </li>
        //   ))}
        // </ul>   ЯКИЙ СПОСІБ КРАЩЕ?
        <MovieGallery movies={moviesData.results} />
      )}
    </div>
  );
}

export default Movies;

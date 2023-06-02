import React, { useState } from 'react';
import { ReactComponent as IconSeacrh } from '../../icons/seach-icon.svg';
import { StyledSearhbar } from './Styled';
import { useSearchParams } from 'react-router-dom';

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  // const [query, setQuery] = useState('');

  // const handleQueryChange = event => {
  // setQuery(event.currentTarget.value.toLowerCase());
  // };

  const updateQueryString = event => {
    if (event.target.value.toLowerCase() === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // if (query.trim() === '') {
    if (searchQuery === '') {
      alert('Please, enter search value');
      return;
    }
    console.log(searchQuery);
    onSubmit(searchQuery);
    // onSubmit(query);
    // setQuery('');
  };

  return (
    <StyledSearhbar>
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <IconSeacrh className="SearchForm-button-label"></IconSeacrh>
        </button>

        <input
          // onChange={handleQueryChange}
          // value={query}
          onChange={updateQueryString}
          value={searchQuery}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledSearhbar>
  );
};

export default Searchbar;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

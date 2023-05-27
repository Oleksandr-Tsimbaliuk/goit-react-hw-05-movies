import React, { useState } from 'react';
import { ReactComponent as IconSeacrh } from '../../icons/seach-icon.svg';
import { StyledSearhbar } from './Styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    if (query.trim() === '') {
      alert('Please, enter search value');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledSearhbar>
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <IconSeacrh className="SearchForm-button-label"></IconSeacrh>
        </button>

        <input
          onChange={handleQueryChange}
          value={query}
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

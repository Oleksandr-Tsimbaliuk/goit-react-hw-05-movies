import React from 'react';
import { ReactComponent as IconSeacrh } from '../../icons/seach-icon.svg';
import { SearchForm } from './Styled';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit, updateQueryString, searchQuery }) => {
  return (
    <SearchForm onSubmit={onSubmit} className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <IconSeacrh className="SearchForm-button-label"></IconSeacrh>
      </button>

      <input
        onChange={updateQueryString}
        value={searchQuery}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  updateQueryString: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

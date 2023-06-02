import React from 'react';
import { ReactComponent as IconSeacrh } from '../../icons/seach-icon.svg';
import { StyledSearhbar } from './Styled';
// import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit, updateQueryString, searchQuery }) => {
  return (
    <StyledSearhbar>
      <form onSubmit={onSubmit} className="SearchForm">
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
      </form>
    </StyledSearhbar>
  );
};

export default Searchbar;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   updateQueryString: PropTypes.func.isRequired,
//   searchQuery: PropTypes.func.isRequired,
// };

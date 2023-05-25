import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Header;

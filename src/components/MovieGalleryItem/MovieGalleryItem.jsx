import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieGalleryItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}{' '}
      </Link>
    </li>
  );
};

export default MovieGalleryItem;

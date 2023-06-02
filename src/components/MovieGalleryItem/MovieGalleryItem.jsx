import React from 'react';
import { Link } from 'react-router-dom';

const MovieGalleryItem = ({ movie }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
};

export default MovieGalleryItem;

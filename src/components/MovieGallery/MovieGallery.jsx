import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import React from 'react';

const MovieGallery = ({ movies, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {movies.map(movie => (
          // console.log(movie)
          <MovieGalleryItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
};

export default MovieGallery;

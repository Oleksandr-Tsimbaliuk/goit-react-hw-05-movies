// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieData = async movieId => {
      try {
        setisLoading(true);
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchMovieData(movieId);
  }, [movieId]);
  return (
    <div>
      {error.length > 0 && <div>{error}</div>}

      {isLoading && <div>Loading...</div>}
      {movieDetails !== null && (
        <div>
          <h1>{movieDetails.original_title}</h1>
          <p>{movieDetails.overview}</p>
        </div>
      )}
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default MovieDetails;

import Loader from 'components/Loader/Loader';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieData = async movieId => {
      try {
        setisLoading(true);
        const data = await getMovieDetails(movieId);
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

      {isLoading && <Loader />}

      {movieDetails !== null && (
        <div>
          <Link
            to={backLink.current}
            style={{ display: 'block', marginBottom: '20px' }}
          >
            Go back
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
            width={200}
          />
          <h1>{movieDetails.original_title}</h1>
          <h2>Vote Average:</h2>
          <p> {movieDetails.vote_average}</p>
          <h2>Genres:</h2>
          {movieDetails.genres.length > 0 ? (
            <ul>
              {movieDetails.genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          ) : (
            'There no genres'
          )}
          <h2>Overview:</h2>
          <p>{movieDetails.overview}`</p>
        </div>
      )}
      <div>
        <p>Additional information:</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
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

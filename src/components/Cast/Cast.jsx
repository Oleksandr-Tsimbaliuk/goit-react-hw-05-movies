import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

function Cast() {
  const [castData, setCastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCastData = async movieId => {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        console.log(data);
        setCastData(data);
        console.log(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCastData(movieId);
  }, [movieId]);

  return (
    <div>
      {error.length > 0 && <div>{error}</div>}
      {isLoading && <Loader />}

      {castData !== null && (
        <ul>
          {castData.cast.map(
            ({ id, name, profile_path, original_name, character }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                  width={150}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default Cast;

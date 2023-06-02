import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

function Reviews() {
  const [reviewsData, setReviewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviewsData = async movieId => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviewsData(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviewsData(movieId);
  }, [movieId]);

  return (
    <div>
      {error.length > 0 && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}

      {reviewsData !== null && (
        <ul>
          {reviewsData.results.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Character: {review.content}</p>
            </li>
          ))}
          {!reviewsData.length && <div>There are no reviews yet!</div>}
        </ul>
      )}
    </div>
  );
}

export default Reviews;

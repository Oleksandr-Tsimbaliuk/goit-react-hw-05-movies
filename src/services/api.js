const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '65175319ff5fdf769ef44bf4c6a21d27';

export const getDataMovies = async (query = '', page = 1) => {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const data = await response.json();

  return data;
};

export const getMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Some api error occured');
  }
  const data = await response.json();
  return data;
};

export const getMovieCast = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Some api error occured');
  }
  const data = await response.json();
  return data;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Some api error occured');
  }
  const data = await response.json();
  return data;
};

export const getMovieBySearch = async query => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  if (!response.ok) {
    throw new Error('Some api error occured');
  }
  const data = await response.json();
  return data;
};

//  const { data } = await axios.get(
//    `${BASE_URL}/${pathname}?api_key=${API_KEY}&query=${query}&page=${page}`
//  );

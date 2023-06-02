// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '33457552-f72b8f2d874a669f815eb264f';

// const options = {
//   per_page: 12,
// };

// export const fetchImages = async (query, currentPage) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${options.per_page}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getPerPageQuantity = () => {
//   return options.per_page;
// };

//  const { data } = await axios.get(
//    `${BASE_URL}/${pathname}?api_key=${API_KEY}&query=${query}&page=${page}`
//  );

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '65175319ff5fdf769ef44bf4c6a21d27';

export const getDataMovies = async (path, query = '', page = 1) => {
  const response = await fetch(
    `${BASE_URL}${path}?api_key=${API_KEY}&query=${query}&page=${page}`
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

const API_KEY = 'f5a986c811b44a777cce3b1216d48d23'; // This is a public API key for demo purposes
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  return response.json();
};

export const fetchTrendingTv = async () => {
  const response = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending TV shows');
  }
  return response.json();
};

export const fetchTopRatedMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch top rated movies');
  }
  return response.json();
};

export const fetchUpcomingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch upcoming movies');
  }
  return response.json();
};

export const fetchMovieDetails = async (id: number) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};
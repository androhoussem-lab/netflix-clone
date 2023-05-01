export const API_URL: string = "https://api.themoviedb.org/3/movie/";
export const POPULAR: string = `${API_URL}popular?api_key=${process.env.API_KEY}&language=en-US&page=`;
export const TOP_RATED: string = `${API_URL}top_rated?api_key=${process.env.API_KEY}&language=en-US&page=`;
export const UPCOMING: string = `${API_URL}upcoming?api_key=${process.env.API_KEY}&language=en-US&page=`;
export const IMAGE_URL: string = "https://image.tmdb.org/t/p/w500/";

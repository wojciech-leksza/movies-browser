import myApiKey from "./api_key";
import { apiURL, apiPosterUrl } from "./api_url";

export const api_key = myApiKey; // yours api_key here
export const language = "en-US";

export const urls = {
  popularMovies: `${apiURL}movie/popular`,
  searchMovies: `${apiURL}search/movie`,
  popularPeople: `${apiURL}person/popular`,
  searchPeople: `${apiURL}search/person`,
  personDetails: `${apiURL}person`,
  movieDetails: `${apiURL}movie`,
  genres: `${apiURL}genre/movie/list`,
};

export const imageURL = {
  backdrop: `${apiPosterUrl}original`,
  poster: `${apiPosterUrl}w400`,
};
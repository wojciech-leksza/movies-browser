import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        status: "loading",
        movies: null,
        movie: null,
        query: null,
        page: 1,
        genres: null,
    },
    reducers: {
        init: () => {},
        setLoading: (state) => {
            state.status = "loading";
        },
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
        },
        fetchMovieDetails: (state, { payload: id }) => {
            state.movie = id;
            state.status = "loading";
        },
        fetchMovieDetailsSuccess: (state, { payload: movie }) => {
            state.movie = movie;
            state.status = "success";
        },
        fetchMovieDetailsError: (state) => {
            state.movie = null;
            state.status = "error";
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        fetchMovies: (state) => {
            state.movies = null;
            state.status = "loading";
        },
        fetchMoviesSuccess: (state, { payload: movies }) => {
            state.movies = movies;
            state.status = "success";
        },
        fetchMoviesError: (state) => {
            state.movies = null;
            state.status = "error";
        },
    },
});

export const {
    init,
    setLoading,
    setQuery,
    setPage,
    setGenres,
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError,
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectMovie = state => selectMoviesState(state).movie;
export const selectStatus = state => selectMoviesState(state).status;
export const selectQuery = state => selectMoviesState(state).query;
export const selectPage = state => selectMoviesState(state).page;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectTotalPages = state => selectMoviesState(state).movies.total_pages;

export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        status: "loading",
        movies: null,
        query: null,
        page: 1,
        genres: null,
    },
    reducers: {
        init: () => {},
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
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
    setQuery,
    setPage,
    setGenres,
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectStatus = state => selectMoviesState(state).status;
export const selectQuery = state => selectMoviesState(state).query;
export const selectPage = state => selectMoviesState(state).page;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectTotalPages = state => selectMoviesState(state).movies.total_pages;

export default moviesSlice.reducer;
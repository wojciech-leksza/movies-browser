import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        status: "loading",
        movies: null,
        query: null,
        page: 1,
    },
    reducers: {
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
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
    setQuery,
    setPage,
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectStatus = state => selectMoviesState(state).status;
export const selectQuery = state => selectMoviesState(state).query;
export const selectPage = state => selectMoviesState(state).page;

export default moviesSlice.reducer;
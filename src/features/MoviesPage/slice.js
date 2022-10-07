import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: null,
        status: "loading",
    },
    reducers: {
        fetchMovies: () => ({
            movies: null,
            status: "loading",
        }),
        fetchMoviesSuccess: (_, { payload: movies }) => ({
            movies,
            status: "success",
        }),
        fetchMoviesError: () => ({
            movies: null,
            status: "error",
        }),
    },
});

export const {
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectStatus = state => selectMoviesState(state).status;

export default moviesSlice.reducer;
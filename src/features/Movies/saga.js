import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getCredits, getGenres, getMovieDetails, getMovies } from "./moviesAPI";
import {
    init,
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
    selectPage,
    selectQuery,
    setQuery,
    setGenres,
    setPage,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError,
    fetchMovieDetails,
    selectMovie,
    setLoading,
} from "./slice";

function* initHandler() {
    try {
        const response = yield call(getGenres);
        yield put(setGenres(response.genres));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

function* fetchMoviesHandler() {
    const query = yield select(selectQuery);
    const page = yield select(selectPage);

    yield delay(500); //just for DEMO

    try {
        const movies = yield call(getMovies, page, query);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError());
    };
};

function* fetchMovieDetailsHandler() {
    const id = yield select(selectMovie);

    try {
        const movieDetails = yield call(getMovieDetails, id);
        const credits = yield call(getCredits, id);

        yield put(fetchMovieDetailsSuccess({movieDetails, credits}));
    } catch (error) {
        yield put(fetchMovieDetailsError());
    };
};

function* setPageHandler() {
    yield put(fetchMovies());
};

function* setQueryHandler() {
    yield put(setLoading());
    yield delay(500);
    yield put(fetchMovies());
};

export function* moviesSaga() {
    yield takeLatest(init.type, initHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
    yield takeLatest(setQuery.type, setQueryHandler);
    yield takeLatest(setPage.type, setPageHandler);
};
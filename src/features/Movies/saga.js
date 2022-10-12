import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getGenres, getMovies } from "./moviesAPI";
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

function* setQueryOrPageHandler() {
    yield put(fetchMovies());
};

export function* moviesSaga() {
    yield takeLatest(init.type, initHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(setQuery.type, setQueryOrPageHandler);
    yield takeLatest(setPage.type, setQueryOrPageHandler);
};
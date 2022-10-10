import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getGenres, getMovies } from "../../core/moviesAPI";
import {
    init,
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
    selectPage,
    selectQuery,
    setQuery,
    setGenres,
} from "./slice";

function* initHandler() {
    try {
        const genres = yield call(getGenres);
        yield put(setGenres(genres));
        yield put(fetchMovies());
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

function* fetchMoviesHandler() {
    const query = yield select(selectQuery);
    const page = yield select(selectPage);

    yield delay(2000); //just for DEMO

    try {
        const movies = yield call(getMovies, page, query);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError());
    };
};

function* setQueryHandler() {
    yield put(fetchMovies());
};

export function* moviesSaga() {
    yield takeLatest(init.type, initHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(setQuery.type, setQueryHandler);
};
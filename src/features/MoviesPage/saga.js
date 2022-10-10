import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import getMovies from "../../core/moviesAPI";
import {
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
    selectPage,
    selectQuery,
    setQuery
} from "./slice";

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
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(setQuery.type, setQueryHandler);
};
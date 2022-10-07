import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./slice";
import getMovies from "../../core/moviesAPI";

function* fetchMoviesHandler() {
    try {
        yield delay(2000); //just for DEMO
        const movies = yield call(getMovies);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError());
    };
};

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
};
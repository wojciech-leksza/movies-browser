import { takeLatest, call, put } from 'redux-saga/effects'
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from './slice'
//import getMovies function 

function* fetchMoviesHandler() {
    try {
        yield put(fetchMovies());
        const movies = yield call(getMovies);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError());
    };
};

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
};
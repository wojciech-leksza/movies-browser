import { all } from 'redux-saga/effects';
import { moviesSaga } from '../features/MoviesPage/saga';

export default function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
};
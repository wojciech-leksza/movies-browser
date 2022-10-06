import { all } from 'redux-saga/effects';
import { moviesPageSaga } from '../features/MoviesPage/saga';

export default function* rootSaga() {
    yield all([
        moviesPageSaga(),
    ]);
};
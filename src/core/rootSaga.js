import { all } from 'redux-saga/effects';
import { moviesSaga } from '../features/Movies/saga';
import { peopleSaga } from '../features/People/saga';

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
    ]);
};
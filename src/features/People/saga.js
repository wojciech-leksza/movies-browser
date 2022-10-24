import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getMovieCredits, getPeople, getPersonDetails } from "./peopleAPI";
import {
    fetchPeople,
    fetchPeopleError,
    fetchPeopleSuccess,
    fetchPersonDetailsSuccess,
    fetchPersonDetailsError,
    fetchPersonDetails,
    selectPage,
    selectQuery,
    setQuery,
    setPage,
    selectPerson,
    setLoading,
} from "./slice";

function* fetchPeopleHandler() {
    const query = yield select(selectQuery);
    const page = yield select(selectPage);

    yield delay(500); //just for DEMO

    try {
        const people = yield call(getPeople, page, query);
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        yield put(fetchPeopleError());
    };
};

function* fetchPersonDetailsHandler() {
    const id = yield select(selectPerson);

    try {
        const personDetails = yield call(getPersonDetails, id);
        const movieCredits = yield call(getMovieCredits, id);

        yield put(fetchPersonDetailsSuccess({personDetails, movieCredits}));
    } catch (error) {
        yield put(fetchPersonDetailsError());
    };
};

function* setPageHandler() {
    yield put(fetchPeople());
};

function* setQueryHandler() {
    yield put(setLoading());
    yield delay(500);
    yield put(fetchPeople());
};

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
    yield takeLatest(setQuery.type, setQueryHandler);
    yield takeLatest(setPage.type, setPageHandler);
};
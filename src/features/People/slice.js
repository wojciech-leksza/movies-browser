import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        status: "loading",
        people: null,
        person: null,
        query: null,
        page: 1,
    },
    reducers: {
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
        },
        fetchPersonDetails: (state, { payload: id }) => {
            state.person = id;
            state.status = "loading";
        },
        fetchPersonDetailsSuccess: (state, { payload: person }) => {
            state.person = person;
            state.status = "success";
        },
        fetchPersonDetailsError: (state) => {
            state.person = null;
            state.status = "error";
        },
        fetchPeople: (state) => {
            state.people = null;
            state.status = "loading";
        },
        fetchPeopleSuccess: (state, { payload: people }) => {
            state.people = people;
            state.status = "success";
        },
        fetchPeopleError: (state) => {
            state.people = null;
            state.status = "error";
        },
    },
});

export const {
    init,
    setQuery,
    setPage,
    fetchPersonDetails,
    fetchPersonDetailsSuccess,
    fetchPersonDetailsError,
    fetchPeople,
    fetchPeopleError,
    fetchPeopleSuccess,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPeople = state => selectPeopleState(state).people;
export const selectPerson = state => selectPeopleState(state).person;
export const selectStatus = state => selectPeopleState(state).status;
export const selectQuery = state => selectPeopleState(state).query;
export const selectPage = state => selectPeopleState(state).page;
export const selectTotalPages = state => selectPeopleState(state).people.total_pages;

export default peopleSlice.reducer;
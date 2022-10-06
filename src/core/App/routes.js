import { createHashRouter, createRoutesFromElements, Navigate, Route, } from "react-router-dom";
import MoviesPage from "../../features/MoviesPage";
import PersonsPage from "../../features/PersonsPage";

export const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="people" element={<PersonsPage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="/" element={<Navigate replace to="/movies" />} errorElement={<Navigate replace to="/movies" />} />
        </>
    )
);

export const movies = "/movies";
export const people = "/people";

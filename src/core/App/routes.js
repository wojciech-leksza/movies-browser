import { createHashRouter, createRoutesFromElements, Navigate, Route, } from "react-router-dom";
import ErrorPage from "../../common/ErrorPage";
import MoviesPage from "../../features/MoviesPage";
import PeoplePage from "../../features/PeoplePage";

export const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="error" element={<ErrorPage />} />
            <Route path="people" element={<PeoplePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="/" element={<Navigate replace to="/movies" />} errorElement={<Navigate replace to="/movies" />} />
        </>
    )
);

export const moviesPath = "/movies";
export const peoplePath = "/people";

import { createHashRouter, createRoutesFromElements, Navigate, Route, } from "react-router-dom";
import MoviesPage from "../../features/Movies/MoviesPage";
import PeoplePage from "../../features/People/PeoplePage";
import PersonDetailsPage from "../../features/People/PersonDetailsPage";

export const moviesPath = "/movies";
export const peoplePath = "/people";
export const personDetailsPath = "/people/:id";

export const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path={peoplePath} element={<PeoplePage />} />
            <Route path={personDetailsPath} element={<PersonDetailsPage />} />
            <Route path={moviesPath} element={<MoviesPage />} />
            <Route path="/" element={<Navigate replace to="/movies" />} errorElement={<Navigate replace to="/movies" />} />
        </>
    )
);


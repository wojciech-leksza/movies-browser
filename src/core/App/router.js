import { createHashRouter, createRoutesFromElements, Navigate, Route, } from "react-router-dom";
import MoviesPage from "../../features/Movies/MoviesPage";
import MovieDetailsPage from "../../features/Movies/MovieDetailsPage";
import PeoplePage from "../../features/People/PeoplePage";
import PersonDetailsPage from "../../features/People/PersonDetailsPage";

export const moviesPath = "/movies";
export const movieDetailsPath = "/movies/:id";
export const peoplePath = "/people";
export const personDetailsPath = "/people/:id";

export const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path={peoplePath} element={<PeoplePage />} />
            <Route path={personDetailsPath} element={<PersonDetailsPage />} />
            <Route path={moviesPath} element={<MoviesPage />} />
            <Route path={movieDetailsPath} element={<MovieDetailsPage />} />
            <Route path="/" element={<Navigate replace to="/movies" />} errorElement={<Navigate replace to="/movies" />} />
        </>
    )
);


import MovieCard from "./MovieCard";
import Container from "../../common/Container";
import Pagination from "../../common/Pagination";
import Navigation from "../../common/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectStatus } from "./slice";
import { useEffect } from "react";
import { MovieList } from "./styled";
import getMovies from "../../core/moviesAPI";
import LoadingPage from "../../common/LoadingPage";
import ErrorPage from "../../common/ErrorPage";

const MoviesPage = () => {
  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  switch (status) {
    case "loading":
      return (
        <>
          <Navigation />
          <LoadingPage />
        </>
      );

    case "error":
      return (
        <>
          <Navigation />
          <ErrorPage />
        </>
      );

    case "success":
      return (
        <>
          <Navigation />
          <Container title="Popular Movies">
            <MovieList>
              {movies.results.map((movie) => (
                < MovieCard
                  movie={movie}
                />
              ))}
            </MovieList>
            <Pagination />
          </Container>
        </>
      );
  }
};

export default MoviesPage;
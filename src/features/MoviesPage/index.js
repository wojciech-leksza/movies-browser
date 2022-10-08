import MovieCard from "./MovieCard";
import Container from "../../common/Container";
import Pagination from "../../common/Pagination";
import Navigation from "../../common/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectStatus } from "./slice";
import { useEffect } from "react";
import getMovies from "../../core/moviesAPI";

const MoviesPage = () => {
  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(getMovies));
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Container title="Popular Movies">
          <MovieCard
            movies={movies}
          />
        <Pagination />
      </Container>
    </>
  );
};

export default MoviesPage;
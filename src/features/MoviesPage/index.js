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

  return (
    <>
      <Navigation />
      <Container
        title={status === "success" ? "Popular Movies" : ""}
      >
        {status === "loading"
          ? (
            <LoadingPage />
          )
          : (
            status === "error" ? (
              <ErrorPage />
            ) : (
              <>
                <MovieList>
                  {movies.results.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  ))}
                </MovieList>
                <Pagination />
              </>
            )
          )
        }
      </Container>
    </>
  )
};

export default MoviesPage;
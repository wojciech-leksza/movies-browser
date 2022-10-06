import { Wrapper } from "./styled";
import MovieCard from "./MovieCard";
import Container from "../../common/Container";
import Pagination from "../../common/Pagination";
import Navigation from "../../common/Navigation";

const MoviesPage = () => {
  return (
    <>
    <Navigation/>
      <Container title="Popular Movies">
        <Wrapper>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Wrapper>
        <Pagination />
      </Container>
    </>
  );
};

export default MoviesPage;
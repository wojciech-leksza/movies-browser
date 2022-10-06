import { Wrapper } from "./styled";
import MovieCard from "./MovieCard";
import Container from "../../common/Container";

const MoviesPage = () => {
  return (
    <Container title="Popular Movies">
      <Wrapper>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Wrapper>
    </Container>
  );
};

export default MoviesPage;
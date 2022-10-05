import { Wrapper } from "./styled";
import MovieCard from "./MovieCard";
import Container from "../../common/Container";

const MoviesPage = () => {
  return (
    <Container title="Popular Movies">
      <Wrapper>
        <MovieCard />
      </Wrapper>
    </Container>
  );
};

export default MoviesPage;
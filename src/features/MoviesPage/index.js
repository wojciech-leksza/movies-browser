import { Title } from "../../common/styled";
import { Wrapper } from "./styled";
import MovieCard from "./MovieCard";

const MoviesPage = () => {
  return (
    <>
      <Title>Popular Movies</Title>
      <Wrapper>
        <MovieCard />
      </Wrapper>
    </>
  );
};

export default MoviesPage;
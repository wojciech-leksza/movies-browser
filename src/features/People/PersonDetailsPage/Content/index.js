import Container from "../../../../common/Container";
import ErrorPage from "../../../../common/ErrorPage";
import LoadingPage from "../../../../common/LoadingPage";
import NoResultPage from "../../../../common/NoResultPage";
import filterDuplicatedIds from "../../../../common/filterDuplicatedIds"
import MovieCard from "../../../../common/MovieCard";
import HeaderCard from "../../../../common/HeaderCard";
import { MovieList } from "../../../../common/styled";

const Content = ({ person, status }) => {
  switch (status) {
    case "loading":
      return (
        <Container title="Loading...">
          <LoadingPage />
        </Container>
      );
    case "error":
      return (
        <Container>
          <ErrorPage />
        </Container>
      );
    case "success":
      if (!person) {
        return (
          <Container title={`Sorry, we couldn't find this person`} >
            <NoResultPage />
          </Container >
        );
      };

      const personDetails = person.personDetails;
      const cast = filterDuplicatedIds(person.movieCredits.cast);
      const crew = filterDuplicatedIds(person.movieCredits.crew);

      return (
        <>
          <Container>
            <HeaderCard
              imgUrl={personDetails.profile_path? `https://image.tmdb.org/t/p/w400${personDetails.profile_path}` : ""}
              title={personDetails.name}
              captionSubTitleFirs={"Date of birth"}
              subTitleFirst={personDetails.birthday}
              captionSubTitleSecond={"Place of birth"}
              subTitleSecond={personDetails.place_of_birth}
              overview={personDetails.biography}
            />
          </Container>
          <Container title={`Movies-cast (${cast.length})`}>
            <MovieList>
              {cast.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </MovieList>
          </Container>
          <Container title={`Movies-crew (${crew.length})`}>
            <MovieList>
              {crew.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </MovieList>
          </Container>
        </>
      );

    default:
      break;
  };
};

export default Content;
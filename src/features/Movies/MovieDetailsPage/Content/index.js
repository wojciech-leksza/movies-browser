import Container from "../../../../common/Container";
import ErrorPage from "../../../../common/ErrorPage";
import LoadingPage from "../../../../common/LoadingPage";
import NoResultPage from "../../../../common/NoResultPage";
import filterDuplicatedIds from "../../../../common/filterDuplicatedIds"
import HeaderCard from "../../../../common/HeaderCard";
import PersonCard from "../../../../common/PersonCard";
import { PeopleList } from "../../../../common/styled";
import { Title } from "../styled";
import Header from "../Header";

const Content = ({ movie, status }) => {
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
            if (!movie) {
                return (
                    <Container title={`Sorry, we couldn't find this movie`} >
                        <NoResultPage />
                    </Container >
                );
            };

            const movieDetails = movie.movieDetails;
            const cast = filterDuplicatedIds(movie.credits.cast);
            const crew = filterDuplicatedIds(movie.credits.crew);

            return (
                <>
                    <Header
                        poster={movieDetails.backdrop_path? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`: null}
                        LongTitle={movieDetails.title}
                        rate={movieDetails.vote_average}
                        votes={movieDetails.vote_count}
                    />
                    <Container>
                        <HeaderCard
                            imgUrl={movieDetails.poster_path? `https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`: null}
                            title={movieDetails.title}
                            movieYear={movieDetails.release_date.substring(0, 4)}

                            captionSubTitleFirs={"Production"}
                            subTitleFirst={movieDetails.production_countries.map(({name}, i, {length}) => {
                                if (length - 1 === i) {
                                    return name;
                                };
                                return `${name}, `
                            })}
                            captionSubTitleSecond={"Release date"}
                            subTitleSecond={movieDetails.release_date}

                            rate={movieDetails.vote_average}
                            votes={movieDetails.vote_count}
                            tags={movieDetails.genres}
                            overview={movieDetails.overview}
                        >
                        </HeaderCard>
                        <Title>Cast</Title>
                        <PeopleList>
                            {cast.map(person => (
                                <PersonCard
                                    key={person.id}
                                    link={person.id}
                                    pictureUrl={person.profile_path? `https://image.tmdb.org/t/p/w400${person.profile_path}` : null}
                                    name={person.name}
                                    character={person.character}
                                />
                            ))}
                        </PeopleList>

                        <Title>Crew</Title>
                        <PeopleList>
                            {crew.map(person => (
                                <PersonCard
                                    key={person.id}
                                    link={person.id}
                                    pictureUrl={person.profile_path? `https://image.tmdb.org/t/p/w400${person.profile_path}` : null}
                                    name={person.name}
                                    character={person.character}
                                />
                            ))}
                        </PeopleList>
                    </Container>
                </>
            );

        default:
            break;
    };
};

export default Content;
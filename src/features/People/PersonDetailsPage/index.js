import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container";
import filterDuplicatedIds from "../../../common/filterDuplicatedIds";
import HeaderCard from "../../../common/HeaderCard";
import Navigation from "../../../common/Navigation";
import MovieCard from "../../Movies/MoviesPage/MovieCard";
import { selectGenres } from "../../Movies/slice";
import { MovieList } from "../../Movies/MoviesPage/styled";
import { fetchPersonDetails, selectPerson, selectStatus } from "../slice";

const PersonDetailsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchPersonDetails(params.id));
    }, [dispatch, params.id]);

    const genres = useSelector(selectGenres);
    const status = useSelector(selectStatus);
    const person = useSelector(selectPerson);

    if (status === "success" && genres) {
        const personDetails = person.personDetails;
        const cast = filterDuplicatedIds(person.movieCredits.cast);
        const crew = filterDuplicatedIds(person.movieCredits.crew);

        return (
            <>
                <Navigation />
                <Container>
                    <HeaderCard
                        imgUrl={`https://image.tmdb.org/t/p/w400${personDetails.profile_path}`}
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
    };
};

export default PersonDetailsPage;
import { useSelector } from "react-redux";
import { selectMovies, selectQuery, selectStatus } from "../slice";
import { usePageParams } from "../urlParams";
import { MovieList } from "../styled";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import NoResultPage from "../../../common/NoResultPage";
import Container from "../../../common/Container";
import MovieCard from "../MovieCard";
import Pagination from "../../../common/Pagination";

const Content = () => {
    const movies = useSelector(selectMovies);
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const setPageParams = usePageParams();

    switch (status) {
        case "loading":
            return (
                <Container title="Searching for Movies...">
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
            if (movies.results.length === 0) {
                return (
                    <Container title={`Sorry, there are no results for "${query}"`} >
                        <NoResultPage />
                    </Container >
                );
            };

            return (
                <Container title={!!query ? `Search results for "${query}"` : "Popular Movies"}>
                    <MovieList>
                        {movies.results.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </MovieList>
                    <Pagination setPageParams={setPageParams}/>
                </Container>
            );

        default:
            break;
    };
};

export default Content;
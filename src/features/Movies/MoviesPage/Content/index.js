import { useSelector } from "react-redux";
import {
	selectMovies,
	selectPage,
	selectQuery,
	selectStatus
} from "../../slice";
import { usePageParams } from "../urlParams";
import { MovieList } from "../../../../common/styled";
import LoadingPage from "../../../../common/LoadingPage";
import ErrorPage from "../../../../common/ErrorPage";
import NoResultPage from "../../../../common/NoResultPage";
import Container from "../../../../common/Container";
import MovieCard from "../../../../common/MovieCard"
import Pagination from "../../../../common/Pagination";

const Content = () => {
	const movies = useSelector(selectMovies);
	const status = useSelector(selectStatus);
	const query = useSelector(selectQuery);
	const page = useSelector(selectPage);
	const setPageParams = usePageParams()

	switch (status) {
		case "loading":
			return (
				<Container title={!!query ? `Search results for "${query}"` : " "}>
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
			if (!movies) {
				return;
			};
			
			if (movies.results.length === 0) {
				return (
					<Container title={`Sorry, there are no results for "${query}"`} >
						<NoResultPage />
					</Container >
				);
			};

			return (
				<Container title={!!query ? `Search results for "${query}" (${movies.total_results})` : "Popular Movies"}>
					<MovieList>
						{movies.results.map((movie) => (
							<MovieCard
								key={movie.id}
								movie={movie}
							/>
						))}
					</MovieList>
					<Pagination
						setPageParams={setPageParams}
						page={page}
						totalPages={movies.total_pages}
					/>
				</Container>
			);

		default:
			break;
	};
};

export default Content;
import { useSelector } from "react-redux";
import { moviesPath } from "../../core/App/router";
import { selectGenres } from "../../features/Movies/slice";
import { apiImageURL } from "../../core/configAPI";
import {
	Card,
	Content,
	MovieTitle,
	NoPosterIcon,
	Poster,
	PosterImage,
	Rate,
	Rating,
	RatingStar,
	Tag,
	TagsList,
	Votes,
	YearOfProduction
} from "./styled";

const MovieCard = ({ movie }) => {
	const genres = useSelector(selectGenres);

	return (
		<Card to={`..${moviesPath}/${movie.id}`}>
			<Poster>
				{movie.poster_path ? <PosterImage src={`${apiImageURL.poster}${movie.poster_path}`} /> : <NoPosterIcon />}
			</Poster>
			<Content>
				<MovieTitle>{movie.title}</MovieTitle>
				<YearOfProduction>{movie.release_date.slice(0, 4)}</YearOfProduction>
				<TagsList>
					{movie.genre_ids.map((genreId) => (
						<Tag key={genreId}>
							{genres.find(({ id }) => id === genreId).name}
						</Tag>
					))}
				</TagsList>
				<Rating>
					<RatingStar />
					<Rate>{movie.vote_average}</Rate>
					<Votes>{movie.vote_count} votes</Votes>
				</Rating>
			</Content>
		</Card>
	);
};

export default MovieCard;
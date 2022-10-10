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

const MovieCard = ({ movie }) => (
				<Card>
					<Poster>
						{movie.poster_path ? <PosterImage src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} /> : <NoPosterIcon />}
					</Poster>
					<Content>
						<MovieTitle>{movie.title}</MovieTitle>
						<YearOfProduction>{movie.release_date}</YearOfProduction>
						<TagsList>
							<Tag>Action</Tag>
							<Tag>Adventure</Tag>
							<Tag>Drama</Tag>
						</TagsList>
						<Rating>
							<RatingStar />
							<Rate>{movie.vote_average}</Rate>
							<Votes>{movie.vote_count} votes</Votes>
						</Rating>
					</Content>
				</Card>
			)

export default MovieCard;
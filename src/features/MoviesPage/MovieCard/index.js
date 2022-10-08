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
	Wrapper,
	YearOfProduction
} from "./styled";

const MovieCard = ({ movies }) => (
	<Wrapper>
		{movies &&
			movies.results &&
			movies.results.map(({
				id,
				poster_path,
				title,
				release_date,
				vote_average,
				vote_count
			}) => (
				<Card key={id}>
					<Poster>
						{poster_path ? <PosterImage src={poster_path} /> : <NoPosterIcon />}
					</Poster>
					<Content>
						<MovieTitle>{title}</MovieTitle>
						<YearOfProduction>{release_date}</YearOfProduction>
						<TagsList>
							<Tag>Action</Tag>
							<Tag>Adventure</Tag>
							<Tag>Drama</Tag>
						</TagsList>
						<Rating>
							<RatingStar />
							<Rate>{vote_average}</Rate>
							<Votes>{vote_count} votes</Votes>
						</Rating>
					</Content>
				</Card>
			))}
	</Wrapper>
);


export default MovieCard;
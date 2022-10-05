import { Card, MovieTitle, Poster, Rate, Rating, RatingStar, Tag, TagsList, Votes, YearOfProduction } from "./styled";

const MovieCard = () => (
    <Card>
        <Poster />
        <MovieTitle>Mulan</MovieTitle>
        <YearOfProduction>2020</YearOfProduction>
        <TagsList>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
        </TagsList>
        <Rating>
            <RatingStar />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
        </Rating>
    </Card>
);


export default MovieCard;
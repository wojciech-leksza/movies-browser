import {
    Wrapper,
    Block,
    Poster,
    Shadow,
    Content,
    Title,
    Rating,
    RatingStar,
    Rate,
    Votes,
    RatingBlock,
} from "./styled";

const Header = ({ poster, LongTitle, rate, votes }) => {
    return (
        poster ?
            <Block>
                < Wrapper >
                    <Poster alt={poster} src={poster} />
                    <Shadow />
                    <Content>
                        <Title>{LongTitle}</Title>
                        <RatingBlock>
                            <Rating>
                                <RatingStar />
                                <Rate>{rate}</Rate>
                            </Rating>
                            <Votes>{votes} votes</Votes>
                        </RatingBlock>
                    </Content>
                </Wrapper >
            </Block >
            :
            ""
    )
};

export default Header;
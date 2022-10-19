import { useState } from "react";
import { NoPosterIcon, Poster, PosterImage, } from "./styled";
import {
    Card,
    Details,
    StyledTitle,
    Rate,
    SecondaryText,
    Rating,
    RatingStar,
    Tag,
    TagsList,
    Votes,
    Year,
    Overview,
    SubTitle,
    Caption,
} from "./styled";

const HeaderCard = ({
    imgUrl,
    title,
    captionSubTitleFirs,
    subTitleFirst,
    captionSubTitleSecond,
    subTitleSecond,
    votes,
    rate,
    tags,
    movieYear,
    overview,
}) => {
    const [noImg, setNoImg] = useState(false);

    return (
        <Card>
            <Poster>
                <Poster>{!imgUrl || noImg ?
                    <NoPosterIcon />
                    :
                    <PosterImage src={imgUrl} alt={title} onError={() => { setNoImg(true) }} />
                }
                </Poster>
            </Poster>
            <Details>
                <StyledTitle>{title}</StyledTitle>
                {movieYear ? <Year>{movieYear}</Year> : null}
                {subTitleFirst ? <SubTitle><Caption>{captionSubTitleFirs}: </Caption>{subTitleFirst}</SubTitle> : null}
                {subTitleSecond ? <SubTitle><Caption>{captionSubTitleSecond}: </Caption>{subTitleSecond}</SubTitle> : null}

                {
                    tags ?
                        <TagsList>
                            {tags.map(({ name }) => (
                                <Tag key={name}>{name}</Tag>
                            ))}
                        </TagsList>
                        :
                        ""
                }

                {rate && votes ?
                    <Rating>
                        <RatingStar />
                        <Rate>{rate} <SecondaryText>/10</SecondaryText></Rate>
                        <Votes>{votes} votes</Votes>
                    </Rating>
                    :
                    ""
                }

            </Details>
            <Overview>
                <p>{overview}</p>
            </Overview>

        </Card>
    )
};

export default HeaderCard;
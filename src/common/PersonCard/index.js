import { useState } from "react";
import { peoplePath } from "../../core/App/router";
import { Card, Picture, PersonName, PersonCharacter, NoPictureContainer, StyledNoPicture } from "./styled";

const PersonCard = ({ link, pictureUrl, name, character }) => {
    const [noImg, setNoImg] = useState(false);
    
    return (
        <Card to={`..${peoplePath}/${link}`}>
            {!pictureUrl || noImg ?
                <NoPictureContainer><StyledNoPicture /></NoPictureContainer>
                :
                <Picture alt={name} src={pictureUrl} onError={() => { setNoImg(true) }} />
            }
            <PersonName>{name}</PersonName>
            <PersonCharacter>{character}</PersonCharacter>
        </Card>
    )
};

export default PersonCard;
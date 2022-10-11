import { Card, Picture, PersonName, PersonCharacter, NoPictureContainer, StyledNoPicture } from "./styled";

const PersonCard = ({ pictureUrl, name, character }) => {
    return (
        <Card>
            {pictureUrl ?
                <Picture alt={name} src={pictureUrl} />
                :
                <NoPictureContainer><StyledNoPicture /></NoPictureContainer>}
            <PersonName>{name}</PersonName>
            <PersonCharacter>{character}</PersonCharacter>
        </Card>
    )
};

export default PersonCard;
import { Card, Picture, PersonName, PersonCharacter, NoPictureElement, StyledNoPicture } from "./styled";

const PersonCard = ({ pictureUrl, name, character }) => {
    return (
        <Card>
            {pictureUrl? <Picture src={pictureUrl}/> : <NoPictureElement><StyledNoPicture/></NoPictureElement>}
            <PersonName>{name}</PersonName>
            <PersonCharacter>{character}</PersonCharacter>
        </Card>
    )
};

export default PersonCard;
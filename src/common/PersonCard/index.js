import { Card, Picture, PersonName, PersonCharacter } from "./styled";

const PersonCard = ({ pictureUrl, name, character }) => {
    return (
        <Card>
            <Picture src={pictureUrl} />
            <PersonName>{name}</PersonName>
            <PersonCharacter>{character}</PersonCharacter>
        </Card>
    )
};

export default PersonCard;
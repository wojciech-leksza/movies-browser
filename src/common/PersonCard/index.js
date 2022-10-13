import { peoplePath } from "../../core/App/router";
import { Card, Picture, PersonName, PersonCharacter, NoPictureContainer, StyledNoPicture } from "./styled";

const PersonCard = ({ link, pictureUrl, name, character }) => (
    <Card to={`..${peoplePath}/${link}`}>
        {pictureUrl ?
            <Picture alt={name} src={pictureUrl} />
            :
            <NoPictureContainer><StyledNoPicture /></NoPictureContainer>}
        <PersonName>{name}</PersonName>
        <PersonCharacter>{character}</PersonCharacter>
    </Card>
);

export default PersonCard;
import { Container, Title, Element } from "./styled";
import NoResultElement from './img/NoResultElement.svg';

const NoResultPage = () => {
    return (
        <Container>
            <Title>Sorry, there are no results for “{"Muan"}”</Title>
            <Element src={NoResultElement} />
        </Container>
    )
};

export default NoResultPage;
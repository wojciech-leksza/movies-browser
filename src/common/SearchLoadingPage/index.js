import { Container, Title, Element } from "./styled";
import LoadingElement from './img/loadingElement.svg';

const SearchLoadingPage = () => {
    return (
        <Container>
            <Title>Search results for “{"Mulan"}”</Title>
            <Element src={LoadingElement} />
        </Container>
    )
};

export default SearchLoadingPage;
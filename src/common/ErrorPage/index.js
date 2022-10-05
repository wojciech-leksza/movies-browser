import { Container, Title, Element, SubTitle, Button } from "./styled";
import ErrorElement from './img/ErrorElement.svg';

const ErrorPage = () => {
  return (
    <Container>
      <Element src={ErrorElement} />
      <Title>Ooops! Something went wrong...</Title>
      <SubTitle>Please check your network connection<br />and try again</SubTitle>
      <Button>Back to home page</Button>
    </Container>
  )
};

export default ErrorPage;
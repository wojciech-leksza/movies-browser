import { moviesPath } from "../../core/App/router";
import { Container, Title, StyledIco, SubTitle, Button } from "./styled";

const ErrorPage = () => {
  return (
    <Container>
      <StyledIco />
      <Title>Ooops! Something went wrong...</Title>
      <SubTitle>Please check your network connection<br />and try again</SubTitle>
      <Button to={moviesPath}>Back to home page</Button>
    </Container>
  )
};

export default ErrorPage;
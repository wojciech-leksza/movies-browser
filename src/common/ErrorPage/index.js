import { movies } from "../../core/App/routes";
import { Container, Title, StyledIco, SubTitle, Button, Content } from "./styled";

const ErrorPage = () => {
  return (
    <Container>
      <StyledIco/>
      <Title>Ooops! Something went wrong...</Title>
      <SubTitle>Please check your network connection<br />and try again</SubTitle>
      <Button to={movies}><Content>Back to home page</Content></Button>
    </Container>
  )
};

export default ErrorPage;
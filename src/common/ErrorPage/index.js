import { Container, Title, StyledIco, SubTitle, Button } from "./styled";

const ErrorPage = () => {
  return (
    <Container>
      <StyledIco/>
      <Title>Ooops! Something went wrong...</Title>
      <SubTitle>Please check your network connection<br />and try again</SubTitle>
      <Button>Back to home page</Button>
    </Container>
  )
};

export default ErrorPage;
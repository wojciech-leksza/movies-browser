import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "../../common/styled";
import MoviesPage from "../../features/MoviesPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Container>
        <MoviesPage/>
      </Container>
    </ThemeProvider>
  )
};

export default App;
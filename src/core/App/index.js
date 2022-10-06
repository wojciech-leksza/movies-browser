import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import Navigation from "../../common/Navigation";
import Pagination from "../../common/Pagination";
import MoviesPage from "../../features/MoviesPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation />
      <MoviesPage />
      <Pagination />
    </ThemeProvider>
  )
};

export default App;
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <div>Hello world!</div>
    </ThemeProvider>
  )
};

export default App;
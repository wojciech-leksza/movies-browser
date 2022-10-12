import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, } from "react-router-dom";
import { router } from "./router";
import { init } from "../../features/Movies/slice";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(init());
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
};

export default App;
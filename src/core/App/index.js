import { createHashRouter, createRoutesFromElements, Navigate, Route, RouterProvider, } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import MoviesPage from "../../features/MoviesPage";
import PersonsPage from "../../features/PersonsPage";
import Page404 from "../../features/Page404";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="persons" element={<PersonsPage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="/" element={<Navigate replace to="/movies" />} errorElement={<Page404 />} />
    </>
  )
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <RouterProvider
        router={router}
      />
    </ThemeProvider>
  )
};

export default App;
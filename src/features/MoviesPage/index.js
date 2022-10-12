import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./slice";
import Navigation from "../../common/Navigation";
import Content from "./Content";

const MoviesPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Content />
    </>
  )
};

export default MoviesPage;
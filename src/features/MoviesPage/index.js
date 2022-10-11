import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { init } from "./slice";
import Navigation from "../../common/Navigation";
import Content from "./Content";

const MoviesPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Content />
    </>
  )
};

export default MoviesPage;
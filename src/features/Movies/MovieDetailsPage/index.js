import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMovie, selectStatus } from "../slice";
import Navigation from "../../../common/Navigation";
import Content from "./Content";
import { useQueryParams } from "../MoviesPage/urlParams";

const MovieDetailsPage = () => {
  const [queryParam, setQueryParam] = useQueryParams();
  
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(params.id));
  }, [dispatch, params.id]);

  const status = useSelector(selectStatus);
  const movie = useSelector(selectMovie);

  return (
    <>
      <Navigation
        queryParam={queryParam}
        setQueryParam={setQueryParam}
      />
      <Content
        movie={movie}
        status={status}
      />
    </>
  );
};

export default MovieDetailsPage;
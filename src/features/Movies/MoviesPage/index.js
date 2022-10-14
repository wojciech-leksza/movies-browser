import Navigation from "../../../common/Navigation";
import Content from "./Content";
import { useQueryParams } from "./urlParams";

const MoviesPage = () => {
  const [queryParam, setQueryParam] = useQueryParams();

  return (
    <>
      <Navigation
        queryParam={queryParam}
        setQueryParam={setQueryParam}
      />
      <Content />
    </>
  )
};

export default MoviesPage;
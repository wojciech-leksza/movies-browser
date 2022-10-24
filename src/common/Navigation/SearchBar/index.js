import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { queryParamName } from "../../../features/Movies/MoviesPage/urlParams";
import { Input, StyledIcon, Wrapper, Label } from "./styled";

const SearchBar = ({ queryParam, setQueryParam }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleQuery = ({ target }) => {
    if (location.pathname !== `/${location.pathname.split('/')[1]}`) {
      navigate({
        pathname: `/${location.pathname.split('/')[1]}`,
        search: createSearchParams({ [queryParamName]: target.value }).toString()
      });
    } else {
      setQueryParam(target.value);
    };
  };

  return (
    <Wrapper>
      <Label>
        <StyledIcon />
        <Input
          autoFocus
          value={queryParam || ""}
          onChange={handleQuery}
          placeholder={`Search for ${location.pathname.split('/')[1]}...`}
        />
      </Label>
    </Wrapper>
  );
};

export default SearchBar;
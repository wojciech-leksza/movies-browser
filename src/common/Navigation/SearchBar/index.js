import { useQueryParams } from "../../../features/Movies/MoviesPage/urlParams";
import { Input, StyledIcon, Wrapper, Label } from "./styled";

const SearchBar = () => {
  const [queryParam, setQueryParam] = useQueryParams();

  const handleQuery = ({ target }) => {
    setQueryParam(target.value);
  };

  return (
    <Wrapper>
      <Label>
        <StyledIcon />
        <Input
          value={queryParam || ""}
          onChange={handleQuery}
          placeholder="Search for movies..."
        />
      </Label>
    </Wrapper>
  );
};

export default SearchBar;
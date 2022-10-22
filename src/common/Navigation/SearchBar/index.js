import { useLocation } from "react-router-dom";
import { Input, StyledIcon, Wrapper, Label } from "./styled";

const SearchBar = ({ queryParam, setQueryParam }) => {
  const location = useLocation();

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
          placeholder={`Search for ${location.pathname.split('/')[1]}...`}
        />
      </Label>
    </Wrapper>
  );
};

export default SearchBar;
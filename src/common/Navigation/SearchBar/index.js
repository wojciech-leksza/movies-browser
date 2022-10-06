import { Input, StyledIcon, Wrapper } from "./styled";

const SearchBar = () => {
  return (
    <Wrapper>
      <label>
        <StyledIcon />
        <Input
          placeholder="Search for movies..."
        />
      </label>
    </Wrapper>
  )
};

export default SearchBar;
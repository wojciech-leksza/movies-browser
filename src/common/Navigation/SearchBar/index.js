import { Input, StyledIcon, Wrapper } from "./styled";

const SearchBar = () => {
  return (
    <Wrapper>
      <StyledIcon />
      <Input
        placeholder="Search for movies..."
      />
    </Wrapper>
  )
};

export default SearchBar;
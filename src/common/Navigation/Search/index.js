import { Input, StyledIcon, Wrapper } from "./styled";

const Search = () => {
  return (
    <Wrapper>
      <StyledIcon />
      <Input
        placeholder="Search for movies..."
      />
    </Wrapper>
  )
};

export default Search;
import { Input, StyledIcon, Wrapper, Label } from "./styled";

const SearchBar = () => {
  return (
    <Wrapper>
      <Label>
        <StyledIcon />
        <Input
          placeholder="Search for movies..."
        />
      </Label>
    </Wrapper>
  )
};

export default SearchBar;
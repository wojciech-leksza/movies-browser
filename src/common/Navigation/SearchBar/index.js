import { Input, StyledIcon, Wrapper, Label } from "./styled";

const SearchBar = ({ placeholder }) => {
  return (
    <Wrapper>
      <Label>
        <StyledIcon />
        <Input
          placeholder={placeholder}
        />
      </Label>
    </Wrapper>
  )
};

export default SearchBar;
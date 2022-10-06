import SearchBar from "./SearchBar";
import {
  Header,
  Wrapper,
  StyledLogo,
  Nav,
  StyledIcon,
  Title,
  StyledLink,
  ListWrapper,
  NavList,
  NavListItem,
  StyledNavLink
} from "./styled";

const Navigation = () => {
  return (
    <Header>
      <Wrapper>
        <Nav>
          <StyledLogo>
            <StyledIcon />
            <Title>
              <StyledLink>
                movies browser
              </StyledLink>
            </Title>
          </StyledLogo>
            <NavList>
              <NavListItem>
                <StyledNavLink>
                  movies
                </StyledNavLink>
              </NavListItem>
              <NavListItem>
                <StyledNavLink>
                  people
                </StyledNavLink>
              </NavListItem>
            </NavList>
        </Nav>
        <SearchBar />
      </Wrapper>
    </Header>
  )
};

export default Navigation;
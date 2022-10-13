import { moviesPath, peoplePath } from "../../core/App/router";
import SearchBar from "./SearchBar";
import {
  Header,
  Wrapper,
  StyledLogo,
  Nav,
  StyledIcon,
  Title,
  StyledLink,
  NavList,
  NavListItem,
  StyledNavLink,
} from "./styled";

const Navigation = ({ queryParam, setQueryParam }) => {
  return (
    <Header>
      <Wrapper>
        <Nav>
          <StyledLogo>
            <StyledIcon />
            <Title>
              <StyledLink
                href="/Movies-browser/"
              >
                movies browser
              </StyledLink>
            </Title>
          </StyledLogo>
          <NavList>
            <NavListItem>
              <StyledNavLink to={moviesPath}>
                movies
              </StyledNavLink>
            </NavListItem>
            <NavListItem>
              <StyledNavLink to={peoplePath}>
                people
              </StyledNavLink>
            </NavListItem>
          </NavList>
        </Nav>
        <SearchBar 
          queryParam={queryParam}
          setQueryParam={setQueryParam}
        />
      </Wrapper>
    </Header>
  )
};

export default Navigation;
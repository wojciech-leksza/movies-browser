import styled from "styled-components";
import { ReactComponent as VideoIcon } from "./icon_video.svg";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.woodSmoke};
  width: 100%;
  padding: 26px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1368px;
  color: ${({ theme }) => theme.colors.white};

  @media(max-width: ${({theme}) => theme.breakpoints.tabletMax}px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled(VideoIcon)`
  width: 40px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    width: 18px
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  margin-left: 12px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    letter-spacing: -0.5px;
  }
`;

export const ListWrapper = styled.div`
  margin-left: 80px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    margin-left: 24px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  font-weight: 600;
  font-size: 14px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

export const NavListItem = styled.li`
  padding: 8px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    padding: 8px 12px;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: opacity 0.5s;

  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

export const StyledNavLink = styled(StyledLink)`
  padding: 8px 16px;
  text-transform: uppercase;

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
  }
`;
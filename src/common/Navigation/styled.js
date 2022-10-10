import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as VideoIcon } from "./icon_video.svg";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.woodSmoke};
  padding: 26px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1368px;
  color: ${({ theme }) => theme.colors.white};

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled(VideoIcon)`
  width: 40px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 18px
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 16px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  margin-left: 12px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileMedium};
    letter-spacing: -0.5px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-left: 6px;
  }
`;

export const NavList = styled.ul`
  margin-left: 80px;
  display: flex;
  padding: 0;
  list-style: none;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileMedium};
    margin-left: 24px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-left: 12px;
    font-size: ${({ theme }) => theme.fontSizes.mobileSmall};
  } 
`;

export const NavListItem = styled.li`
  padding: 8px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    padding: 0 6px;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledNavLink = styled(NavLink)`
color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: opacity 0.5s;
  padding: 4px 8px;
  text-transform: uppercase;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.large};
  }

  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
  
`;
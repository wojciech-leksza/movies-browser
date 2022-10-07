import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./search_icon.svg";

export const Wrapper = styled.div`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.larger};;

  @media(max-width: ${({theme}) => theme.breakpoints.tabletMax}px) {
    margin-top: 12px;
    width: 90%;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    padding: 8px 12px;
  }
`;

export const Label = styled.label`
  display: flex;
`;

export const StyledIcon = styled(SearchIcon)`
  width: 18px;
  margin-right: 18px;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: text;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    width: 12px;
    margin-right: 12px;
  }
`;

export const Input = styled.input`
  width: 368px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;

  &:focus, active {
    outline: none;
  }
  
  @media(max-width: ${({theme}) => theme.breakpoints.tabletMax}px) {
    width: 100%;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileMedium};
  }
`;


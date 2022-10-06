import styled from "styled-components";
import { ReactComponent as VectorLeft } from "./left_arrow.svg";
import { ReactComponent as VectorRight } from "./right_arrow.svg";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey};
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  color: ${({ theme }) => theme.colors.woodSmoke};
  border: none;
  margin: 0 12px;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    margin: 0 8px;
  }
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin: 0 12px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  margin: 0 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGrey};

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }
`;

export const PageNumber = styled.span`
  font-weight: 600;
  margin: 0 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    margin: 0 2px;
  }
`;

export const LeftArrow = styled(VectorLeft)`
  color: ${({ theme }) => theme.colors.blue};
  margin: 0 8px;
`;

export const RightArrow = styled(VectorRight)`
  color: ${({ theme }) => theme.colors.blue};
  margin: 0 8px;
`;

export const LeftArrowMobile = styled(VectorLeft)`
  display: none;
  
  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    display: inline;
    color: ${({ theme }) => theme.colors.blue};
    margin-right: 8px;
  }
`;

export const RightArrowMobile = styled(VectorRight)`
  display: none;
  
  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    display: inline;
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 8px;
  }
`;


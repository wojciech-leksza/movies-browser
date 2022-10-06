import styled from "styled-components";
import { ReactComponent as VectorLeft } from "./left_arrow.svg";
import { ReactComponent as VectorRight } from "./right_arrow.svg";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 100px 0;
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
  transition: box-shadow 0.5s;

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.hover};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 8px;
  }
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0 12px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  margin: 0 12px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.darkGrey};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }
`;

export const PageNumber = styled.span`
  font-weight: 600;
  margin: 0 8px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: inline;
    color: ${({ theme }) => theme.colors.blue};
    margin-right: 8px;
  }
`;

export const RightArrowMobile = styled(VectorRight)`
  display: none;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: inline;
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 8px;
  }
`;


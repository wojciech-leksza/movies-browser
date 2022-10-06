import styled, { keyframes } from "styled-components";
import { ReactComponent as loadingElement } from './img/loadingElement.svg';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`

export const Title = styled.h1`
    align-self: flex-start;
    margin: 56px 0 120px 15%;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.larger};
    line-height: 120%;
    
    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: ${({ theme }) => theme.fontSizes.large};
        margin-bottom: 60px;
        margin: 36px 0 60px 13%;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSizes.small};
        line-height: 130%;
        margin: 24px 0 24px 7%;
    }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Element = styled(loadingElement)`
    width: 91px;
    height: auto;
    animation: 1s ${rotate} linear infinite;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 60px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 35px;
    }
`
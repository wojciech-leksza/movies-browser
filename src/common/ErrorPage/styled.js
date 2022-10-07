import styled from "styled-components";
import { ReactComponent as ErrorElement } from './img/ErrorElement.svg';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledIco = styled(ErrorElement)`
    margin: 120px 0px 40px;
    width: 120px;
    height: auto;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 80px;
        margin: 80px 0px 20px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 40px;
        margin: 40px 0px 10px;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.larger};
    line-height: 120%;
    margin: 0px;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSizes.small};
        line-height: 130%;
    }
`

export const SubTitle = styled.h2`
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 130%;
    text-align: center;
    margin: 24px;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        margin: 15px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: ${({ theme }) => theme.fontSizes.mobileSmall};
        margin: 8px;
    }
`

export const Button = styled.button`
    padding: 16px 24px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    color:${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.small};
    border: none;
    transition: box-shadow 0.3s;
    
    &:hover{
        filter:brightness(110%);
        cursor: pointer;
        box-shadow: ${({ theme }) => theme.boxShadow.hover};
    }

    &:active{
        filter:brightness(90%);
    }

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        border-radius: ${({ theme }) => theme.borderRadius.tabletSmall};
        font-size: ${({ theme }) => theme.fontSizes.mobileMedium};
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        border-radius: ${({ theme }) => theme.borderRadius.mobileSmall};
        font-size: ${({ theme }) => theme.fontSizes.mobileSmall};
        padding: 8px 12px;
    }
`
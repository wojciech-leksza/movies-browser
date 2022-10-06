import { NavLink } from "react-router-dom";
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
    height:auto;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 80px;
        height:auto;
        margin: 80px 0px 20px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 40px;
        height:auto;
        margin: 40px 0px 10px;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin: 0px;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 21px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
    }
`

export const SubTitle = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    text-align: center;
    margin: 24px;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 15px;
        margin: 15px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 9px;
        margin: 8px;
    }
`

export const Button = styled(NavLink)`
    text-decoration:none;
    border-radius: 5px;
    color:${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    border:none;
    cursor: pointer;
    :hover{
        filter:brightness(110%);
    }
    :active{
        filter:brightness(90%);
    }

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        border-radius: 4px;
        font-size: 9px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        border-radius: 3px;
        font-size: 5px;
    }
`

export const Content = styled.div`
    margin:16px 24px;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin:8px 16px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin:1px 8px;
    }
`
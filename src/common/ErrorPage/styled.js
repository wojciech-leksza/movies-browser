import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`

export const Element = styled.img`
    margin: 120px 0px 40px;
    width: 120px;

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

export const Button = styled.button`
    width: 180px;
    height: 50px;
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
        width: 120px;
        height: 35px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        border-radius: 3px;
        font-size: 5px;
        width: 70px;
        height: 20px;
    }
`
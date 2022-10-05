import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`

export const Title = styled.h1`
    align-self: flex-start;
    margin: 56px 0 0 15%;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    
    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 21px;
        margin-bottom: 60px;
        margin: 36px 0 0 13%;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        margin: 24px 0 0 7%;
    }
`

export const Element = styled.img`
    width: 40%;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 50%;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 60%;
    }
`
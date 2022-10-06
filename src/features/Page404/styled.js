import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 200px;
    line-height: 120%;
    margin: 100px 0 0;
    
    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 120px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 80px;
    }
`
export const SubTitle = styled.h2`
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;
    text-align: center;
    font-weight:900;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 18px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    }
`
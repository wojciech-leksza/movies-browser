import styled from "styled-components";

export const MovieList = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 324px);
    gap: 24px;
    margin-top: 24px;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 12px;
        gap: 16px;
        grid-template-columns: 1fr;
    };
`;

export const PeopleList = styled.article`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 208px);
    gap: 24px;
    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(auto-fill, 136px);
        margin-top: 12px;
        gap: 16px;
    }
`;
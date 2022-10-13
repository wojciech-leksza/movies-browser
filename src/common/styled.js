import styled from "styled-components";

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
    gap: 24px;
    margin-top: 24px;
    padding: 0;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 12px;
        gap: 16px;
        grid-template-columns: 1fr;
    };
`;

export const PeopleList = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 12px;
        gap: 16px;
    }
`;
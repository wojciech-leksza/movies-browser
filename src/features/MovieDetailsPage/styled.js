import styled from "styled-components";

export const Wrapper = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 12px;
        gap: 16px;
    };
`;

export const Title = styled.h2`
    margin: 64px 0 32px;
    line-height: 120%;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.larger};
`;
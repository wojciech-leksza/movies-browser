import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    padding: 16px;
    margin: auto;
`;

export const Title = styled.h1`
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.larger};
    font-weight: 600;
    line-height: 1.2;
    margin: 56px 0 0 0;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 24px;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarger};
    };
`;
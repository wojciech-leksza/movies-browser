import styled from "styled-components";

export const Title = styled.h2`
    margin: 64px 0 0;
    line-height: 120%;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.larger};
`;
import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
    gap: 24px;
    margin-top: 24px;
`;

export const Card = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    padding: 16px;
    height: 650px;
    border-radius: ${({ theme: { borderRadiusSmall } }) => borderRadiusSmall};
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
    background-color: ${({ theme: { colors } }) => colors.white};
`;
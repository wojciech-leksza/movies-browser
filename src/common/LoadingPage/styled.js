import styled, { keyframes } from "styled-components";
import { ReactComponent as loadingElement } from "./img/loadingElement.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    };
`;

export const Element = styled(loadingElement)`
    width: 91px;
    height: auto;
    margin-top: 120px;
    animation: 1s ${rotate} linear infinite;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 50px;
        width: 60px;
    };

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 24px;
        width: 35px;
    };
`;
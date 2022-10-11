import styled from "styled-components";
import { ReactComponent as NoResultElement } from "./img/NoResultElement.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`;

export const Element = styled(NoResultElement)`
    width: 40%;
    height:auto;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 50%;
    };

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 60%;
    };
`;
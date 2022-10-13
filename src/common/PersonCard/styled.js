import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as noPicture } from "./noPicture.svg";

export const Card = styled(Link)`
    padding: 16px;
    width: 208px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.woodSmoke};
    text-decoration: none;
    box-shadow: ${({ theme }) => theme.boxShadow.tile};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 136px;
        max-height: 245px;
        padding: 8px;
    }
`;

export const Picture = styled.img`
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const NoPictureContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color:${({ theme }) => theme.colors.silver};
    width:100%;
    height:100%;
`;

export const StyledNoPicture = styled(noPicture)`
    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding:10%;
    }
`;

export const PersonName = styled.h3`
    padding: 0;
    margin: 8px 0;
    line-height: 130%;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 136px;
        max-height: 245px;
        margin: 8px;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`;

export const PersonCharacter = styled.span`
    min-height: ${({ theme }) => theme.fontSizes.larger};
    font-size: ${({ theme }) => theme.fontSizes.mobileLarger};
    color: ${({ theme }) => theme.colors.darkGrey};
    line-height: 150%;
    font-weight: 400;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-height: ${({ theme }) => theme.fontSizes.mobileMedium};
    font-size: ${({ theme }) => theme.fontSizes.mobileMedium};
    line-height: 130%;
    }
`;

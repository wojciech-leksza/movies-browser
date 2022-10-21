import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "./starIcon.svg";
import { ReactComponent as Video } from "./Video.svg";

export const Card = styled(Link)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
    min-height: 650px;
    max-width: 400px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.boxShadow.tile};
    background-color: ${({ theme: { colors } }) => colors.white};
    transition: 0.5s;
    text-decoration: none;
    &:hover {
        transform: translateY(-15px);
    }
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        grid-template-columns: 1fr 1fr;
        max-width: none;
        min-height: 201px;
    };
`;

export const Poster = styled.div`
    width: 100%;
    min-height: 434px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme: { colors } }) => colors.silver};
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        min-height: 169px;
    }; 
`;

export const PosterImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const NoPosterIcon = styled(Video)`
    height: auto;
    width: 64px;
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 38px;
    }; 
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MovieTitle = styled.h2`
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    line-height: 1.3;
    font-weight: 500;
    margin: 0;
    
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarge};
    }; 
`;

export const YearOfProduction = styled.p`
    color: ${({ theme: { colors } }) => colors.darkGrey};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    line-height: 1.5;
    margin: 8px 0 0 0;
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileMedium};
        margin-top: 4px;
    }; 
`;

export const TagsList = styled.ul`
    flex-grow: 1;
    align-content: flex-start;
    list-style: none;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: 8px 0 0 0;
    padding: 0;
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        flex-grow: 0;
    }; 
`;

export const Tag = styled.li`
    align-self: flex-start;
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    line-height: 1.4;
    padding: 8px 16px;
    background-color: ${({ theme: { colors } }) => colors.grey};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileSmall};
        padding: 4px 8px;
    }; 
`;

export const Rating = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    line-height: 1.5;
    margin-top: 10px;
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        gap: 8px;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.MobileMedium};
        margin-top: 8px;
    }; 
`;

export const RatingStar = styled(StarIcon)`
    height: auto;
    width: 24px;
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 16px;
    }; 
`;

export const Rate = styled.p`
    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.black};
    margin: 0;
`;

export const Votes = styled.p`
    color: ${({ theme: { colors } }) => colors.darkGrey};
    margin: 0;
`;
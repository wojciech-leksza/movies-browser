import styled from "styled-components";
import { ReactComponent as Video } from "./video.svg";
import { ReactComponent as Person } from "./person.svg";
import { ReactComponent as StarIcon } from "./starIcon.svg";

export const Card = styled.article`
    display: grid;
    grid-template-columns: 312px 1fr;
    grid-template-rows: auto min-content 1fr;
    gap: 0 40px;
    padding: 40px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.boxShadow.tile};
    background-color: ${({ theme: { colors } }) => colors.white};

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-rows: auto auto auto;
        grid-template-columns: 135px auto;
        gap: 8px 16px;
        padding: 16px;
    };
`;

export const Poster = styled.div`
    grid-row-start: span 2;
    background-color: ${({ theme: { colors } }) => colors.silver};
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 5px;
    width:100%;
    min-width:232px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        min-width:90px;
        grid-row-start: 1;
    };
`;

export const PosterImage = styled.img`
    max-width: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const NoMoviePosterIcon = styled(Video)`
    height: auto;
    width: 64px;
    padding: 156px 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 38px;
        padding: 64px 0;
    };
`;

export const NoPersonPosterIcon = styled(Person)`
    height: auto;
    width: 64px;
    padding: 156px 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 38px;
        padding: 64px 0;
    };
`;

export const Details = styled.div`
    grid-area: 1 / 2;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        grid-row-start: span 3;
    }; 
`;

export const StyledTitle = styled.h2`
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.larger};
    line-height: 1.2;
    margin: 0 0 24px;
    
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarge};
        margin: 0 0 4px;
    }; 
`;

export const Year = styled.p`
    color: ${({ theme: { colors } }) => colors.dark};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    line-height: 1.5;
    margin: 24px 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileMedium};
        margin: 4px 0;
        color: ${({ theme: { colors } }) => colors.darkGrey};
    }; 
`;

export const SubTitle = styled.div`
    margin: 8px 0;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarger};

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarge};
    }; 
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-column: 1 / 3;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileMedium};
    };
`;

export const Caption = styled.span`
    color: ${({ theme }) => theme.colors.darkGrey};

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    };
`;

export const Overview = styled.div`
    grid-row-start: span 2;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    line-height: 1.6;

    @media (max-width:${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarge};
    };
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
        grid-column: 1 / 3;
    };
`;

export const TagsList = styled.ul`
    align-content: flex-start;
    list-style: none;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: 24px 0;
    padding: 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin: 8px 0;
    }; 
`;

export const Tag = styled.li`
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    line-height: 1.4;
    padding: 8px 16px;
    background-color: ${({ theme: { colors } }) => colors.grey};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileSmall};
        padding: 4px 8px;
    }; 
`;

export const Rating = styled.div`
    display: flex;
    align-items:center;
    gap: 12px;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    line-height: 1.5;
    margin-top: 10px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        gap: 5px;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileSmall};
        margin-top: 8px;
    }; 
`;

export const RatingStar = styled(StarIcon)`
    height: auto;
    width: 24px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 16px;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.MobileMedium};
    }; 
`;

export const SecondaryText = styled.span`
    font-weight: 400;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    line-height: 1.2;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        display: none;
    }; 
`;

export const Rate = styled.p`
    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.black};
    margin: 0;
    line-height: 1.3;
`;

export const Votes = styled.p`
    margin: 0;
    font-weight: 400;
    line-height: 1.2;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        color: ${({ theme: { colors } }) => colors.darkGrey};
    }; 
`;


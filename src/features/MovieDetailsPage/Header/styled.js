import styled from "styled-components";
import { ReactComponent as StarIcon } from "./starIcon.svg";

export const Block = styled.header`
    display: flex;
    justify-content: center;
    max-width: 100%;
    max-height: 770px;
    background-color: ${({ theme: { colors } }) => colors.woodSmoke};
`;

export const Wrapper = styled.article`
    position: relative;
    display: flex;
    max-width: 1370px;
    flex-basis: 100%;
    max-height: 770px;
`;

export const Poster = styled.img`
    width: 100%;
    padding: 0px 16px;
    filter: brightness(80%);
`;

export const Shadow = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: inset 0 0 60px 100px ${({ theme: { colors } }) => colors.woodSmoke};

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        box-shadow: inset 0 0 35px 60px ${({ theme: { colors } }) => colors.woodSmoke};
    }; 

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        box-shadow: inset 0 0 20px 30px ${({ theme: { colors } }) => colors.woodSmoke};
        width: 96%;
        height: 100%;
        left:2%;
    }; 

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMin}px) {
        box-shadow: inset 0 0 10px 20px ${({ theme: { colors } }) => colors.woodSmoke};
        width: 95%;
        height: 100%;
        left:2.5%;
    }; 
`;

export const Content = styled.div`
    color: ${({ theme: { colors } }) => colors.white};
    position: absolute;
    padding: 0 24px 56px;
    bottom: 0;
    left: 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        padding: 0px 24px;
        display: flex;
        flex-direction: column;
    }; 
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.larger};
    }; 

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    }; 
`;

export const RatingBlock = styled.div`

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        display: flex;
    }; 
`;

export const Rating = styled.div`
    color: ${({ theme: { colors } }) => colors.white};
    display: flex;
    align-items:center;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    padding: 0 0px 16px;
    bottom: 0;
    left: 0;
`;

export const RatingStar = styled(StarIcon)`
    width: 40px;
    height: auto;
    margin-right: 10px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        width: 28px;
    }; 

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 16px;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.MobileMedium};
    }; 
`;

export const Rate = styled.p`
    font-weight: 600;
    margin: 0;
    line-height: 29px;
    font-size: 30px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarger};
    }; 

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.MobileMedium};
    }; 
`;

export const RateSecondary = styled.span`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarge};

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileMedium};
    }; 

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileSmall};
    }; 
`;

export const Votes = styled.p`
    font-weight: 400;
    line-height: 17px;
    
    font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileLarge};

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileMedium};
    }; 

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.mobileSmall};
        margin: 9px;
    }; 
`;
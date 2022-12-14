import styled from "styled-components";
import { ReactComponent as StarIcon } from "./starIcon.svg";

export const Block = styled.header`
    display: flex;
    justify-content: center;
    max-width: 100%;
    max-height: 770px;
    background-color: ${({ theme: { colors } }) => colors.woodSmoke};
`;

export const Wrapper = styled.section`
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
    background: linear-gradient(90deg, rgba(24,24,27,1) 1%, rgba(0,0,0,0) 30%), linear-gradient(0deg, rgba(24,24,27,1) 1%, rgba(0,0,0,0) 30%), linear-gradient(180deg, rgba(24,24,27,1) 1%, rgba(0,0,0,0) 30%), linear-gradient(270deg, rgba(24,24,27,1) 1%, rgba(0,0,0,0) 20%);
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
    font-size: ${({ theme: { fontSizes } }) => fontSizes.gigant};
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
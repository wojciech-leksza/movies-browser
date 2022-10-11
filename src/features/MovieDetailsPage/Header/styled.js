import styled from "styled-components";
import { ReactComponent as StarIcon } from "./starIcon.svg";

export const Block = styled.header`
    display:flex;
    justify-content:center;
    max-width: 100%;
    max-height: 770px;
    background-color: ${({ theme: { colors } }) => colors.woodSmoke};
`;

export const Wrapper = styled.article`
    position: relative;
    display:flex;
    max-width: 1370px;
    flex-basis: 100%;
    max-height: 770px;
`;

export const Poster = styled.img`
    width:100%;
    padding:0px 24px;
    filter:brightness(80%);
`

export const Shadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 60px 100px ${({ theme: { colors } }) => colors.woodSmoke};
    top: 0;
    left: 0;
`

export const Content = styled.div`
    color: ${({ theme: { colors } }) => colors.white};
    position: absolute;
    padding: 0 24px 56px;
    bottom: 0;
    left: 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        padding:0px 24px;
        display:flex;
        flex-direction:column;
    }; 
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-weight: 600;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
        line-height: 120%;
    }; 
`

export const RatingBlock = styled.div`
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        display:flex;
    }; 
`

export const Rating = styled.div`
    color: ${({ theme: { colors } }) => colors.white};
    display: flex;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    padding: 0 0px 16px;
    bottom: 0;
    left: 0;

`;

export const RatingStar = styled(StarIcon)`
    width: 40px;
    height:auto;
    margin-right:10px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        width: 16px;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.MobileMedium};
    }; 
`;

export const Rate = styled.p`
    font-weight: 600;
    margin: 0;
    line-height: 29px;
`;

export const Votes = styled.p`
    
    font-weight: 400;
    line-height: 17px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        color: ${({ theme: { colors } }) => colors.darkGrey};
        margin: 6px;
    }; 
`;
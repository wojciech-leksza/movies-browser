import styled from "styled-components";
import { ReactComponent as StarIcon } from "./starIcon.svg";

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    padding: 16px;
    min-height: 650px;
    max-width: 400px;
    border-radius: ${({ theme: { borderRadiusSmall } }) => borderRadiusSmall};
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
    background-color: ${({ theme: { colors } }) => colors.white};
`;

export const Poster = styled.img`
    width: 100%;
    height: 434px;
    border-radius: ${({ theme: { borderRadiusSmall } }) => borderRadiusSmall};
    background-color: ${({ theme: { colors } }) => colors.silver};
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const MovieTitle = styled.h2`
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    line-height: 1.3;
    font-weight: 500;
    margin: 16px 0 0 0;
`;

export const YearOfProduction = styled.p`
    color: ${({ theme: { colors } }) => colors.darkGrey};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    line-height: 1.5;
    margin: 8px 0 0 0;
`;

export const TagsList = styled.ul`
    flex-grow: 1;
    list-style: none;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: 8px 0 0 0;
    padding: 0;
`;

export const Tag = styled.li`
    align-self: flex-start;
    color: ${({ theme: { colors } }) => colors.black};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    line-height: 1.4;
    padding: 8px 16px;
    background-color: ${({ theme: { colors } }) => colors.grey};
    border-radius: ${({ theme: { borderRadiusSmall } }) => borderRadiusSmall};
`;

export const Rating = styled.div`
    display: flex;
    gap: 16px;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    line-height: 1.5;
    margin-top: 10px;
`;

export const RatingStar = styled(StarIcon)`
    height: auto;
    width: 24px;
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
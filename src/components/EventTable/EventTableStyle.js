// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle';
import * as Style from '../../styles/VariableStyle';

// Global Styles
import * as Global from '../../styles/GlobalStyle';


export const AppWrapper = styled(Global.AppWrapper)`

`

export const Table = styled.table`
    position: relative;
    width: 100%;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        width: 88%;
    }
`

export const Row = styled.tr`
    width: 100%;
    display: block;
    padding: 30px 0;
    transition: background .4s ease;
    border-bottom: 1px solid ${Style.border_gray};
    color: ${Style.gray};
    &:nth-child(even) {
        &:hover {
            background: ${Style.hover_gray}
        }
    }
    &:nth-child(odd) {
        background: ${Style.primary_color};
        &:hover {
            background: ${Style.hover_gray}
        }
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileM} {
        padding: 30px 15px;
    }

    @media screen and ${deviceMin.mobileM} and ${deviceMax.mobileL} {
        padding: 30px 20px;
    }
`

export const Detail = styled.td`
    position: absolute;
    right: 30px;
    margin-top: -110px;
    background: ${Style.gray};
    padding: 15px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: transform .4s;
    &:hover {
        transform: scale(1.2);
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        right: 0;
        padding: 3px 6px;
        margin-top: 0px;
        margin-right: -25px;
    }

    @media screen and ${deviceMin.mobileM} and ${deviceMax.mobileL} {
        margin-right: -28px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.laptop} {
        right: 8px;
        margin-top: -5px;
        padding: 5px 10px;
    }
`

export const Date = styled.td`
    padding-left: 10px;
    color: ${Style.gray};

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 10px;
        padding-left: 0;
    }
`

export const DateText = styled.span`
    font-size: 18px;
    font-weight: 700;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 12px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.laptop} {
        font-size: 16px;
    }

`

export const Location = styled.td`
    padding-left: 100px;
    text-align: left;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.tablet} {
        padding-left: 20px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        padding-left: 32px;
    }
`

export const PaginationButton = styled.button`
    background: transparent;
    background-color: ${props => props.active ? `${Style.primary_color}` : `${Style.hover_gray}`};
    border: none;
    padding: 15px 20px;
    margin: 10px 5px 0;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color .4s ease;
    outline: none;
    &:hover {
        background-color: ${Style.primary_color};
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileM} {
        padding: 15px;
        margin: 10px 3px 0;
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        margin: 10px 3px 0;
    }
`

export const PreviousAppButton = styled(PaginationButton)`
    float: left;
    margin: 10px 0 0;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    &:hover {
        background-color: ${props => props.disabled ? `${Style.hover_gray}` : `${Style.primary_color}`};
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 10px;
        width: 60px;
        padding: 10px 12px;
        margin: 10px 2px 0;
    }
`

export const NextAppButton = styled(PreviousAppButton)`
    float: right;
`

export const DetailLink = styled.span`
    & a{
        text-decoration: none;
        color: ${Style.white};
        font-size: 18px;

        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            font-size: 12px;
        }

        @media screen and ${deviceMin.mobileL} and ${deviceMax.laptop} {
            font-size: 15px;
        }
    }
`

export const Name = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: ${Style.gray};

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 12px;
        text-align: left;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        font-size: 16px;
        text-align: left;
    }
`

export const City = styled.span`
    font-size: 12px;
    float: left;
    color: ${Style.gray};
`

export const Pagination = styled.div`
    margin: 20px 0;
    text-align: center;
`

export const NotFound = styled.div`
    text-align: center;
    font-family: ${Style.source_sans};
`

export const Thumb = styled.img`
    width: 200px;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        width: 100px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        width: 125px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        width: 150px;
    }
`

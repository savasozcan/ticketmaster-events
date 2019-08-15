// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle'


export const AppWrapper = styled.div`
    position: relative;
    width: 85%;
    margin: 0 auto;
    text-align: center;
`

export const AppTable = styled.table`
    position: relative;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        width: 88%;
    }
`

export const AppRow = styled.tr`
    width: 100%;
    display: block;
    padding: 30px 0;
    transition: background .4s ease;
    border-bottom: 1px solid #dbd0d0;
    color: #7f6d6d;
    &:nth-child(even) {
        &:hover {
            background: #ede1e1
        }
    }
    &:nth-child(odd) {
        background: #F5F5F5;
        &:hover {
            background: #ede1e1
        }
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileM} {
        padding: 30px 15px;
    }

    @media screen and ${deviceMin.mobileM} and ${deviceMax.mobileL} {
        padding: 30px 20px;
    }
`

export const AppDetail = styled.td`
    position: absolute;
    right: 30px;
    margin-top: -110px;
    background: #7f6d6d;
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

export const AppDate = styled.td`
    padding-left: 10px;
    color: #7f6d6d;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 10px;
        padding-left: 0;
    }
`

export const AppText = styled.span`
    font-size: 18px;
    font-weight: 700;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 12px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.laptop} {
        font-size: 16px;
    }

`

export const AppLocation = styled.td`
    padding-left: 100px;
    text-align: left;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.tablet} {
        padding-left: 20px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        padding-left: 32px;
    }
`

export const AppButton = styled.button`
    background: transparent;
    background-color: ${props => props.active ? "#F5F5F5" : "#ede1e1"};
    font-family: 'Source Sans Pro', sans-serif;
    border: none;
    padding: 15px 20px;
    margin: 10px 5px 0;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color .4s ease;
    outline: none;
    &:hover {
        background-color: #F5F5F5;
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileM} {
        padding: 15px;
        margin: 10px 3px 0;
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        margin: 10px 3px 0;
    }
`

export const PreviousAppButton = styled(AppButton)`
    float: left;
    margin: 10px 0 0;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    &:hover {
        background-color: ${props => props.disabled ? "#ede1e1" : "#F5F5F5"};
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

export const AppLink = styled.span`
    & a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;

        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            font-size: 12px;
        }

        @media screen and ${deviceMin.mobileL} and ${deviceMax.laptop} {
            font-size: 15px;
        }
    }
`

export const AppName = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: #8e6666;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 12px;
        text-align: left;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        font-size: 16px;
        text-align: left;
    }
`

export const AppCity = styled.span`
    font-size: 12px;
    float: left;
    color: #7f6d6d;
`

export const Pagination = styled.div`
    margin: 20px 0;
    text-align: center;
`

export const NotFound = styled.div`
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
`

export const AppThumb = styled.img`
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

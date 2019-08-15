// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle'


export const AppWrapper = styled.div`
    position: relative;
    width: 85%;
    margin: 4% auto 0;
    background-color: #F5F5F5;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
`

export const AppInfoWrapper = styled.div`
    display: block;
    padding: 25px 5px;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        padding: 10px 5px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        padding: 15px 5px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        padding: 20px 5px;
    }
    `

    export const AppInfoSource = styled.div`
    position: absolute;
    right: 0;
    top: 27px;
    padding-right: 20px;
    img {
        width: 30px;

        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            width: 20px;
        }

        @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
            width: 25px;
        }
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        top: 12px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        top: 14px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        top: 18px;
    }
    `

    export const AppName = styled.span`
    a {
        color: #8e6666;
    }
`
export const AppLinkWrapper = styled.span`

`

export const AppLink = styled.a.attrs({
    className: "footer-info",
  })`
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    img {
        float: right;
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 12px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        font-size: 16px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        font-size: 18px;
    }
`

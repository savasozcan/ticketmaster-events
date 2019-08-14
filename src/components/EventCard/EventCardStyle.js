// Packages
import styled from 'styled-components';

// Devices Size
import { deviceMin, deviceMax } from '../../styles/Devices'


export const AppWrapperDetail = styled.div`
    position: relative;
    background: linear-gradient(245deg,#0b80aa,#025e83);
    border-radius: 5px;
    width: 85%;
    margin: 0 auto;
    padding: 20px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    & h1, span, p, h3 {
        color : #fff;
        font-family: 'Source Sans Pro', sans-serif;
    }
    p, span {
        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            font-size: 14px;
        }
    }
`

export const AppWrapperInline = styled.div`
    padding: 20px;
`

export const AppName = styled.h1`
    color: #fff;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 18px;
        margin-top: 15%;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        margin-top: 18%;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        margin-top: 15%;
    }
`

export const AppNameDetail = styled.h3`
    display: inline-block;
    font-weight: 700;
    color: #fff;
    background: #0b80aa;
    padding: 5px 10px;
    border-radius: 5px;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 14px;
    }
`

export const AppSpan = styled.span.attrs(props => ({
    className: "info",
  }))`
    display: block;
    margin-top: 15px;
    font-size: 22px;
    font-weight: 700;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 14px;
    }
`

export const AppHome = styled.span`
    position: absolute;
    top: 2%;
    right: 10%;
    background: #4c3737;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    transition: transform .4s;
    &:hover {
        transform: scale(1.1);
    }
    & a {
        text-decoration: none;
        color: #fff;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;

        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            font-size: 12px;
        }
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        padding: 10px 5px;
    }
`

export const AppZone = styled.span`
  background: #1db51d;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
`

export const AppThumb = styled.img`
    position: absolute;
    width: 250px;
    right: 10px;
    bottom: 10px;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        width: 50px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        width: 150px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        width: 200px;
    }
`

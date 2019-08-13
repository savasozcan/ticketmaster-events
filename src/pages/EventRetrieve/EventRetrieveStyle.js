// Packages
import styled from 'styled-components';


export const AppWrapperDetail = styled.div`
    position: relative;
    background: linear-gradient(245deg,#0b80aa,#025e83);
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    margin: 0 auto;
    & h1, span, p, h3 {
        color : #fff;
        font-family: 'Source Sans Pro', sans-serif;
    }
    p, span {
        @media screen and (min-width: 360px) and (max-width: 480px) {
            font-size: 14px;
        }
    }
`

export const AppName = styled.h1`
    color: #fff;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 18px;
        margin-top: 15%;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        margin-top: 18%;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
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

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 14px;
    }
`

export const AppSpan = styled.span.attrs(props => ({
    className: "info",
  }))`
    font-size: 22px;
    font-weight: 700;

    @media screen and (min-width: 360px) and (max-width: 480px) {
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

        @media screen and (min-width: 360px) and (max-width: 480px) {
            font-size: 12px;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 480px) {
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

    @media screen and (min-width: 360px) and (max-width: 480px) {
        width: 50px;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        width: 150px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        width: 200px;
    }
`

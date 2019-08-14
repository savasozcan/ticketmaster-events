// Packages
import styled from 'styled-components';

export const AppWrapper = styled.div`
    width: 90%;
    margin: 4% auto 0;
    background-color: #F5F5F5;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
`

export const AppInfoWrapper = styled.div`
    display: inline-block;
    padding: 50px 5px;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        padding: 10px 5px;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        padding: 20px 5px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        padding: 35px 5px;
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

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 12px;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        font-size: 16px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        font-size: 18px;
    }
`
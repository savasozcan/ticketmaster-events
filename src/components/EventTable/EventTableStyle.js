// Packages
import styled from 'styled-components';


export const AppWrapper = styled.table`
    position: relative;
    width: 85%;
    margin: 0 auto;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        margin-left: 2%;
    }
`

export const AppRow = styled.tr`
    width:100%;
    display:block;
    padding: 30px 0;
    transition: background .4s ease;
    border-bottom: 1px solid #dbd0d0;
    color: #7f6d6d;
    &:nth-child(odd) {
        &:hover {
            background:#ede1e1
        }
    }
    &:nth-child(even) {
        background: #F5F5F5;
        &:hover {
            background: #ede1e1
        }
    }

    @media screen and (min-width: 360px) and (max-width: 480px) {
        padding: 20px;
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

    @media screen and (min-width: 360px) and (max-width: 600px) {
        right: 0;
        padding: 3px 6px;
        margin-top: -8px;
        margin-right: -36px;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        right: 45px;
        margin-top: -5px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        right: 12px;
        margin-top: -22px;
        padding: 10px 15px;
    }
`

export const AppDate = styled.td`
    padding-left: 10px;
    color: #7f6d6d;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 10px;
        padding-left: 0;
    }
`

export const AppText = styled.span`
    font-size: 18px;
    font-weight: 700;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 12px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        font-size: 16px;
    }

`

export const AppLocation = styled.td`
    padding-left: 100px;
    text-align: left;

    @media screen and (min-width: 360px) and (max-width: 600px) {
        padding-left: 20px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        padding-left: 32px;
    }
`

export const AppButton = styled.button`
    background: transparent;
    background-color: ${props => props.active ? "#F5F5F5" : "#ede1e1"};
    border: none;
    padding: 15px 20px;
    margin: 10px 5px 0;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color .4s ease;
    &:hover {
        background-color: #F5F5F5;
    }

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 8px;
        width: 15px;
        padding: 6px;
        margin: 10px 2px 0;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        width: 25px;
        padding: 5px 10px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        padding: 5px 10px;
        margin: 10px 2px 0;
    }
`

export const PreviousAppButton = styled(AppButton)`
    float: left;
    margin: 10px 0 0;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 8px;
        width: 50px;
        padding: 8px 12px;
        margin-right: 0;
        margin-left: 9%;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        width: 65px;
        padding: 5px 10px;
        font-size: 12px
    }

`

export const NextAppButton = styled(AppButton)`
    float: right;
    margin: 10px 0 0;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 8px;
        width: 50px;
        padding: 8px 12px;
        margin-left: 0;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        width: 65px;
        padding: 5px 10px;
        font-size: 12px
    }
`

export const AppLink = styled.span`
    & a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;

        @media screen and (min-width: 360px) and (max-width: 480px) {
            font-size: 12px;
        }
        @media screen and (min-width: 601px) and (max-width: 800px) {
            font-size: 164x;
        }
    }
`

export const AppName = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #8e6666;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 12px;
        text-align: left;
    }
`

export const AppCity = styled.span`
    font-size: 12px;
    float: left;
    color: #7f6d6d;
`

export const Pagination = styled.div`
    text-align: center;
`

export const NotFound = styled.div`
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
`

export const AppThumb = styled.img`
    width: 200px;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        width: 100px;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        width: 150px;
    }
`

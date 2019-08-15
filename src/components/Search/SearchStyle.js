// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle'


export const AppWrapper = styled.div`
    width: 85%;
    text-align: center;
    margin: 4% auto;
    font-family: 'Source Sans Pro', sans-serif;
`

export const AppForm = styled.form`
    display: flex;
    flex-flow: row nowrap;
    align-content: space-between;
    justify-content: space-between;

    @media ${deviceMax.tablet} {
        flex-direction: column;
    }
`

export const AppInput = styled.input`
    width: 90%;
    height: 50px;
    outline: none;
    border: none;
    box-shadow: 0 5px 20px -8px #7f6d6d;
    border-radius: 5px;
    padding-left: 10px;
    top: calc(50% - 20px);
    left: calc(50% - 200px);
    transition-duration: .6s;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;

    @media ${deviceMax.tablet} {
        margin: 20px auto;
    }
`

export const AppButtonWrapper = styled.button`
    position: relative;
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 700;
    width: 150px;
    text-transform: uppercase;
    padding: 15px 40px;
    margin-left: 15px;
    border-radius: 5px;
    background: #4c3737;
    overflow: hidden;
    cursor: pointer;
    border: none;
    &:before {
        position: absolute;
        content: "↑";
        left: 48%;
        top: -100%;
        font-weight: 700;
        font-size: 20px;
        transition: all .4s;
    }
    &:active {
        background: #9053a9;
        color: #823aa0;
        top: 2px;
    }
    &:hover span {
        transform: translateY(300%);
    }
    &:hover:before {
        top: 30%;
    }

    @media ${deviceMax.tablet} {
        margin: 0 auto;
    }
`

export const AppButton = styled.span`
    display: inline-block;
    transition: all 0.5s;
`

// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle';
import { colors, fonts } from '../../styles/VariableStyle';

// Global Styles
import * as Global from '../../styles/GlobalStyle';

export const AppWrapper = styled(Global.AppWrapper)`
    margin: 4% auto;
`

export const Form = styled.form`
    display: flex;
    flex-flow: row nowrap;
    align-content: space-between;
    justify-content: space-between;

    @media ${deviceMax.tablet} {
        flex-direction: column;
    }
`

export const Input = styled.input`
    width: 90%;
    height: 50px;
    outline: none;
    border: none;
    box-shadow: 0 5px 20px -8px ${colors.color_3};
    border-radius: 5px;
    padding-left: 10px;
    top: calc(50% - 20px);
    left: calc(50% - 200px);
    transition-duration: .6s;
    font-family: ${fonts.fontFamily};
    font-size: 16px;

    @media ${deviceMax.tablet} {
        margin: 20px auto;
    }
`

export const ButtonWrapper = styled.button`
    position: relative;
    color: ${colors.color_2};
    font-family: ${fonts.fontFamily};
    font-size: 18px;
    font-weight: 700;
    width: 150px;
    text-transform: uppercase;
    padding: 15px 40px;
    margin-left: 15px;
    border-radius: 5px;
    background: ${colors.color_9};
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
        background: ${colors.color_12};
        color: ${colors.color_7};
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

export const Button = styled.span`
    display: inline-block;
    transition: all 0.5s;
`

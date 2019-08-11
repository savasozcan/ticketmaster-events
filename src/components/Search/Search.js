import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Styles
const AppWrapper = styled.div`
    width: 100%;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
`
const AppInput = styled.input`
    width: 75%;
    height: 50px;
    outline: none;
    border: none;
    box-shadow: 0 5px 20px -8px #7f6d6d;
    border-radius: 5px;
    padding-left: 10px;
    top: calc(50% - 20px);
    left: calc(50% - 200px);
    transition-duration: .6s;
    font-size: 16px;
`
const AppButtonWrapper = styled.button`
    position: relative;
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 700;
    width: 150px;
    text-transform: uppercase;
    padding: 15px 40px;
    margin: 15px 30px;
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
`
const AppButton = styled.span`
    display: inline-block;
    transition: all 0.5s;
`

class Search extends Component {
    render() {
        return (
            <AppWrapper>
                <form>
                    <AppInput
                        type="text"
                        placeholder="Filter by name..."
                        name="search"/>
                        <AppButtonWrapper class="btn-2 icon-up"><AppButton>Search</AppButton></AppButtonWrapper>
                </form>
            </AppWrapper>
        )
    }
}

export default Search;

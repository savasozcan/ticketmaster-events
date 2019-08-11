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
const AppButtonWrapper = styled.p`
    width: 170px;
    display: inline-block;
    perspective: 800px;
`
const AppButton = styled.a`
    display: block;
    margin-left: 15px;
    border-radius: 5px;
    background: #4c3737;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    padding: 17px 0;
    color: white;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    transform-style: preserve-3d;
    transform-origin: 0% 0%;
    transition: all .3s;
    &:before {
        content: attr(data-hover);
        position: absolute;
        box-sizing: border-box;
        top: 100%;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 5% 0;
        width: 100%;
        background: #2F4351;
        display: block;
        transform-origin: 0% 0%;
        transform: rotateX(-90deg);
    }
    &:hover {
        transform: rotateX(58deg);
    }
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
                        <AppButtonWrapper>
                            <AppButton href="#" data-hover="Find an Event">
                                Search
                            </AppButton>
                        </AppButtonWrapper>
                </form>
            </AppWrapper>
        )
    }
}

export default Search;

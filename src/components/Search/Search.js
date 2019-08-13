// Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Actions
import {
    fetchEventListData,
    fetchEventListKeyword,
    fetchEventListPage,
    fetchEventListLoading
} from "../../actions/eventActions";

// Constants
import { createUrl } from "../../constants/baseConstants";

// Services
import { listEvent } from "../../services/eventServices";

// Styles
const AppWrapper = styled.div`
    width: 85%;
    text-align: center;
    margin: 0 auto;
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
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        width: 95%;
        height: 35px;
        margin-top: 5%;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        margin-top: 4%;
    }
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

    @media screen and (min-width: 360px) and (max-width: 480px) {
        width: 80px;
        font-size: 12px;
        padding: 10px;
        margin 5% 0;
    }

    @media screen and (min-width: 601px) and (max-width: 800px) {
        width: 95px;
        font-size: 16px;
        padding: 10px 22px;
    }
`
const AppButton = styled.span`
    display: inline-block;
    transition: all 0.5s;
`

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keyword: props.events.keyword || ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onfetchEventListLoading(true);
        this.props.onfetchEventListData([]);
        listEvent(0, this.state.keyword, (response) => {
            if (response) {
                if (response.statusCode === 200) {
                    if (response.body._embedded && response.body._embedded.events) {
                        this.props.onfetchEventListData(response.body._embedded.events);
                    }
                    if (response.body.page) {
                        this.props.onfetchEventListPage(response.body.page);
                    }
                }
            }
            this.props.onfetchEventListLoading(false);
        });
        this.props.onfetchEventListKeyword(this.state.keyword);
    }

    render() {
        const { keyword } = this.state;

        return (
            <AppWrapper>
                <form onSubmit={this.onSubmit}>
                    <AppInput
                        type="text"
                        placeholder="Filter by name..."
                        name="keyword"
                        value={keyword}
                        onChange={this.onChange}>
                    </AppInput>
                    <AppButtonWrapper className="btn-2 icon-up">
                        <AppButton>Search</AppButton>
                    </AppButtonWrapper>
                </form>
            </AppWrapper>
        )
    }
}


const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = {
    onfetchEventListData: fetchEventListData,
    onfetchEventListKeyword:fetchEventListKeyword,
    onfetchEventListPage: fetchEventListPage,
    onfetchEventListLoading: fetchEventListLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

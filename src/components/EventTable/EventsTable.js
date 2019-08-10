// Packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import styled from 'styled-components';

//Syles
const AppWrapper = styled.table`
    width: 100%;
    text-align: center;
    position: relative;
    
`
const AppRow = styled.td`
    width:100%;
    display:block;
    padding: 20px 0;
    transition: background .4s ease;
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
`
const AppDetail = styled.td`
    position: absolute;
    right: 30px;
    margin-top: -13px;
    background: #7f6d6d;
    padding: 15px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: transform .4s;
    &:hover {
        transform: scale(1.2); 
    }
`
const AppDate = styled.td`

`
const AppLocation = styled.td`
    padding-left: 100px;
`
const AppButton = styled.button`
    background: transparent;
    background-color: #ede1e1;
    border: none;
    padding: 15px 20px;
    margin-top: 5%;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color .4s ease;
    &:hover {
        background-color: #F5F5F5;
    }
`
const AppLink = styled.span`
    & a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;
    }
`
const AppName = styled.span`
    font-size: 20px;
    font-weight: 700;
`
const AppCity = styled.span`
    font-size: 12px;
`

// Actions
import {
    fetchEventListData,
    fetchEventListPage,
    fetchEventListLoading
} from "../../actions/eventActions";

// Constants
import { createUrl } from '../../constants/baseConstants';

// Services
import { listEvent } from "../../services/eventServices";


class EventTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasNextPage: false
        }

        this.hasNextPage = this.hasNextPage.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        var page = this.props.events.page.number >= 0 ? this.props.events.page.number + 1 : 0;
        this.props.onfetchEventListLoading(true);
        listEvent(page, (response) => {
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
            this.hasNextPage();
        });
    }

    loadMore() {
        if (this.state.hasNextPage) {
            var page = this.props.events.page.number + 1
            this.props.onfetchEventListLoading(true);
            listEvent(page, (response) => {
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
                this.hasNextPage();
            });
        }
    }

    hasNextPage() {
        if (
            this.props.events.page.number >= 0 &&
            this.props.events.page.totalPages >= 0 &&
            this.props.events.page.number + 1 <= this.props.events.page.totalPages) {
            this.setState({ hasNextPage: true });
        } else {
            this.setState({ hasNextPage: false });
        }
    }

    render() {
        const { hasNextPage } = this.state;
        const { events } = this.props;

        return (
            <div>
                {events.data.length > 0 && (
                    <AppWrapper>
                        {
                            events.data.map((value, index) =>{
                        
                                return (
                            <AppRow>
                                <tbody>
                                <tr key={index}>
                                    <AppDate>Date: { value.dates.start.localDate}</AppDate>
                                    <AppLocation>
                                        <AppName>{ value.name }</AppName>  (<AppCity>{ value.dates.timezone }</AppCity>)
                                    </AppLocation>
                                    <AppDetail><AppLink><Link to={createUrl("event", value.id)}>Detail</Link></AppLink></AppDetail>
                                </tr>
                                </tbody>
                            </AppRow>
                            )
                        })}
                    </AppWrapper>
                )}

                {events.loading ? (
                    <p>Loading...</p>
                ) : hasNextPage && (
                    <AppButton onClick={this.loadMore} type="button" className="load-more">Load more</AppButton>
                )}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = {
    onfetchEventListData: fetchEventListData,
    onfetchEventListPage: fetchEventListPage,
    onfetchEventListLoading: fetchEventListLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(EventTable);
    
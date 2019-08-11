// Packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import styled from 'styled-components';

// Actions
import {
    fetchEventListData,
    fetchEventListPage,
    fetchEventListLoading
} from "../../actions/eventActions";

// Constants
import { createUrl } from "../../constants/baseConstants";

// Services
import { listEvent } from "../../services/eventServices";

// Components
import Loader from "../Loader/Loader"

//Syles
const AppWrapper = styled.table`
    position: relative;
    width: 85%;
    margin: 0 auto;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        margin-left: 2%;
    }
`
const AppRow = styled.tr`
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
const AppDetail = styled.td`
    position: absolute;
    right: 30px;
    margin-top: -50px;
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
      padding: 5px 10px;
      margin-top: -12px;
      margin-right: -36px;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        right: 45px;
        margin-top: -5px;
    }
`
const AppDate = styled.td`
    padding-left: 10px;
    color: #7f6d6d;
    
    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 10px;
        padding-left: 0;
    }
`
const AppText = styled.span`
    font-size: 18px;
    font-weight: 700;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 12px;
    }

`
const AppLocation = styled.td`
    padding-left: 100px;

    @media screen and (min-width: 360px) and (max-width: 600px) {
        padding-left: 20px;
    }
`
const AppButton = styled.button`
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
        width: 20px;
        padding: 16px;
    }
`
const PreviousAppButton = styled(AppButton)`
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
        width: 75px;
        padding: 8px 12px;
    }
    
`
const NextAppButton = styled(AppButton)`
    float: right;
    margin: 10px 0 0;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 8px;
        width: 50px;
        padding: 8px 12px;
        margin-left: 0;
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        width: 75px;
        padding: 8px 12px;
    }
`
const AppLink = styled.span`
    & a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;

        @media screen and (min-width: 360px) and (max-width: 480px) {
            font-size: 12px;
        }
    }
`
const AppName = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #8e6666;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 12px;
        text-align: left;
    }
`
const AppCity = styled.span`
    font-size: 12px;
    float: left;
    color: #7f6d6d;
`
const Pagination = styled.div`
    text-align: center;
`


class EventTable extends Component {
    constructor(props) {
        super(props);

        this.getPageData = this.getPageData.bind(this);
    }

    componentDidMount() {
        var pageNumber = this.props.events.page.number >= 0 ? this.props.events.page.number : 0;
        this.getPageData(pageNumber);
    }

    getPageData(pageNumber) {
        if (this.hasPageExist(pageNumber)) {
            this.props.onfetchEventListLoading(true);
            listEvent(pageNumber, (response) => {
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
        }
    }

    hasPageExist(pageNumber) {
        var totalPages = this.props.events.page.totalPages ? this.props.events.page.totalPages : 0;

        if (pageNumber <= totalPages) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { events } = this.props;

        return (
            <div>
                {events.loading ? (
                    <Loader></Loader>
                ) : events.data.length > 0 && (
                    <AppWrapper>
                        <tbody>
                            {
                                events.data.map((value, index) => {
                                    return (
                                        <AppRow key={index}>
                                            <AppDate>
                                                <AppText>Date:</AppText> {value.dates.start.localDate}
                                            </AppDate>
                                            <AppLocation>
                                                <AppName>{value.name}</AppName> <br/>
                                                <AppCity><i>{value.dates.timezone.split('_').join(' ')}</i></AppCity>
                                            </AppLocation>
                                            <AppDetail>
                                                <AppLink>
                                                    <Link to={createUrl("event", value.id)}>Detail</Link>
                                                </AppLink>
                                            </AppDetail>
                                        </AppRow>
                                    )
                                })
                            }
                        </tbody>

                        {events.page.pagination && (
                            <Pagination>
                                <PreviousAppButton
                                    onClick={() => this.getPageData(events.page.number - 1)}
                                    type="button"
                                    disabled={!events.page.pagination.hasPreviousPage}>
                                    Previous Page
                                </PreviousAppButton>
                                {events.page.pagination.numbers.map((value, index) =>
                                    <AppButton
                                        onClick={() => this.getPageData(value)}
                                        type="button"
                                        key={index}
                                        active={events.page.number == value}>
                                        {value + 1}
                                    </AppButton>
                                )}
                                <NextAppButton
                                    onClick={() => this.getPageData(events.page.number + 1)}
                                    type="button"
                                    disabled={!events.page.pagination.hasNextPage}>
                                    Next Page
                                </NextAppButton>
                            </Pagination>
                        )}
                    </AppWrapper>
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

// Packages
import React, { Component } from "react";
import {
    Link,
    Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

// Constants
import { alertify } from "../../constants/baseConstants";

// Actions
import {
    fetchEventRetrieveData,
    fetchEventRetrieveLoading
} from "../../actions/eventActions";

// Services
import { retrieveEvent } from "../../services/eventServices";

// Components
import Loader from "../../components/Loader/Loader";

// Styles
const AppWrapperDetail = styled.div`
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
const AppName = styled.h1`
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
const AppNameDetail = styled.h3`
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
const AppSpan = styled.span.attrs(props => ({
    className: "info",
  }))`
    font-size: 22px;
    font-weight: 700;

    @media screen and (min-width: 360px) and (max-width: 480px) {
        font-size: 14px;
    }
`
const AppHome = styled.span`
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
const AppZone = styled.span`
  background: #1db51d;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
`
const AppThumb = styled.img`
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

class EventRetrieve extends Component {
    constructor(props) {
        super(props);

        document.title = "Ticket Master Event"

        this.state = {
            eventId: props.match.params.eventId,
            redirect: false
        }
    }

    componentDidMount() {
        this.props.onfetchEventRetrieveLoading(true);
        retrieveEvent(this.state.eventId, (response) => {
            if (response) {
                if (response.statusCode === 200) {
                    var data = {}
                    data[this.state.eventId] = response.body;
                    this.props.onfetchEventRetrieveData(data);
                } else if (response.statusCode === 404) {
                    alertify.error("Event not found.");
                    this.setRedirect(true);
                } else {
                    alertify.error("An unexpected error has occurred and try again later.");
                }
            } else {
                this.setRedirect(true);
                alertify.error("Event not found.");
            }
            this.props.onfetchEventRetrieveLoading(false);
        });
    }

    setRedirect(value) {
        this.setState({
            redirect: value
        })
    }

    render() {
        const { redirect, eventId } = this.state;
        const { event } = this.props;

        if (redirect) {
            return <Redirect to="/" />
        }

        return (
            <div>
                {event.loading && !event.data[eventId] ? (
                    <Loader></Loader>
                ) : event.data[eventId] && (
                    <AppWrapperDetail>
                        <AppName>{event.data[eventId].name}</AppName>
                        {event.data[eventId].promoter && event.data[eventId].promoter.description && (
                            <AppNameDetail>{event.data[eventId].promoter.description}</AppNameDetail>
                        )}
                        {event.data[eventId]._embedded && event.data[eventId]._embedded.venues.length > 0 && (
                            <p>
                                <AppSpan className="info">Adress: </AppSpan>
                                <AppSpan>{event.data[eventId]._embedded.venues[0].address.line1} / {event.data[eventId]._embedded.venues[0].address.line2}</AppSpan>
                            </p>
                        )}
                        {event.data[eventId]._embedded && event.data[eventId]._embedded.venues.length > 0 && (
                            <AppZone>{event.data[eventId]._embedded.venues[0].city.name} / {event.data[eventId]._embedded.venues[0].country.name}</AppZone>
                        )}
                        <br/><br/>
                        {event.data[eventId].dates && event.data[eventId].dates.start && (
                            <span>
                                <AppSpan className="info">Date:</AppSpan> {event.data[eventId].dates.start.localDate}
                            </span>
                        )}
                        {event.data[eventId].images.length > 0 && (
                            <AppThumb src={ event.data[eventId].images[0].url }></AppThumb>
                        )}
                    </AppWrapperDetail>
                )}

                <AppHome><Link to="/">Home Page</Link></AppHome>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = {
    onfetchEventRetrieveData: fetchEventRetrieveData,
    onfetchEventRetrieveLoading: fetchEventRetrieveLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(EventRetrieve);

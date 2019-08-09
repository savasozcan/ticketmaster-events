// Packages
import React, { Component } from "react";
import {
    Link,
    Redirect
} from 'react-router-dom';
import { connect } from "react-redux";

// Actions
import {
    fetchEventRetrieveData,
    fetchEventRetrieveLoading
} from "../../actions/eventActions";

// Services
import { retrieveEvent } from "../../services/eventServices";


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
                    console.log("Not found.");
                    this.setRedirect(true);
                } else {
                    console.log("An unexpected error has occurred and try again later.");
                }
            } else {
                this.setRedirect(true);
                console.log("An unexpected error has occurred and try again later.");
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
                <Link to="/">Home Page</Link>

                {event.loading && !event.data[eventId] ? (
                    <p>Loading...</p>
                ) : event.data[eventId] && (
                    <p>{event.data[eventId].name}</p>
                )}
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

// Packages
import React, { Component } from "react";

// Components
import EventTable from '../../components/EventTable/EventsTable';

class EventList extends Component {
    constructor(props) {
        super(props);

        document.title = "Ticket Master Events"
    }

    render() {
        return (
            <div>
                <EventTable />
            </div>
        );
    }
}

export default EventList;

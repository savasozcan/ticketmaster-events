// Packages
import React, { Component } from "react";

// Components
import EventTable from '../../components/EventTable/EventTable';
import Search from '../../components/Search/Search'

class EventList extends Component {
    constructor(props) {
        super(props);

        document.title = "Ticket Master Events"
    }

    render() {
        return (
            <div>
                <Search />
                <br />
                <EventTable />
            </div>
        );
    }
}


export default EventList;

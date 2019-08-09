// Packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

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
                    <ul>
                        {events.data.map((value, index) =>
                            <li key={index}>
                                <p>{value.name}</p>
                                <Link to={createUrl("event", value.id)}>Detail</Link>
                            </li>
                        )}
                    </ul>
                )}

                {events.loading ? (
                    <p>Loading...</p>
                ) : hasNextPage && (
                    <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
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
    
import { FETCH_EVENTS } from './typeActions'

const API = 'https://app.ticketmaster.com/discovery/v1/events.json?apikey=3er65DQ0rElbfzXfAJ1xlbzVI0k1OkNf'

export const fetchData = () => dispatch => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            const eventsType = data._embedded.events;
            dispatch({
                type: FETCH_EVENTS,
                payload: eventsType
            })
        })
}


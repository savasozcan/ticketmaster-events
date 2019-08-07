import { FETCH_EVENTS } from '../actions/typeActions';

const initState = {
    items = []
}

export default function(state = initState, action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}
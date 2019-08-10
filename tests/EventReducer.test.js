import {    
    eventListReducer, 
    eventRetrieveReducer,
    listState,
    retrieveState    
} from '../src/reducers/eventReducer';
import * as actionTypes from '../src/constants/actionConstants';

describe('event reducer', () => {
    it('should return the initial state', () => {
        expect(eventListReducer(listState, {})).toEqual({
            data: [],
            page: {},
            loading: false,
        });
    });
    // it('should store the token upon login', () => {
    //     expect(eventListReducer({
    //         data: [],
    //         page: {},
    //         loading: false,
    //     }, 
    //     {
    //         type: actionTypes.FETCH_EVENT_LIST_LOADING, 
    //         loading: true
    //     })).toEqual({
    //         loading: true,
    //     })
    // });
    it('should store the retrieve', () => {
        expect(eventRetrieveReducer(retrieveState, {})).toEqual({
            data: {},
            loading: false,
        })
    })
})